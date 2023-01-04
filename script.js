
const addButton = document.querySelector('.add');
const total = document.querySelector('.total')
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const closeForm = document.querySelector('.close');
const submit = document.querySelector('.submit');
const warnings = document.querySelectorAll('.warning')
const inputs = document.querySelectorAll('.input');
const main = document.querySelector('main');

String.prototype.capitalize = function () {
    return this.toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
  };

submit.addEventListener('click', addBooktoLibrary)
let myLibrary =[];
let totalBooks = 0;
function Book(title, author, pages, language, date, status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.language=language;
    this.date=date;
    this.status=status;
  
}

let newLibrary = [];
function addBooktoLibrary(){
    formValidation();
    let newBook = new Book(document.getElementById("title").value.capitalize(), document.getElementById("author").value.capitalize(), document.getElementById("pages").value, 
    document.getElementById("language").value.capitalize(), document.getElementById("date").value, document.getElementById("status").value)
    myLibrary.push(newBook);
    totalBooks = myLibrary.length;
    total.textContent = `${totalBooks}`
    console.log(myLibrary)
    setData();
    getData()
   
    newLibrary = myLibrary.slice(myLibrary.length-1);
    
    for(let i=0; i < newLibrary.length; i++){
        let div = document.createElement('div');
        div.classList.add('book');
        let x = document.createElement('p');
        x.classList.add('remove');
        x.textContent="x";
        div.append(x)
        let title =document.createElement('h3');
        title.textContent = newLibrary[i].title;
        div.append(title)
        let author = document.createElement('p');
        author.textContent = "Author: " + newLibrary[i].author;
        div.append(author);
        let pages = document.createElement('p');
        pages.textContent = "Pages: " + newLibrary[i].pages;
        div.append(pages);
        let language = document.createElement('p');
        language.textContent = "Language: " + newLibrary[i].language;
        div.append(language);
        let date = document.createElement('p');
        date.textContent = "Date: " + newLibrary[i].date;
        div.append(date);
        main.append(div);
        if(newLibrary[i].status === "yes"){
            div.style.backgroundImage = "linear-gradient(70deg,#ffeddb, #e3caa5)";
        } else {
            div.style.backgroundImage = "linear-gradient(70deg,#f7ccac, #c69b7b)";
        }
        const removeBtns = document.querySelectorAll('.remove');
        
        removeBtns.forEach(btn => btn.addEventListener('click', (e)=> {btn.parentNode.style.display = "none";
       
       totalBooks--;
        total.textContent = `${totalBooks}`
    }))
    
        
     }
     
    
     form.reset();
    
}

function setData(){
    localStorage.setItem('books', JSON.stringify(myLibrary))
}  
function getData() {
  let books =  localStorage.getItem('books');
  books = JSON.parse(books)
  myLibrary = books
}
function formValidation(){
    let newInputs = Array.from(inputs);
    let validatedInputs = newInputs.every(input => input.checkValidity());
    if(validatedInputs == true) {
        form.classList.remove('active')
        overlay.classList.remove('active')
    }
    else {
        submit.setAttribute('disabled')
    }
}

closeForm.addEventListener('click', deleteForm);
addButton.addEventListener('click', createForm);

function deleteForm(){
    form.classList.remove('active')
    overlay.classList.remove('active')
}
function createForm(){
    form.classList.add('active');
    overlay.classList.add('active');

}
getData()
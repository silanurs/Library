
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


function addBooktoLibrary(){
    formValidation();
    let newBook = new Book(document.getElementById("title").value.capitalize(), document.getElementById("author").value.capitalize(), document.getElementById("pages").value, 
    document.getElementById("language").value.capitalize(), document.getElementById("date").value, document.getElementById("status").value)
    myLibrary.push(newBook); 
    total.textContent = myLibrary.length;
    console.log(myLibrary.length)
     setData();
     render();
    
     form.reset();
    
}
function createCard(book){
    setData()
    let div = document.createElement('div');
        div.classList.add('book');
        let x = document.createElement('p');
        x.classList.add('remove');
        x.textContent="x";
        div.append(x)
        let title =document.createElement('h3');
        title.textContent = book.title;
        div.append(title)
        let author = document.createElement('p');
        author.textContent = "Author: " + book.author;
        div.append(author);
        let pages = document.createElement('p');
        pages.textContent = "Pages: " + book.pages;
        div.append(pages);
        let language = document.createElement('p');
        language.textContent = "Language: " + book.language;
        div.append(language);
        let date = document.createElement('p');
        date.textContent = "Date: " + book.date;
        div.append(date);
        main.append(div);
        if(book.status === "yes"){
            div.style.backgroundImage = "linear-gradient(70deg,#f7ccac, #c69b7b)";
        } else {
            div.style.backgroundImage = "linear-gradient(70deg,#594545, #9e7676)";
            div.style.color = "#ffeddb"
        }
        
        
        x.addEventListener('click', () =>{myLibrary.splice(myLibrary.indexOf(book),1)
        total.textContent = myLibrary.length;
        setData()
        render()
    });
       
      
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
function render(){
   const books = document.querySelectorAll('.book');
   books.forEach(book => main.removeChild(book));
   
   for (let i=0; i<myLibrary.length; i++){
    createCard(myLibrary[i]);
}}
function setData(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}
function restore(){
    if(!localStorage.myLibrary){
        render();
    } else {
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        total.textContent = objects.length;
        render();
    }
 }
 restore()
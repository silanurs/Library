const addButton = document.querySelector('.add');
const total = document.querySelector('.total')
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const closeForm = document.querySelector('.close');
const submit = document.querySelector('.submit');

const inputs = document.querySelectorAll('.input');
const main = document.querySelector('main');


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
  
    let newBook = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, 
    document.getElementById("language").value, document.getElementById("date").value, document.getElementById("status").value)
    myLibrary.push(newBook)
    totalBooks = myLibrary.length;
    total.textContent = `${totalBooks}`
    console.log(myLibrary)
    form.classList.remove('active')
    overlay.classList.remove('active')
    newLibrary = myLibrary.slice(myLibrary.length-1);
    console.log(newLibrary)
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
        //const books = document.querySelectorAll('.book');
        removeBtns.forEach(btn => btn.addEventListener('click', ()=> btn.parentNode.style.display = "none"))
        
     }
     form.reset();
    
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
   
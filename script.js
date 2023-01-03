const addButton = document.querySelector('.add');

const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const closeForm = document.querySelector('.close');
const submit = document.querySelector('.submit');

const inputs = document.querySelectorAll('.input');
const main = document.querySelector('main');


submit.addEventListener('click', addBooktoLibrary)
let myLibrary =[];

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
    
    form.classList.remove('active')
    overlay.classList.remove('active')
    for(let i=0; i < myLibrary.length; i++){
        let div = document.createElement('div');
        div.classList.add('book');
        let x = document.createElement('p');
        x.classList.add('remove');
        x.textContent="x";
        div.append(x)
        let title =document.createElement('h3');
        title.textContent = myLibrary[i].title;
        div.append(title)
        let author = document.createElement('p');
        author.textContent = "Author:" + myLibrary[i].author;
        div.append(author);
        let pages = document.createElement('p');
        pages.textContent = "Pages: " + myLibrary[i].pages;
        div.append(pages);
        let language = document.createElement('p');
        language.textContent = "Language: " + myLibrary[i].language;
        div.append(language);
        let date = document.createElement('p');
        date.textContent = "Date: " + myLibrary[i].date;
        div.append(date);
        main.append(div);
        
     }
    
}
const books = document.querySelectorAll('.book');
const removeBtns = document.querySelectorAll('.remove');
removeBtns.forEach(button => button.addEventListener('click', removeBook))
function removeBook(){
    
    books.forEach(book => book.style.display="none")
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
   
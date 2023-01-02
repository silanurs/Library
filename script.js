const addButton = document.querySelector('.add');
const div = document.querySelector('.book');
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const closeForm = document.querySelector('.close');
const submit = document.querySelector('.submit');
const removeBtn = document.querySelector('.remove');

function Book(title, author, pages, language, date, status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.language=language;
    this.date=date;
    this.status=status;
}
closeForm.addEventListener('click', deleteForm)
addButton.addEventListener('click', createForm);
function deleteForm(){
    form.classList.remove('active')
     overlay.classList.remove('active')
}
function createForm(){
    form.classList.add('active');
    overlay.classList.add('active');

}
   
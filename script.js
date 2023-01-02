const addButton = document.querySelector('.add');
const removeBook = document.querySelector('.book');
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const closeForm = document.querySelector('.close');
const submit = document.querySelector('.submit');
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
   
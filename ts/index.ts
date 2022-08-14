const defaultText = document.querySelector('.default') as Element;
const listWrapper = document.querySelector('.list-wrapper') as Element;
const toDoInputForm = document.querySelector('.input-todo');

// To do Add
function toDoAddFunc(newTodo:string){
    const toDoListItem = document.createElement('li');
    const contents = document.createElement('span');
    const deleteBtn = document.createElement('button');
    // TO DO CHECK
    toDoListItem.appendChild(contents);
    contents.innerHTML = newTodo;
    contents.addEventListener('click',toDoCheck);
    // DELETE
    toDoListItem.appendChild(deleteBtn);
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener('click', todoDelete);
    listWrapper.appendChild(toDoListItem);
    // Default Delete
    DefaultToggle();
}

// CHECK
function toDoCheck(event){
    const checkTarget = event.target;
    checkTarget.classList.toggle('done');
}
// DELETE
function todoDelete(event){
    const deleteTarget = event.target.parentElement;
    deleteTarget.remove();
    // Default
    DefaultToggle();
}

// Default Toggle
function DefaultToggle(){
    const lists = document.querySelectorAll('li');
    let listsLength = lists.length
    if(listsLength < 1){
        defaultText.classList.remove('default-delete');
    }else if(listsLength >= 1){
        defaultText.classList.add('default-delete');
    }
}

// Add Event Listner When submit and send Input value 
toDoInputForm?.addEventListener('submit', (event)=>{
    const toDoEnter = document.querySelector('.enter');
    // If stoDoEnter has HTMLInputElement = true
    if(toDoEnter instanceof HTMLInputElement){
        const newTodo = toDoEnter.value;
        toDoAddFunc(newTodo);
    }
    // CANNOT REFROAD PREVENT
    event.preventDefault();
})
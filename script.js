const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // get text from user
  let userInput = window.prompt("Please enter some text:", "New todo item")

  // create list item
  const newItem = document.createElement('li')

  // add text
  newItem.textContent = userInput
  

  // add buton
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.classList.add('todo-checkbox');
  newCheckbox.addEventListener('click', checkboxClicked); 
  newItem.appendChild(newCheckbox);

  // add item
  list.appendChild(newItem)


  // update item count
  const NewCount = document.getElementById('item-count');
  let old_value_count = parseInt(NewCount.textContent);
  old_value_count++
  NewCount.textContent = old_value_count


// update uncheked
const NewCheckcount = document.getElementById('unchecked-count');
let old_value_checkcount = parseInt(NewCount.textContent);
old_value_checkcount++
NewCheckcount.textContent = old_value_count


}

function checkboxClicked() {
  const NewCountSpan = document.getElementById('unchecked-count');
  let old_value = parseInt(NewCountSpan.textContent);
  old_value--

  NewCountSpan.textContent = old_value
}

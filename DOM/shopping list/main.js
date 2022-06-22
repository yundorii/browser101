const input = document.querySelector('.footer_input');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer_button');

function onAdd() {
  const text = input.value;

  if(text.length===0) {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);

  item.scrollIntoView({block: 'center'});

  input.value = ``;
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item_row');

  const divider = document.createElement('div');
  divider.setAttribute('class','divider');

  const item = document.createElement('div');
  item.setAttribute('class','item');
  const name = document.createElement('span');
  name.setAttribute('class','item_name')
  name.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class','delete_button');
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteBtn.addEventListener('click',()=> {
    items.removeChild(itemRow);
  })

  items.appendChild(itemRow);
  itemRow.appendChild(item);
  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(divider);

  return itemRow;
}

addBtn.addEventListener('click',onAdd);

input.addEventListener('keypress',(e)=> {
  if(e.keyCode === 13) {
    onAdd();
  }
})
const input = document.querySelector('.footer_input');
const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer_button');

const resetBtn = document.querySelector('.all_reset');

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

let dataId = 0;

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item_row');
  itemRow.setAttribute('data-id',dataId);

  itemRow.innerHTML = `
  <div class="item">
    <span class="item_name">${text}</span>
    <button class="delete_button">
      <i class="fa-solid fa-trash-can" data-id='${dataId}'></i>
    </button>
  </div>
  <div class="divider"></div>
  `;

  dataId++;
  return itemRow;
}

addBtn.addEventListener('click',onAdd);

input.addEventListener('keydown',(e)=> {
  if(e.keyCode === 13) {
    onAdd();
  }
})

resetBtn.addEventListener('click',()=> {
  if(confirm('전체삭제를 하시겠습니까?')) {
    items.innerHTML= ``;
  }
  return;
});

items.addEventListener('click',e=> {
  const id = e.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`li[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})
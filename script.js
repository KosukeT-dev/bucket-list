let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
  if(input.value.trim() != 0){
    addBtn.classList.add('active')
  } else {
    addBtn.classList.remove('active')
  }
})

addBtn.addEventListener('click', () => {
  if(input.value.trim() != 0){
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <p>${input.value}</p>
    <div class="item-btn">
      <button class="achievement" type="achievement">達成</button>
      <button class="delete" type="delete">削除</button>
    </div>`
    tasks.appendChild(newItem);
    input.value = '';  
  } else {
    alert('入力してください')
  }
})

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }
})

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('achievement')){
    e.target.parentElement.parentElement.classList.toggle('item-completed');
  }
})
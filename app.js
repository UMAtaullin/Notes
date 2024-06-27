const inputEl = document.getElementById('title')
const createBtn = document.getElementById('create')
const listEl= document.getElementById('list')

const notes = ['first', 'second', 'third', 'fourth']

const render = (note) => {
  listEl.insertAdjacentHTML(
    'beforeend',
    `
      <li class="list-group-item">
      <span>${note}</span>
      <span>
        <span class="btn-success">&check; Изменить</span>
        <span class="btn-danger">&times; Удалить</span>
      </span>
      </li>
    `
  )
}

for (let note of notes) {
  render(note)
}

createBtn.onclick = function() {
  if (inputEl.value.length === 0) {
    return
  }

  render(inputEl.value)
  
  inputEl.value = ''
}


















/* Theory
Массивы это переменные(контейнер) в которых хранятся другие переменные
const array = [1, 2, 5, 290]
// const arrayString = ['a', 'b', 'c']
// const array = new Array(1, 3, 5)

// console.log(array.length)
// console.log(array[1])
// console.log(array[array.length - 1])
// array[0] = 'Hi'
// array[array.length] = 'by'
// console.log(array)
*/
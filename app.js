// Получить значение которое вписано в input
const inputEl = document.getElementById('title')
// Обработать событие клика
const createBtn = document.getElementById('create')
// Чтобы добавлять эл в список
const listEl= document.getElementById('list')

// Добавляем обработчик события на кнопку
createBtn.onclick = function() {
  // если пустая строка то ничего не возвращает
  if (inputEl.value.length === 0) {
    return
  }
  // принимает два параметра: первый - куда положить - beforeend
  listEl.insertAdjacentHTML(
    'beforeend',
    `
      <li class="list-group-item">
      <span>${inputEl.value}</span>
      <span>
        <span class="btn-success">&check; Изменить</span>
        <span class="btn-danger">&times; Удалить</span>
      </span>
      </li>
    `
  )
  // как только добавили запись выше очистить input
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
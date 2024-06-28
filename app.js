const inputEl = document.getElementById('title')
const createBtn = document.getElementById('create')
const listEl= document.getElementById('list')

const notes = [
  {title: 'first', completed: false},
  {title: 'second', completed: true},
  {title: 'third', completed: true}
]

function render() {
  listEl.innerHTML = ''
  for (let i = 0; i < notes.length; i++) {
    listEl.insertAdjacentHTML('beforeend', 
      getNoteTemplate(notes[i], i))
  }
}

render()

createBtn.onclick = function() {
  if (inputEl.value.length === 0) {
    return
  }
  const newNote = {
    title: inputEl.value, completed: false,
  }

  notes.push(newNote)
  render()
  inputEl.value = ''
}

listEl.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = parseInt(event.target.dataset.type)

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else if (type === 'remove') {
      notes.splice(index, 1)
    }

    render()
  }
}

function getNoteTemplate(note, index) {
  return `
    <li class="list-group-item">
    <span class="${note.completed ? 'decorate' : ''}">
      ${note.title}
    </span>
    <span>
      <span 
        class="btn-success"
        data-index="${index}"
        data-type="toggle">
          &check; Изменить
      </span>
      <span 
        class="btn-danger"
        data-index="${index}"
        data-type="remove">
          &times; Удалить</span>
    </span>
    </li>
  `
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

/**
 * Object Theory
const person = {
  surname: 'Ural',
  lastName: 'Jon',
  year: 1988,
  hasGirlFriend: false,
  lg: ['ru', 'en', 'bsh'],
  getFullName: function() {
    console.log(this.surname, this.lastName)
  },
}

person.getFullName()
 */
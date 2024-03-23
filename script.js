const taskArea = document.querySelector('#taskArea')
const titleArea = document.querySelector("#titleList")

var TaskList = []

var Title = localStorage.getItem('Title')
var TaskListString = localStorage.getItem('TaskList')
var TaskListArray = JSON.parse(TaskListString)

const taskTemplate = 
`
  <button type="button" id="checkBox" onclick="check(event)">
    <img src="./assets/square.svg">
  </button>

  <input spellcheck="false" maxlength="50" autocomplete="off" id='taskInput' placeholder="Tarefa vazia"></input>
  
  <button type="button" id="deleteTaskButton" onclick="deleteTask(event)">
    <img src="./assets/x.svg">
  </button>
`

// Resconstrói a página com base no LocalSave do usuário

titleArea.value = Title

if (TaskListArray && TaskListArray.length > 0) {
  TaskListArray.map((taskObject) => {

    let div = document.createElement('div')
    div.setAttribute('class', 'taskBox')
    div.innerHTML = taskTemplate
    taskArea.appendChild(div)

    let input = div.querySelector('input')
    input.value = taskObject[0].name

    let checkBox = div.querySelector('img')
    if (taskObject[0].checked) {
      checkBox.src = './assets/check.svg'
      input.classList.add('check')
    }
  })
}

if (taskArea.childElementCount >= 29) {
  const button = taskArea.nextElementSibling
  button.classList.add('hidden')
}

if (taskArea.childElementCount > 1) {
  taskArea.firstElementChild.remove()
}

function save() {

  let inputsArea = taskArea.querySelectorAll("input")

  TaskList = []

  if (titleArea.value.length > 0) {
    var Title = titleArea.value
    localStorage.setItem('Title', Title)
  } else {
    localStorage.removeItem('Title')
  }

  inputsArea.forEach(task => {
    if (task.value.length > 0) {
      TaskList.push([
        { name: task.value, checked: task.classList.contains('check') }
      ])
    }
  });

    if (TaskList.length > 0) {
      localStorage.setItem('TaskList', JSON.stringify(TaskList))
    } else {
      localStorage.removeItem('TaskList')
    }

  const alertSave = document.querySelector('#alertSave')

  setTimeout(() => {
    alertSave.classList.remove('hidden')
  });

  alertSave.classList.add('hidden')
}

function newTask() {

  if (taskArea.childElementCount >= 29) {
    const button = taskArea.nextElementSibling
    button.classList.add('hidden')

  } else {
    let div = document.createElement('div')
    div.setAttribute('class', 'taskBox')
    div.innerHTML = taskTemplate
    taskArea.appendChild(div)
    const inputArea = div.querySelector('input')
    inputArea.focus()

    if (taskArea.childElementCount >= 29) {
      const button = taskArea.nextElementSibling
      button.classList.add('hidden')
    }
  }
}

function check(event) {

  const checkBox = event.target.querySelector('img') 
  const input = event.target.nextElementSibling

    if (checkBox.src.includes('square.svg')) {
      if (input.value.length == 0) {
        input.focus()
      } else {
        checkBox.src = './assets/check.svg'
        input.classList.add('check')
      }
    } else {
      checkBox.src = './assets/square.svg'
      input.classList.remove('check')
    }
}

function deleteTask(event) {

  let task = event.target.parentElement
  const button = taskArea.nextElementSibling

  if (task.nodeName == 'BUTTON') {
    task = task.parentElement
  }

  task.remove()
  button.classList.remove('hidden')
}

function alertModal() {

  const alertModal = document.querySelector('#alertModal')
  const button = alertModal.querySelector('#functionButton')
  const p = alertModal.querySelector('p')
  const h1 = alertModal.querySelector('h1')
  const container = document.querySelector('#container')

  h1.classList.remove('clear', 'clearAll')

  button.classList.remove('clearConfirm', 'clearAllConfirm')

  container.classList.remove('hidden')
  alertModal.classList.remove('hidden')

  if (taskArea.childElementCount == 0) {
    p.innerHTML = 'Você não tem nenhuma tarefa para apagar.'
    button.innerHTML = 'Voltar'
    button.classList.add('hidden')
    button.removeEventListener('click', clearAll)
    h1.classList.add('clear')
    h1.innerHTML = 'LIMPAR TAREFAS'

  } else {

    p.innerHTML = 'Tem certeza que deseja apagar todas as tarefas?'
    button.innerHTML = 'Limpar todas as tarefas'
    button.classList.remove('hidden')
    button.classList.add('clearAllConfirm')
    button.addEventListener('click', clearAll)
    h1.classList.add('clearAll')
    h1.innerHTML = 'APAGAR TAREFAS'

  }
}

function cancelar() {

  const alertModal = document.querySelector('#alertModal')
  const container = document.querySelector('#container')
  alertModal.classList.add('hidden')
  container.classList.add('hidden')

}

function clearAll() {

  taskArea.innerHTML = ''

  let button = taskArea.nextElementSibling
  button.classList.remove('hidden')

  let alertModal = document.querySelector('#alertModal')
  alertModal.classList.add('hidden')

  let container = document.querySelector('#container')
  container.classList.add('hidden')

  newTask()
}

function changeTheme() {
  const html = document.documentElement

  switch (html.className) {
    case 'light':
      html.classList.remove('light')
      html.classList.add('dark')
      break
    case 'dark':
      html.classList.remove('dark')
      html.classList.add('light')
      break
  }
}
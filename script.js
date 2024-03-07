const taskArea = document.querySelector('#taskArea')

// Observer que altera o tamanho máximo dos inputs
// Baseado na largura do input

function newTask() {

  if (taskArea.childElementCount >= 100) {
    const button = taskArea.nextElementSibling
    button.classList.add('hidden')

  } else {
    let div = document.createElement('div')
    div.setAttribute('class', 'taskBox')
    div.innerHTML = taskTemplate

    taskArea.appendChild(div)

    const inputArea = div.querySelector('input')
    inputArea.focus()

    if (taskArea.childElementCount >= 100) {
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

function alertModal(type) {

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
    button.addEventListener('click', clear)
    h1.classList.add('clear')
    h1.innerHTML = 'LIMPAR TAREFAS'
  } else {
    switch (type) {
      case 'clear':
        p.innerHTML = 'Tem certeza que deseja apagar todas as tarefas vazias?'
        button.innerHTML = 'Limpar tarefas vazias'
        button.classList.remove('hidden')
        button.classList.add('clearConfirm')
        button.removeEventListener('click', clearAll)
        button.addEventListener('click', clear)
        h1.classList.add('clear')
        h1.innerHTML = 'LIMPAR TAREFAS'
        break
  
      case 'clearAll':
        p.innerHTML = 'Tem certeza que deseja apagar todas as tarefas?'
        button.innerHTML = 'Limpar todas as tarefas'
        button.classList.remove('hidden')
        button.classList.add('clearAllConfirm')
        button.removeEventListener('click', clear)
        button.addEventListener('click', clearAll)
        h1.classList.add('clearAll')
        h1.innerHTML = 'APAGAR TAREFAS'
        break
    }
  }
}

function cancelar() {

  const alertModal = document.querySelector('#alertModal')
  const container = document.querySelector('#container')
  alertModal.classList.add('hidden')
  container.classList.add('hidden')
}

function clear() {

  const taskBox = document.querySelectorAll(".taskBox")
  taskBox.forEach(task => {
  if (task.querySelector('input').value.length == 0) {
    task.remove()

  let button = taskArea.nextElementSibling
  button.classList.remove('hidden')
    }
  }); 

  let alertModal = document.querySelector('#alertModal')
  alertModal.classList.add('hidden')

  let container = document.querySelector('#container')
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
}

const taskTemplate = 
`
  <button type="button" id="checkBox" onclick="check(event)">
    <img src="./assets/square.svg">
  </button>

  <input maxlength="32" autocomplete="off" id='taskInput' placeholder="Tarefa vazia"></input>
  
  <button type="button" id="deleteTaskButton" onclick="deleteTask(event)">
    <img src="./assets/x.svg">
  </button>
`
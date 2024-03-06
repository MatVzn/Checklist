const taskArea = document.querySelector('#taskArea')

function newTask() {
  
  if (taskArea.childElementCount >= 15) {
    const button = taskArea.nextElementSibling
    button.classList.add('hidden')
  } else {
    let div = document.createElement('div')
    div.setAttribute('class', 'taskBox')
    div.innerHTML = taskTemplate

    taskArea.appendChild(div)

    const inputArea = div.querySelector('input')
    inputArea.focus()
  }
}

function check(event) {
  checkBox = event.target
    if (checkBox.src.includes('square.svg')) {
      if (checkBox.nextElementSibling.value.length == 0) {
        checkBox.nextElementSibling.focus()
      } else {
        checkBox.src = './assets/check.svg'
        checkBox.nextElementSibling.classList.add('check')
      }
    } else {
      checkBox.src = './assets/square.svg'
      checkBox.nextElementSibling.classList.remove('check')
    }
}

function alert(type) {
  const alert = document.querySelector('#alert')
  const button = alert.querySelector('#functionButton')
  const p = alert.querySelector('p')
  const h1 = alert.querySelector('h1')
  const container = document.querySelector('#container')

  h1.classList.remove('clear', 'clearAll')

  button.classList.remove('clearConfirm', 'clearAllConfirm')

  container.classList.remove('hidden')
  alert.classList.remove('hidden')

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
  const alert = document.querySelector('#alert')
  const container = document.querySelector('#container')
  alert.classList.add('hidden')
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

  let alert = document.querySelector('#alert')
  alert.classList.add('hidden')

  let container = document.querySelector('#container')
  container.classList.add('hidden')
}

function clearAll() {
  taskArea.innerHTML = ''

  let button = taskArea.nextElementSibling
  button.classList.remove('hidden')

  let alert = document.querySelector('#alert')
  alert.classList.add('hidden')

  let container = document.querySelector('#container')
  container.classList.add('hidden')
}

const taskTemplate = 
`
  <img src="./assets/square.svg" class="checkBox" onclick="check(event)">
  <input placeholder="Tarefa vazia" maxlength="37"></input>
`
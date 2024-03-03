

function newTask() {
  const taskArea = document.querySelector('.taskArea')

  let div = document.createElement('div')
  div.setAttribute('class', 'taskBox')
  div.innerHTML = taskTemplate

  taskArea.appendChild(div)

  const inputArea = div.querySelector('input')
  inputArea.focus()
  
  if (taskArea.childElementCount >= 16) {
    const button = taskArea.nextElementSibling
    button.classList.add('hidden')
  }
}

function check(event) {
  const taskArea = document.querySelector('.taskArea')

  checkBox = event.target
    if (checkBox.src.includes('square.svg')) {
      checkBox.src = './assets/check.svg'
      checkBox.nextElementSibling.classList.add('check')
    } else {
      checkBox.src = './assets/square.svg'
      checkBox.nextElementSibling.classList.remove('check')
    }
}

function clearAll() {
  const Tasks = 'oi'
}

function clearEmpty() {
  const emptyTasks = 'oi'
}

const taskTemplate = 
`
  <img src="./assets/square.svg" class="checkBox" onclick="check(event)">
  <input maxlength="37"></input>
`
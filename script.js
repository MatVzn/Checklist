const taskArea = document.querySelector('.taskArea')

function newTask() {
  
  let div = document.createElement('div')
  div.setAttribute('class', 'taskBox')
  div.innerHTML = taskTemplate

  taskArea.appendChild(div)

  const inputArea = div.querySelector('input')
  inputArea.focus()
  
  if (taskArea.childElementCount >= 15) {
    const button = taskArea.nextElementSibling
    button.classList.add('hidden')
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

function clearAll() {
  taskArea.innerHTML = ''

  const button = taskArea.nextElementSibling
  button.classList.remove('hidden')
}

function clearEmpty() {
  const taskBox = document.querySelectorAll(".taskBox")
  taskBox.forEach(task => {
    if (task.querySelector('input').value.length == 0) {
      task.remove()

      const button = taskArea.nextElementSibling
      button.classList.remove('hidden')
    }
  });
}

const taskTemplate = 
`
  <img src="./assets/square.svg" class="checkBox" onclick="check(event)">
  <input maxlength="37"></input>
`
function newTask() {
  const taskArea = document.querySelector('.taskArea')

  let div = document.createElement('div')
  div.setAttribute('class', 'taskBox')
  div.innerHTML = taskTemplate

  taskArea.appendChild(div)

  const inputArea = div.querySelector('input')
  inputArea.focus()
}

function check(event) {
  checkBox = event.target
    if (checkBox.src.includes('square.svg')) {
      checkBox.src = './assets/check.svg'
    } else {
      checkBox.src = './assets/square.svg'
    }
}

const taskTemplate = 
`
  <img src="./assets/square.svg" class="checkBox" onclick="check(event)">
  <input autofocus maxlength="37"></input>
`
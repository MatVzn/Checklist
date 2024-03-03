function newTask() {
  const taskArea = document.querySelector('.taskArea')
  
  let div = document.createElement('div')
  div.setAttribute('class', 'taskBox')
  div.innerHTML = taskTemplate

  taskArea.appendChild(div)
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
  <input maxlength="37"></input>
`
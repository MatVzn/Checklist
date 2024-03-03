function newTask() {
  const taskArea = document.querySelector('.taskArea')
  let div = document.createElement('div')
  div.setAttribute('class', 'taskBox')
  div.innerHTML = taskTemplate

  taskArea.appendChild(div)
}

const checkBox = document.querySelectorAll('#checkBox')

checkBox.forEach(checkBox => {
  checkBox.addEventListener('click', () => {
    if (checkBox.src.includes('square.svg')) {
      checkBox.src = './assets/check.svg'
    } else {
      checkBox.src = './assets/square.svg'
    }
  })
})



const taskTemplate = 
`
  
    <img src="./assets/square.svg" id="checkBox" onclick="checkTask()">
    <input maxlength="37"></input>
  
`
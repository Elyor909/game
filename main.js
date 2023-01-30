let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__block'),
    score = 0,
    time = 0,
    interval = 0;

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})
box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {  
        score++
        event.target.remove()
        createObj()
    } else if(event.target.classList.contains('square')) {  
        score++
        event.target.remove()
        createObj()
    } else if(event.target.classList.contains('triangle')) {
        score++
        event.target.remove()
        createObj()
    } else if(event.target.classList.contains('trianglee')) {
        score++
        event.target.remove()
        createObj()
    } else if(event.target.classList.contains('triangleee')) {
        score++
        event.target.remove()
        createObj()
    }
})


function start() {
    interval =  setInterval(() => decrease(),1000)
    createObj()
}

function decrease() {
   if(time == 0) {
        endGame()
   } else {
        let currentTime = --time
        if(currentTime < 10) {
            currentTime = '0' + currentTime
        }
        timeOut.innerHTML = '00:' + currentTime
   }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
}

// function createball() {
//     let ball = document.createElement('div')
//     let size = random(20, 100)
//     let coor = box.getBoundingClientRect()
//     let x = random(0, coor.width - size)
//     let y = random(0, coor.height - size)
//     let color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    
//     ball.classList.add('ball')
//     ball.style.width = size + 'px'
//     ball.style.height = size + 'px'
//     ball.style.left = x + 'px'
//     ball.style.top = y + 'px'
//     ball.style.background = color
    
//     box.append(ball)
// }


function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}

function createObj() {
    let color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    let obj = random(1, 5)
    if(obj == 1) {
        let square = document.createElement('div')
        let size = random(20, 100)
        let coor = box.getBoundingClientRect()
        let x = random(0, coor.width - size)
        let y = random(0, coor.height - size)
        
        square.classList.add('square')
        square.style.width = size + 'px'
        square.style.height = size + 'px'
        square.style.left = x + 'px'
        square.style.top = y + 'px'
        square.style.background = color
        
        box.append(square)
    } else if(obj == 2) {
        let ball = document.createElement('div')
        let size = random(20, 100)
        let coor = box.getBoundingClientRect()
        let x = random(0, coor.width - size)
        let y = random(0, coor.height - size)    
        
        ball.classList.add('ball')
        ball.style.width = size + 'px'
        ball.style.height = size + 'px'
        ball.style.left = x + 'px'
        ball.style.top = y + 'px'
        ball.style.background = color
        
        box.append(ball)
    } else if(obj == 3) {
        let triangle = document.createElement('div')
        let size = random(20, 100)
        let coor = box.getBoundingClientRect()
        let x = random(0, coor.width - size)
        let y = random(0, coor.height - size)
           
        triangle.classList.add('triangle')
        triangle.style.borderLeftWidth = size + 'px'
        triangle.style.borderRightWidth = size + 'px'
        triangle.style.borderBottomWidth = size + 'px'
        triangle.style.left = x + 'px'
        triangle.style.top = y + 'px'
        triangle.style.borderBottomColor = color
        
        box.append(triangle)
    } else if(obj == 4) {
        let trianglee = document.createElement('div')
        let size = random(20, 100)
        let coor = box.getBoundingClientRect()
        let x = random(0, coor.width - size)
        let y = random(0, coor.height - size)   
        
        trianglee.classList.add('trianglee')
        trianglee.style.borderRightWidth = size + 'px'
        trianglee.style.borderBottomWidth = size + 'px'
        trianglee.style.left = x + 'px'
        trianglee.style.top = y + 'px'
        trianglee.style.borderBottomColor = color
        
        box.append(trianglee)
    } else if(obj == 5) {
        let triangleee = document.createElement('div')
        let size = random(20, 100)
        let coor = box.getBoundingClientRect()
        let x = random(0, coor.width - size)
        let y = random(0, coor.height - size)
        
        triangleee.classList.add('triangleee')
        triangleee.style.borderLeftWidth = size + 'px'
        triangleee.style.borderBottomWidth = size + 'px'
        triangleee.style.left = x + 'px'
        triangleee.style.top = y + 'px'
        triangleee.style.borderBottomColor = color
        
        box.append(triangleee)
    }
}

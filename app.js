const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector("#board")

const handler = (e) => {
    const action = e.target.id 
    // if(action==='rock'){
    //     board.innerHTML = "Rock Crushes Scissors"
    // }
    // else if(action === 'paper'){
    //     board.innerHTML = "Paper Traps Rock"
    // }
    // else if(action === 'scissor'){
    //     board.innerHTML = "Scissors Cuts Paper"
    // }
    // else{
    //     board.innerHTML = "Click Something"
    // }

    switch(action)
    {
        case "rock":
            board.innerHTML = "Rock Crushes Scissors"
            break
        case "paper":
            board.innerHTML = "Paper Traps Rock"
            break
        case "scissor":
            board.innerHTML = "Scissors Cuts Paper"
            break
        default:
            board.innerHTML = "Click Something"
    }
    
}

rock.addEventListener('click', handler) 

paper.addEventListener('click',handler) 

scissor.addEventListener('click',handler) 


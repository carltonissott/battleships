import gameboard from "./gameboard"
import { endGame } from "./gameend"
import player from "./player"



export function CPUmove(playerGameboard){

    const attackBoard = document.getElementById("attackBoard")
    attackBoard.addEventListener('click',()=>{
        const random = Math.floor(1+ (Math.random() * 50))
        playerGameboard.recieveAttack(random)
        if (playerGameboard.board[random] == "miss"){
            const div = document.getElementById ("item"+random)
            div.textContent="X"
            div.style.backgroundColor = "orange"
            div.setAttribute("class","hit")
        } else {
            const div = document.getElementById ("ship"+random)
            div.textContent = "HIT!"
            div.style.backgroundColor = "red"
            div.setAttribute("class","hit")
            checkSunkCPU(playerGameboard)
        } 
    })

}
 
function checkSunkCPU(element){
    const sunkArray = element.board.filter(checkSunkNumber)
    if (sunkArray.length==12){
        endGame("lost")
    }
}

export function checkSunkNumber(element){
    return element == 'hit'
}
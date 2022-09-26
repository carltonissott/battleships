import gameboard from "./gameboard"
import newShip from "./ship"
import { checkSunkNumber } from "./CPUmove"
import { endGame } from "./gameend"


export function addAttackBoard(){
    const attackBoard = document.getElementById("attackBoard")
    attackBoard.setAttribute("class","grid")
    attackBoard.setAttribute('div','attackBoard')
    for (let i = 1; i < 50; i++) {
        const grid = document.getElementById('attackBoard')
        const div = document.createElement('div')
        div.setAttribute('id',"itemCPU"+i)
        div.setAttribute('class', "gridChild")
        grid.appendChild(div)
} 
}

export function addAttack(){
    const CPUgameboard = gameboard([CPUship1,CPUship2,CPUship3]) 
    for (let i = 1; i < 50; i++){
        const div = document.getElementById("itemCPU"+i)
        div.addEventListener('click',()=>{
            CPUgameboard.recieveAttack(i)
            if (CPUgameboard.board[i] == "miss"){
                div.textContent="X"
                div.style.backgroundColor = "green"
                div.setAttribute("class","hit")
            } else {
                div.textContent = "HIT!"
                div.style.backgroundColor = "red"
                div.setAttribute("class","hit")
                checkSunkPlayer(CPUgameboard)

            } 
        }
        )
    }
}

function randomLocationV(shipLength){
        const test = []
        const random = Math.floor(1+ (Math.random() * 18))
        test.push(random)
        for (let y = 1; y < shipLength; y++) {
            test.push(random+(7*y))
        }
        return test
    }

function randomLocationH(shipLength){
    const random = Math.floor(1+ (Math.random() * 5))
    const locations = [[12,13,14],[33,34,35],[47,48,49],[43,44,45],[46,47,48]]
    return locations[random]
}
const CPUship1 = newShip(5,randomLocationV(5))

const CPUship2 = newShip(4,randomLocationV(4))

const CPUship3 = newShip(3,randomLocationH(3))

function checkSunkPlayer(element){
    const sunkArray = element.board.filter(checkSunkNumber)
    if (sunkArray.length==12){
        endGame()
    }
}
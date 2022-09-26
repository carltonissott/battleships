import gameboard from "./gameboard";
import newShip from "./ship";
import player from "./player"
import './style.css';
import { addAttack, addAttackBoard } from "./gamestart";
import { CPUmove } from "./CPUmove";


function createGrid(){
    for (let i = 1; i < 50; i++) {
        const grid = document.getElementById('grid')
        const div = document.createElement('div')
        div.setAttribute('id',"item"+i)
        div.setAttribute('class', "gridChild")
        grid.appendChild(div)
    }}
function addHoverEffects(){
    for(let i = 1; i < 50; i++){
            const div = document.getElementById("item"+i)
            
            div.addEventListener("mouseover",function mouseOver(){
                const coordsHover = []
                for (let x = 0; x < getShip(); x++) {
                    let pos = rotateBricks(x,i) + i
                    coordsHover.push(pos)
            } 
                if (![7,8].every(element => {return coordsHover.includes(element)}) && ![14,15].every(element => {return coordsHover.includes(element)}) && ![21,22].every(element => {return coordsHover.includes(element)}) && ![28,29].every(element => {return coordsHover.includes(element)}) && ![35,36].every(element => {return coordsHover.includes(element)}) && ![42,43].every(element => {return coordsHover.includes(element)}) && ![49,50].every(element => {return coordsHover.includes(element)})){
                    coordsHover.forEach(element => {
                        document.getElementById("item"+element).style.backgroundColor = "red"
                    })}
    })
            div.addEventListener("mouseleave",function mouseLeave(){
                const coordsHover = []
                for (let x = 0; x < getShip(); x++) {
                        let pos = rotateBricks(x,i)+ i
                        coordsHover.push(pos)
                }
                if (![7,8].every(element => {return coordsHover.includes(element)}) && ![14,15].every(element => {return coordsHover.includes(element)}) && ![21,22].every(element => {return coordsHover.includes(element)}) && ![28,29].every(element => {return coordsHover.includes(element)}) && ![35,36].every(element => {return coordsHover.includes(element)}) && ![42,43].every(element => {return coordsHover.includes(element)}) && ![49,50].every(element => {return coordsHover.includes(element)}))
                {      
                    coordsHover.forEach(element => {
                        document.getElementById("item"+element).style.backgroundColor = "antiquewhite"
            }
            )}
            })
            div.addEventListener("click",()=>{
                const coords = []
                for (let x = 0; x < getShip(); x++) {
                    let pos = rotateBricks(x,i)+ i
                    const item = document.getElementById("item"+pos)
                    item.style.backgroundColor = "green"
                    const newID = item.id
                    const changedID = newID.replace('item','ship')
                    item.setAttribute('id',changedID)
                   coords.push(pos)
            }
                newPlayer.playerShipArray.push(newShip(getShip(),coords))
                document.getElementById("length"+getShip()).remove()
                startGame()
        })}
        }

function startGame(){
    if (getShip()==0){
        document.getElementById("shipType").remove()
        document.getElementById("rotate").remove()
        document.getElementById("title").textContent = "Let's Play!"
        const playerGameboard = gameboard(newPlayer.playerShipArray)
        addAttackBoard()
        addAttack()
        CPUmove(playerGameboard)
    }
}

let rotation = 'horizontal'

createGrid()
addHoverEffects()

function getShip(){
    return document.getElementById("shipType").value
}


const newPlayer = player("Carlton")

function rotateBricks (x,i){
    if(rotation == "horizontal" && (i+((getShip()-1))*7)<50){
      return x*7
   } else if (rotation == "vertical")
   {
       return x
   } else{
    return -i
   }
}



document.getElementById("rotate").addEventListener("click",()=>{
    if (rotation == 'horizontal'){
        rotation = "vertical"
    } else {
        rotation = "horizontal"
    }
})

document.getElementById("playagain").addEventListener("click",()=>{
    location.reload();
})


const conditions = [7,14,21,28,35,42,49]
const conditions2 = [8,15,22,29,36,43,50]




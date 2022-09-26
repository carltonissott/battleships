export function endGame(status){
    document.getElementById("backgroundendgame").style.visibility="visible"
    if (status=="lost"){
        document.getElementById("status").textContent = "YOU LOST!"
    }
}

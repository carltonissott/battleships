const newShip = (shipLength, coord) =>{
    let maxHits = 0
    const isHit = ()=>{
        maxHits++
        return maxHits
    }

    const isSunk = () =>{
        if(maxHits == shipLength){
        console.log('SUNK!!!')
        return true
        } else {
            return false
        }}

    return {shipLength,isSunk,isHit,coord}
}


module.exports = newShip
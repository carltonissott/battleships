
const gameboard = (shipArray)=>{
    const ships = shipArray
    const board = new Array(49)
    const recieveAttack = (cordAttack)=>{
        board[cordAttack]="miss"
        ships.forEach(element => {
            if((element.coord).includes(cordAttack)){
                element.isHit()
                board[cordAttack]="hit"
                return "hit"
            }
        });
        return board
    }
    return{board,recieveAttack,ships}
}



module.exports=gameboard
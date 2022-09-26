const gameboard = require("./src/gameboard")
const newShip = require("./ship")

const ship1 = newShip(4,24)

const ship2 = newShip(2,30)

const playerboard = gameboard([ship1,ship2])
playerboard.recieveAttack(24)
playerboard.recieveAttack(25)
playerboard.recieveAttack(26)
playerboard.recieveAttack(27)
playerboard.recieveAttack(28)

test ("position at 25 should be a hit",()=>{
    expect(playerboard.board[25]).toMatch("hit")
})

test ("testing maxhits",()=>{
    expect(ship1.maxHits).toEqual(1)
})
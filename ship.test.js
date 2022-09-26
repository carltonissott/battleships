const newShip = require("./ship")

const testShip = newShip(4,12)

testShip.isHit()
testShip.isHit()
testShip.isHit()
testShip.isHit()



test ("test if ship is sunk", ()=>{
    expect(testShip.isSunk()).toBeTruthy()
})


test ("test if coords is working", ()=>{
    expect(testShip.coordArray).toEqual([12,13,14,15])
})
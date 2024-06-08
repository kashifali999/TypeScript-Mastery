/*function halfFryEgg(){
    let cocked = 1 + 1.5 + 2
    console.log(cocked)    
}
halfFryEgg()*/

//177
/*function halfFryEgg():number {
    let cocked = 1 + 1.5 + 2
    return cocked
}
let response:number = halfFryEgg()
console.log(response)*/

//182
/*function addNumber(a:number, b:number):number {
    return a + b
}
let response = addNumber(3, 5)
console.log(response)*/

//183
/*function calculateArea(height, width):number{
    return height * width
}
let response = calculateArea(100, 150)
console.log(response)*/

//190
function halfFryEgg(egg:number, ...ingrediants:number[]){
    console.log(egg)
    console.log(...ingrediants)
}
halfFryEgg(1, 3, 2.5, 6.5)
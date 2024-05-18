// Slide # 02 (119) - Operators unary
//Postfix operators - take effect for next iteration
console.log("Postfix operators")
let a:number = 5
let b:number = 2
console.log(a++)
console.log(b--)
console.log(a)
console.log(b)
// Slide # 02 (120) - Operators unary
//Prefix operators - take effect from current iteration
console.log("Prefix operators")
let c:number = 5
let d:number = 2
console.log(++c)
console.log(--d)
console.log(c)
console.log(d)
// Slide # 02 (121) - Operators unary
console.log("Home work")
let e:number = 5
let f:number = 2
let g:number = ++e + e++ + --f + f-- + e + f++ + f
console.log(g)
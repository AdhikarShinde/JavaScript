let s = {
    o:1,
    p:2
}

console.log(s)

let f = function(s) {
     s.o = 9
}
f(s)
console.log(s)
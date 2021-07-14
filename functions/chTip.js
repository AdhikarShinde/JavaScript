let tip = function (total, tipper = .2) {
    return `A ${tipper*100}% Tip on ₹${total} would be ${total*tipper}`
}

let i=tip(400,0.25)
console.log(i)
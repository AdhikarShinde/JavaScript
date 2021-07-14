console.log('- - - - Temperature Converter - - - - ')

let tempConverter = function (T) {
      
    let d = (T-32)*5/9
    let k = (T-32 )*5/9+273.15

    return d,k

}

let d=k = tempConverter(99)

console.log(d)
console.log(k)
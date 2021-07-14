let Fahe = 99

let run = function(Fahe) {
 
    let degreeC = (Fahe-32)*5/9
    let kelvin = (Fahe-32 )*5/9+273.15 

    return {
        Farenhite : `Entered Temperature in Farenhite is ${Fahe}`,
        Degrees :   `Conversion into Degree Celsius Will be ${degreeC}`,
        Kelvin :    `and Conversion into Kelvin Will be ${kelvin}`
    }

}

let x = run(Fahe)

console.log(`${x.Farenhite} ${x.Degrees} ${x.Kelvin}`)
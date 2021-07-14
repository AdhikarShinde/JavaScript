console.log(` - - - - - - The Grade Calculator - - - - - -`)

// Creating Percentage Cal Function

let perCal = function(marksGot,outOf){

   return marksGot/outOf*100 

}

let per = perCal(1,20)

if(per > 90 && per < 100)
  console.log(`${per} Percentage You Got A Grade`)
else if(per > 80 && per < 89)
 console.log(`${per} Percentage You Got B Grade`)
else if(per > 70 && per < 79)
 console.log(`${per} Percentage You Got C Grade`)
else if(per > 60 && per < 69)
 console.log(`${per} Percentage You Got D Grade`)
else
 console.log(`${per} Percentage You Got F Grade`)







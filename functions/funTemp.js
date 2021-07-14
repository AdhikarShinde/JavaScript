console.log(' - - - - Temperature Check  - - - - ')

let tempCheck = function (T) {

    if(T >= 20 && T <=25){

        console.log('Good Weather')
    
    }else if(T > 25 && T <=45){
    
        console.log('Pretty Hot')
    
    }else{
        console.log('it might be insenlay cold or insenlay hot')
    }

}

tempCheck(25)
let game = function(name = 'Naruto',score) {
  
    return 'Name : ' + name + ' - ' + 'Score : ' + score

}

let a = game('Adhikar',99)
console.log(a)
a=game(undefined,90)
console.log(a)
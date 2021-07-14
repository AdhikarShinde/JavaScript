let book = {
    title : "Fanmorphis",
    author : "Norm Chomsky",
    publication : "One Publication"
}

let book2 = {
    title : "GamerTag",
    author : "kame hame",
    publication : "Nine Publications"
}


let printBook = function(Ob) {
    
    return {
        summary : `Book Title is ${Ob.title} By ${Ob.author}.`,
        PubliSummary : `The Book ${Ob.title} is Published By ${Ob.publication}` 
    }

}

let a = printBook(book)
let b = printBook(book2)

console.log(a)
console.log(a.PubliSummary)

//spread operators arrays
const arrayOne = ["Lucy", "Diana", "Maria"]
const arrayTwo = ["Aisyah", "Siti", "Srikandi"]

const concatArrays = [...arrayOne,...arrayTwo]
// concatArrays.forEach(function(n){
//     console.log(n)
// })


//spread operators object
const address = {
    city : "Munich",
    country : "Germany",
    postCode : "GGM4"
}

const name = {
    firstName : "Charlotte",
    lastName : "Femme"
}

const person = {...address, ...name }
console.log(JSON.stringify(person))


//arrows functions
const hellow = () => {
    let aku = "nopal"
    return `hellow ${aku}`
}
console.log(hellow)

var kumpulanAngka = [3,5,7,9,8]
var map = kumpulanAngka.map((n) => n / 2)
console.log(map)
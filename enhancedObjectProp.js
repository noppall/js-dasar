const pricePropName = "PRICE"

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2){
            return n1 + n2
        },
        [pricePropName.toLowerCase()] : price
    }
}

const calc = calculator("casio", 13000)
console.log(calc.name)
console.log(calc.add(20,30))
console.log(calc.price)
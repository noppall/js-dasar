const name = ["Lisa", "Perylane", "Kinto", "Joyo"]

const [lisa, perlane, ...restOfNames] = name 
console.log(`${lisa}, ${perlane}, ${restOfNames}`)
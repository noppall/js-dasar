const person = {
    name : "Diana",
    address : ["Amsterdam","Munich"],
    toString: function(){
        //console.log(`${this.name} live in ${this.address}`)
        this.address.forEach( home => {
            console.log(`${this.name} live in ${home}`)
        })
    }
}
person.toString()
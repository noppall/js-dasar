//penggunaan var untuk variabel yang bisa diubah, const sebaliknya
var name = "nopal";
name = "sudah bukan nopal";

const ibu = "pertiwi";
console.log(ibu)

//object
var warga = {
    "nama" : "nopal",
    "umur" : 17,
    "kota" : "malang",
    "alamat" : {
        "jalan" : "Jaksa Agung Suprapto 2B",
        "kode pos" : 65112,
        "kelurahan" : "samaan",
    }
}

console.log(warga)
console.log(Object.values(warga))
// console.log(JSON.stringify(warga))
console.log(JSON.stringify(warga.alamat))

//arrays
var hobi = ["ngoding", "gitaran", ["membaca", "menulis"], {"berfikir" : "filsafat"}]
hobi.forEach(function(i, index){
    console.log(index + " - " + i)
})

for(x of hobi){
    console.log(x)
}

//for loops
var penulis = [
    {name : "Cak Nun", age: 67},
    {name : "Pramoedya Ananta", age: 70}
];

// for (var j = 0; j <= penulis.length; j++){
//     console.log(penulis[j].name)
//     console.log(penulis[j].age)
// }

//switch
var person = {
    name : "Anna",
    age : 18
}

switch(person.age){
    case 18:
        console.log("sudah dewasa kamu")
        break
    case 17:
        console.log("bentar lagi dewasa")
        break
    default:
        console.log("belum cukup umur")
}
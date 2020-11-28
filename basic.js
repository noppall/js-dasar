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
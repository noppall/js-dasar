const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back to the server")
    }, 3000)

    setTimeout(() => {
        reject("no data back to the server, there was an error")
    }, 2000)
})

promise.then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
})
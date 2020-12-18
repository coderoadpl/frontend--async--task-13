const sayHello = () => {
    console.log('Hello!')
}

const TIME = 1000 // ms

let timeoutId

for (let i = 0; i < 100; i++) {
    if(timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(
        sayHello,
        TIME
    )
}
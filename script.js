const sayHello = (name) => {
    console.log('Hello ' + name + '!')
}

const debounce = (time) => {
    return (fn) => {
        let timeoutId
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId)

            timeoutId = setTimeout(
                () => fn(...args),
                time
            )
        }
    }
}

const debounce1s = debounce(1000)

const seyHelloDebounced = debounce1s(sayHello)

for (let i = 0; i < 100; i++) {
    seyHelloDebounced('Mateusz')
}
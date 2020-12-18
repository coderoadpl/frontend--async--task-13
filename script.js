const sayHello = () => {
    console.log('Hello!')
}

const debounce = (time) => {
    return (fn) => {
        let timeoutId
        return () => {
            if (timeoutId) clearTimeout(timeoutId)

            timeoutId = setTimeout(
                fn,
                time
            )
        }
    }
}

const debounce1s = debounce(1000)

const seyHelloDebounced = debounce1s(sayHello)

for (let i = 0; i < 100; i++) {
    seyHelloDebounced()
}
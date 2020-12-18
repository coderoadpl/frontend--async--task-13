const sayHello = function (name) {
    const suffix = this.helloSuffix || '!'
    console.log('Hello ' + name + suffix)
}

const debounce = (time) => {
    return (fn) => {
        let timeoutId
        return function (...args) {
            if (timeoutId) clearTimeout(timeoutId)

            timeoutId = setTimeout(
                () => fn.call(this, ...args),
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

const context = {
    helloSuffix: '?',
    sayHello: debounce1s(sayHello)
}

for (let i = 0; i < 100; i++) {
    context.sayHello('Mateusz')
}
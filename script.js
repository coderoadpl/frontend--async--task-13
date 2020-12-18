const sayHello = function (name, lastName) {
    const suffix = this.helloSuffix || '!'
    console.log('Hello ' + name + ' ' + lastName + suffix)
}

const debounce = (time) => {
    return (fn) => {
        let timeoutId
        return function (...args) {
            if (timeoutId) clearTimeout(timeoutId)

            const fnBound = fn.bind(this, ...args)

            timeoutId = setTimeout(fnBound, time)
        }
    }
}

const debounce1s = debounce(1000)

const seyHelloDebounced = debounce1s(sayHello)

for (let i = 0; i < 100; i++) {
    seyHelloDebounced('Code', 'Road')
}

const context = {
    helloSuffix: '?',
    sayHello: debounce1s(sayHello)
}

for (let i = 0; i < 100; i++) {
    context.sayHello('Code', 'Road')
}
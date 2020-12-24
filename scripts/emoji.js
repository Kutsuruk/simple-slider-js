let firstEmoji = {
    name: 'love',
    isShowed: true,
    devices: {
        android: true,
        mac: true,
        IOS: true,
        linux: false,
    },
    greet() {
        console.log(`Hello my name is ${this.name}`)
    },
}

let secondEmoji = {
    name: 'kiss',
    isShowed: false,
    devices: {
        android: true,
        mac: true,
        IOS: true,
        linux: true,
    },
    greet() {
        console.log(`Hello my name is ${this.name}`)
    },
}

let thirdEmoji = {
    name: 'think',
    isShowed: false,
    devices: {
        android: false,
        mac: false,
        IOS: false,
        linux: false,
    },
    greet() {
        console.log(`Hello my name is ${this.name}`)
        this.name = 'changed'
    },
}

console.log(firstEmoji.name)
console.log(secondEmoji.devices.IOS)
console.log(thirdEmoji.greet())
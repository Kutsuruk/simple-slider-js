function Dog(name) {
    // let this = {}

    this.name = name
    this.voice = function() {
        console.log(`Grrrrrrr, I am ${this.name}`)
    }

    console.log(this)
    //return this
}

let rex = new Dog('Rex')
let jack = new Dog('Jack')
jack.paws = 4
jack.ears = 2

let buldog = {
    name: 'buldog',
    voice() {
        console.log('Grrrrrrr!')
    }
}

rex.voice()
jack.voice()
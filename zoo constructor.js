class Enclosure {
    constructor(animalType, size, zookeeper) {
        this._animalType = animalType
        this._size = size
        this._zookeeper = zookeeper
    }

    get animalType() {
        return this._animalType
    }
    get size() {
        return this._size
    }
    get zookeeper() {
        return this._zookeeper
    }

    cleanEnclosure() {
        console.log(`${this._zookeeper} has to clean the enclosure for the ${this._animalType}`)
    }

    feedMe() {
        console.log(`${this._animalType} needs to be fed`)
    }
}

class Aquatic extends Enclosure {
    constructor(animalType, size, zookeeper, waterType, isFiltered=true) {
        super(animalType, size, zookeeper)
        this._waterType = waterType
        this._isFiltered = isFiltered
    }
    get waterType() {
        return this._waterType
    }

    get isFiltered() {
        return this._isFiltered
    }

    // cleanEnclosure () {
    //     super.cleanEnclosure()
    // }

    cleanEnclosure() {
        if (this._isFiltered) {
            console.log('Cleaning not needed')
        }
        else {
            super.cleanEnclosure()
        }
    }

}

let elephants = new Enclosure ('Mammal', 'extra large', 'Dvkr')
let dolphins = new Aquatic('Mammal', 'medium', 'Leon', 'Salt')

let animals = [elephants, dolphins]
for (animal of animals) {
    animal.cleanEnclosure()
}
class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }
    tostring() {
        return `the car mode is: ${this.model} and it's year is: ${this.year}`;
    }
}

export {Car}
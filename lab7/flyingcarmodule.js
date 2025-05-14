import {Car} from './carmodule.js'

class FlyCar extends Car {
    constructor(model, year) {
        super(model, year);
        this.canFly = true;
    }

    tostring() {
        return `${super.tostring()}. I can Fly`;
    }
}

export {FlyCar}
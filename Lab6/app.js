class Engine{
    #source;
    static #count = 0;
    constructor(source) {
        if (new.target === Engine) {
            throw new TypeError("Cannot construct Engine instances directly");
        }
        this.#source = source
        Engine.#count++;
    }
    get source() {
        return this.#source;
    }
    
    static get count() {
        return Engine.#count;
    }
}

class Car extends Engine {
    #top;
    #left;
    #carElement;
    constructor(top, left, img) {
        super(img);
        this.#top = top;
        this.#left = left;
        this.top = top;
        this.left = left;
        this.#carElement = document.getElementById("car")
    }
    
    set top(top) {
        console.log(this.#carElement)
        this.#top = top
        this.#carElement.style.top = `${top}px`;
    }
    
    set left(left) {
        this.#left = left
        this.#carElement.style.left = `${left}px`;
    }

    get top() {
        return this.#top;
    }
    
    get left() {
        return this.#left;
    }

    moveLeft() {
        this.#left -= 10
    }

    moveRight() {
        this.#left += 10
    }

    changeStyle(style) {
        console.log(this.#carElement)
        Object.assign(this.#carElement.style, style);
    }

    moveCar(direction) {
        const containerWidth = document.querySelector('.container').offsetWidth;
        const carWidth = this.#carElement.offsetWidth;
        
        let intervalId = setInterval(()=> {
            if (direction === 'left') {
                this.left -= 5;
                if(this.left <= 0) {
                    this.left = 0;
                    clearInterval(intervalId);
                }
            }
            else if (direction === 'right') {
                this.left += 5;
                if (this.left + carWidth >= containerWidth) {
                    this.left = containerWidth - carWidth;
                    clearInterval(intervalId);
                }
            }
            else {
                clearInterval(intervalId);
            }
        }, 16)
    }
}

const myCar = new Car(50, 20, 'imgs/images6-removebg-preview.png');
document.getElementById('moveLeft').addEventListener('click', () => {
    myCar.moveLeft();
});

document.getElementById('moveRight').addEventListener('click', () => {
    myCar.moveRight();
});

myCar.changeStyle({
    border: '2px solid blue',
    borderRadiuss: '5px',
    transition: 'transform 0.2s ease',
    trasform: 'scale(1, 1)',
});

setTimeout(() => {
    myCar.changeStyle({
        trasform: 'scale(1)',
    })
}, 200);
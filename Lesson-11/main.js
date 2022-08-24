const HAMBURGER =  
    {
        'little': {
            'price': 5,
            'callories': 20,
        },
        'big': {
            'price': 10,
            'callories': 40,
        },
        'topping': {
            'cheese': {
                'price': 1,
                'callories': 20,
            },
            'salad': {
                'price': 2,
                'callories': 5,
            },
            'potato': {
                'price': 1.5,
                'callories': 10,
            }
        },
        'supplements': {
            'seasoning': {
                'price': 1.5,
                'callories': 0,
            },
            'mayonnaise': {
                'price': 2,
                'callories': 5,
            }
        }
}


class Hamburger{
    constructor(size) {
        this.size = size;
        this.toppings = [];
        this.supplement = [];
    }
    addToppings(arr) {
        arr.forEach(element => {
            this.toppings.push(element)
        });
        return console.log(arr)
    }
    addSupplement(arr) {
        arr.forEach(el => {
            this.supplement.push(el)
        })
        return console.log(arr);
    }

    getPrice() {
        let price = this.size.price;
        this.toppings.forEach(item => price += item.price)
        this.supplement.forEach(item => price += item.price)
        return console.log("Сумма заказа:", price)
    }

    getCalories() {
        let callories = this.size.callories;
        this.toppings.forEach(item => callories += item.callories)
        this.supplement.forEach(item => callories += item.callories)
        return console.log("Каллории: ", callories)
    }
}

const burger = new Hamburger(HAMBURGER.little);
burger.addToppings([HAMBURGER.topping.potato, HAMBURGER.topping.salad]);
burger.addSupplement([HAMBURGER.supplements.mayonnaise, HAMBURGER.supplements.seasoning]);
burger.getPrice();
burger.getCalories();
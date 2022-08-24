let furniture = [
	{
		type: 'desk',
		price: 27.87
	},
	{
		type: 'closet',
		price: 187.32
	},
	{
		type: 'chair',
		price: 79.29
	},
	{
		type: 'bed',
		price: 239.99
	}
];

let devices = [
	{
		type: 'desktop',
		price: [272, 769]
	},
	{
		type: 'laptop',
		price: [499, 1800]
	},
	{
		type: 'smartphone',
		price: [100, 800]
	},
	{
		type: 'tablet',
		price: [185, 1000]
	},
    {
		type: 'console',
		price: 889
	}
];

let appliances = [
	{
		type: 'oven',
		price: 780
	},
	{
		type: 'microwave',
		price: [50, 1400]
	},
	{
		type: 'mixer',
		price: 215.17
	}
];

document.write(
    `<div id="container">
        <table class="table">
            <tr class="table-title">
                <th>Icon</th>
                <th>Name</th>
                <th>Price</th>
            </tr>`
)
    
    
function Product(category, type, price) {
    this.category = category;    
    this.type = type;
    this.price = price;
    this.render = function() {
        return `
            <tr class="products">
                <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                <td>${this.type}</td>
                <td><b>${Array.isArray(this.price) ? `${this.price[0]} - ${this.price[this.price.length - 1]}` : this.price} USD</b></td>
            </tr>`
    }
}

// РЕАЛИЗАЦИЯ ЧЕРЕЗ ФУНКЦИЮ

// function Category(array, name) {
//     array.forEach(element => {
//         let product = new Product(name, element.type, element.price)
//         document.write(product.render())
//     })
//     return array;
// }

// let product1 = new Category(furniture, 'furniture');
// let device1 = new Category(devices, 'devices')
// let appliances1 = new Category(appliances, 'appliances')


// РЕАЛИЗАЦИЯ БЕЗ ФУНКЦИИ

// const furniture1 = new Product('furniture', 'desk', 27.87);
// const furniture2 = new Product('furniture', 'closet', 187.32);
// const furniture3 = new Product('furniture', 'chair', 79.29);
// const furniture4 = new Product('furniture', 'bed', 239.99);
// const devices1 = new Product('devices', 'desktop', [272, 769]);
// const devices2 = new Product('devices', 'laptop', [499, 1800]);
// const devices3 = new Product('devices', 'smartphone', [100, 800]);
// const devices4 = new Product('devices', 'tablet', [185, 1000]);
// const devices5 = new Product('devices', 'console', 889);
// const appliances1 = new Product('appliances', 'oven', 780);
// const appliances2 = new Product('appliances', 'microwave', [50, 1400]);
// const appliances3 = new Product('appliances', 'mixer', 215.17);

// document.write(
//     furniture1.render(),
//     furniture2.render(),
//     furniture3.render(),
//     furniture4.render(),
//     devices1.render(),
//     devices2.render(),
//     devices3.render(),
//     devices4.render(),
//     devices5.render(),
//     appliances1.render(),
//     appliances2.render(),
//     appliances3.render(),
// )

// console.log(furniture4.category); // furniture
// console.log(furniture4.type); // bed
// console.log(furniture4.price); // 239.99
// console.log(furniture4.render());




    
document.write(
`</table>
</div>`
)
    
    // function getCategory(item) {
//     return [item.type, item.price].join(" ");
// }

// let product1 = furniture.map(item => new Product(furniture, item.type, item.price).render());

// console.log(furniture.map(getCategory));
// console.log(devices.map(getCategory));


    // return [item.type, item.price].join(" ");
    
    
    // 33087,23 + 11845,07 + 671,22

'use strict';

// Initialize constructor functions
function Bags (brand, model) {
    this.brand = brand;
    this.model = model;
}

Bags.prototype.producedBy = function () {
    console.log(`${this.model} bag is produced by ${this.brand}`);
}

function HandCrafted (brand, model){
    Bags.call(this, brand, model);
};

HandCrafted.prototype = Object.create(Bags.prototype);
HandCrafted.prototype.handMade = function () {
    console.log(`The bag is handmade and painstakingly hand-stitched.`);
}

function Hermes(brand, model, price, productCode, size) {
    HandCrafted.call(this, brand, model);
    this.price = price;
    this.productCode = productCode,
    this.size = size;
}

Hermes.prototype = Object.create(HandCrafted.prototype);
Hermes.prototype.costs = function () {
    console.log(`The price of item ${this.productCode} is ${this.price}`);
}
Hermes.prototype.isShipped = function () {
    console.log(`This item can't be shipped outside the UK and EU`);
}
Hermes.prototype.hasRequirements = function () {
    console.log(`This bag requires purchase history to be bought!`);
}

function Celine(brand, model, price, productCode, designer) {
    HandCrafted.call(this, brand, model);
    this.price = price;
    this.productCode = productCode,
    this.designer = designer;
}

Celine.prototype = Object.create(HandCrafted.prototype);
Celine.prototype.costs = function () {
    console.log(`The price of item ${this.productCode} is ${this.price}`);
}
Celine.prototype.isShipped = function () {
    console.log(`This item is shipped worldwide`);
}
Celine.prototype.isValuable = function () {
    console.log(`This bag is valuable to collectors!`);
}

function Prada(brand, model, price, productCode, itBag) {
    Bags.call(this, brand, model);
    this.price = price, 
    this.productCode = productCode,
    this.itBag = itBag
}

Prada.prototype = Object.create(Bags.prototype);
Prada.prototype.costs = function () {
    console.log(`The price of item ${this.productCode} is ${this.price}`);
}
Prada.prototype.isShipped = function () {
    console.log(`This item is shipped worldwide`);
}
Prada.prototype.isBestSeller = function () {
    console.log(`This bag is best-seller`);
}

function Chanel(brand, model, price, productCode, year) {
    Bags.call(this, brand, model);
    this.price = price;
    this.productCode = productCode,
    this.year = year;
}

Chanel.prototype = Object.create(Bags.prototype);
Chanel.prototype.costs = function () {
    console.log(`The price of item ${this.productCode} is ${this.price}`);
}
Chanel.prototype.isShipped = function () {
    console.log(`This item is shipped worldwide`);
}
Chanel.prototype.isVintage = function () {
    console.log(`Vintage Chanel bags have better quality compared to knew`);
}
    
const hermes1 = new Hermes('Hermes', 'Birkin', '16.593 €', 19049582, 35);
const hermes2 = new Hermes('Hermes', 'Kelly', '11.154 €', 16952926, 32);
const celine1 = new Celine('Celine', 'Classic Box', '3.030 €', 17863708, 'Phoebe Philo');
const celine2 = new Celine('Celine', 'Triomphe', '2.802 €', 17351510, 'Hedi Slimane');
const prada1 = new Prada('Prada', 'Cleo', '2.300 €', 16175632, true);
const prada2 = new Prada('Prada', 'Logo-plaque mini', '920 €', 19062768, false);
const chanel1 = new Chanel('Chanel', 'Jumbo', '8.622 €', 19039475, 2014);
const chanel2 = new Chanel('Chanel', 'Mademoiselle', '10.859 €', 18954594, 1992);

hermes1.hasRequirements();
hermes2.handMade();
celine1.isValuable();
celine2.isShipped();
prada1.producedBy();
prada2.isBestSeller();
chanel1.costs();
chanel2.isVintage();

console.log(hermes1);
console.log(hermes2);
console.log(celine1);
console.log(celine2);
console.log(prada1);
console.log(prada2);
console.log(chanel1);
console.log(chanel2);
// object constructor for products
function Product (productName, productImage, altText) {
  this.productName = productName
  this.productImage = productImage
  this.altText = altText
  this.productCount = 0
  this.productView = 0
  this.calculatePercent = function () {
    var percent = Math.floor((this.productCount/this.productView) * 100)
    return percent
  }
}

// Array of products
var productArray = [
  new Product('Robot Bag', 'img/bag.jpg', 'Rolling carry-on suitcase that looks like R2D2 from Star Wars.'),
  new Product('Banana Slicer', 'img/banana.jpg', 'Outline of a banana in yellow plastic with stips of plastic for cutting the banana spaced along the body.'),
  new Product('Rubber Boots', 'img/boots.jpg', 'Yellow rubber rain boots, with the toes and soles missing.'),
  new Product('Red Chair', 'img/chair.jpg', 'Red 4-legged, straight back chair with exagerated convex seat.'),
  new Product('Cthulhu', 'img/cthulhu.jpg', "Action figure of H.P. Lovecraft's character Cthulhu, holding a helpless victim."),
  new Product('Dragon Meat', 'img/dragon.jpg', 'Ninetee ounce can of dragon meat.'),
  new Product('Cutlery Pens', 'img/pen.jpg', 'Ball point pens caps that look like plastic silverware.'),
  new Product('Pizza Scissors', 'img/scissors.jpg', 'Scissors with a plastic stencil on the bottom blade that is shaped like a pizza slice and has the word PIZZA in it.'),
  new Product('Shark Bag', 'img/shark.jpg', 'Sleeping bag that looks like a shark.'),
  new Product('Dustmop Onesie', 'img/sweep.jpg', 'Infant onsie that has dustmop pieces sewen to forearms and legs.'),
  new Product('Unicorn Meat', 'img/unicorn.jpg', 'Five and a half ounce can of unicorn meat.'),
  new Product('Tentacle USB', 'img/usb.jpg', 'USB key that looks like the tentacle from a sea creature.'),
  new Product('Watering Can', 'img/water_can.jpg', 'Blue watering can whose spout is turned back over the body of the can.'),
  new Product('Wine Glass', 'img/wine_glass.jpg', 'Wine glass where opening is on one side of glass instead of across the top.')
]

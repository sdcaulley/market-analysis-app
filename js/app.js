function Product (productName, productImage) {
  this.productName = productName
  this.productImage = productImage
  this.productCount = 0
}

var productArray = [
  new Product('Robot Bag', 'img/bag.jpg'),
  new Product('Banana Slicer', 'img/banana.jpg'),
  new Product('Rubber Boots', 'img/boots.jpg'),
  new Product('Red Chair', 'img/chair.jpg'),
  new Product('Cthulhu', 'img/cthulhu.jpg'),
  new Product('Dragon Meat', 'img/dragon.jpg'),
  new Product('Cutlery Pens', 'img/pen.jpg'),
  new Product('Pizza Scissors', 'img/scissors.jpg'),
  new Product('Shark Bag', 'img/shark.jpg'),
  new Product('Dustmop Onesie', 'img/sweep.jpg'),
  new Product('Unicorn Meat', 'img/unicorn.jpg'),
  new Product('Tenticle USB', 'img/usb.jpg'),
  new Product('Watering Can', 'img/water_can.jpg'),
  new Product('Wine Glass', 'img/wine_glass.jpg')
]

function displayImage () {
  for (var i = 0; i < 3; i++) {
    var index = Math.floor(Math.random() * productArray.length)
    console.log(index)
    var voteImage = new Image()
    voteImage.src = productArray[index].productImage
    document.body.appendChild(voteImage)
  }
}

displayImage(productArray);

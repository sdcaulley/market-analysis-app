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

var foundArray = []

function displayImage () {
  for (imageNumber = 1; imageNumber < 4; imageNumber++) {
    do {
      var index = Math.floor(Math.random() * productArray.length)
      foundArray.push(index)
      found = false
      for (i = 0; i < foundArray.length; i++) {
        if (foundArray[i] == index) {
          found = true
          break
        } else {
          var voteImage = new Image()
          voteImage.src = productArray[index].productImage
          voteImage.id = index
          document.body.appendChild(voteImage).addEventListener('click', recordVote, false)
        }
      }
    } while (foundArray.indexOf[index] >= 0)
    console.log(foundArray)
  }
}

displayImage(productArray);

function recordVote(e) {
  var target = e.target
  var index = event.target.id
  productArray[index].productCount++
  displayImage(productArray)
  console.log(productArray[index].productName + productArray[index].productCount)
}

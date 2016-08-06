// object constructor for products
function Product (productName, productImage, altText) {
  this.productName = productName
  this.productImage = productImage
  this.altText = altText
  this.productVote = 0
  this.productView = 0
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

var randomArray = []

function storeImages() {
  if (localStorage.getItem("products") == null) {
    localStorage.setItem("products", JSON.stringify(productArray))
  } else {
    productArray = []
    var storedImages = JSON.parse(localStorage.getItem("products"));
    for (var index = 0; index < storedImages.length; index++) {
      productArray.push(new Product(storedImages[index].productName, storedImages[index].productImage, storedImages[index].altText, storedImages[index].productVote, storedImages[index].productView))
    }
  }
}

// functions to fill various arrays
function fillArray () {
  for (i = 0; i < productArray.length; i++) {
    randomArray.push(i)
  }
}

// function to create randomness
function shuffleRandomArray () {
  var indexRandomArray = 0
  var randomIndexNumber = 0
  var temp = null

  for (indexRandomArray = randomArray.length - 1; indexRandomArray > 0; indexRandomArray -= 1) {
    randomIndexNumber = Math.floor(Math.random() * (indexRandomArray + 1))
    temp = randomArray[indexRandomArray]
    randomArray[indexRandomArray] = randomArray[randomIndexNumber]
    randomArray[randomIndexNumber] = temp
  }
}

// function for getting image groupings
function createImageArray () {
  var numPics = 3
  var imageGroup = []
  var reshuffle = false
  // user voting cycle
  for (i = count; i < count+numPics; i++) {
    if (i >= randomArray.length) {
      reshuffle = true
    }
    var voteImage = new Image()
    voteImage.src = productArray[randomArray[i%randomArray.length]].productImage
    voteImage.id = randomArray[i%randomArray.length]
    voteImage.alt = productArray[randomArray[i%randomArray.length]].altText
    productArray[randomArray[i%randomArray.length]].productView++
    marketerArray[randomArray[i%randomArray.length]].productView++
    imageGroup.push(voteImage)
    var voteMessage = document.getElementById('place')
    var messageForUser = '<p><h3>You have completed ' + voteLog + ' out of 15 votes.</h3></p>'
    voteMessage.innerHTML = messageForUser
  }
  count +=3
  if (reshuffle) {
    shuffleRandomArray()
    count = 0
  }
  return imageGroup
}

// function to display voting group
function displayImage (imageGroup) {
  var imagePosition = document.getElementById('image-container')
  for (var i = 0; i < imageGroup.length; i++) {
    imagePosition.appendChild(imageGroup[i]).addEventListener('click', recordVote, false)
  }
}

// on loading page for the first times
function firstLoad () {
  storeImages()
  fillArray()
  shuffleRandomArray()
  fillMarketerArray()
  displayImage(createImageArray())
}

firstLoad()

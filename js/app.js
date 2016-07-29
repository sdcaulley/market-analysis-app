var numPics = 3
var count = 0

// object constructor for products
function Product (productName, productImage) {
  this.productName = productName
  this.productImage = productImage
  this.productCount = 0
}

// Array of products
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

// array for storing shuffled products
var randomArray = []

function fillRandomArray () {
  for (i = 0; i < productArray.length; i++) {
    randomArray.push(i)
  }
  console.log(randomArray);
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
  var imageGroup = []
    for (i = count; i < count+numPics; i++) {
      if (i < randomArray.length) {
      var voteImage = new Image()
      voteImage.src = productArray[randomArray[i]].productImage
      voteImage.id = randomArray[i]
      imageGroup.push(voteImage)
    } else if (i == randomArray.length - 1) {
      var voteImage = new Image()
      voteImage.src = productArray[randomArray[i]].productImage
      voteImage.id = randomArray[i]
      voteImage.addEventListener('click', showResults, false)
      imageGroup.push(voteImage)
    } else {
      break
    }
  }
  count +=3
return imageGroup
}

// function to display voting group
function displayImage (imageGroup) {
  var position = document.getElementById('image-container')
  for (var i = 0; i < imageGroup.length; i++) {
    position.appendChild(imageGroup[i]).addEventListener('click', recordVote, false)
  }
}

// function for coundting product votes
function recordVote(e) {
  var target = e.target
  var index = event.target.id
  console.log(index)
  productArray[index].productCount++
  var position = document.getElementById('image-container')
  position.innerHTML = ''
  displayImage(createImageArray())
  console.log(productArray[index].productName + productArray[index].productCount)
}

// function for displaying results
function showResults () {
  var newTable = document.createElement('table')
  // create header row, cells and content
  var header = newTable.createTHead()
  var rowHead = header.insertRow(0)
  var cellHead1 = rowHead.insertCell(0)
  var cellHead2 = rowHead.insertCell(1)
  var headText1 = document.createTextNode('Product')
  var headText2 = document.createTextNode('Votes')
  cellHead1.appendChild(headText1)
  cellHead2.appendChild(headText2)
  // create row and cells for product name and votes
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productCount > 0) {
      var row = newTable.insertRow
      newTable.appendChild(row)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cellText1 = document.createTextNode(productCount.productName[i])
      var cellText2 = document.createTextNode(productArray.productCount[i])
      cell1.appendChild(cellText1)
      cell2.appendChild(cellText2)
      }
    }
}

// function to rule them all
function pullItTogether () {
  fillRandomArray()
  shuffleRandomArray()
  displayImage(createImageArray())
}

pullItTogether()

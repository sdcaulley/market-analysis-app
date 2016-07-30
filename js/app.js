var count = 0
var voteLog = 0

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

// array for storing shuffled products
var randomArray = []

function fillRandomArray () {
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
  console.log('Random Array: ' + randomArray);
}

// function for getting image groupings
function createImageArray () {
  var numPics = 3
  var imageGroup = []
  var reshuffle = false
  if (voteLog == 15) {
    showResults(sortResults())
    return imageGroup
  }
    for (i = count; i < count+numPics; i++) {
      if (i >= randomArray.length) {
        reshuffle = true
      }
      var voteImage = new Image()
      voteImage.src = productArray[randomArray[i%randomArray.length]].productImage
      voteImage.id = randomArray[i%randomArray.length]
      voteImage.alt = productArray[randomArray[i%randomArray.length]].altText
      productArray[randomArray[i%randomArray.length]].productView++
      console.log('Product View: ' + productArray[randomArray[i%randomArray.length]].productView);
      imageGroup.push(voteImage)
      var voteMessage = document.getElementById('place')
      var messageForUser = '<p><h3>You have completed ' + voteLog + ' out of 15 votes.</h3></p>'
      voteMessage.innerHTML = messageForUser
    }
    count +=3
    console.log('Count After loop: ' + count);
    if (reshuffle) {
      shuffleRandomArray()
      console.log(randomArray)
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

// function for coundting product votes
function recordVote(e) {
  var target = e.target
  var index = event.target.id
  console.log(index)
  productArray[index].productCount++
  voteLog++
  console.log(productArray[index].percentageVoteView);
  var imagePosition = document.getElementById('image-container')
  imagePosition.innerHTML = ''
  displayImage(createImageArray())
  console.log(productArray[index].productName + productArray[index].productCount)
}

// function for displaying results
function showResults(myArray) {
    var newTable = document.createElement('table')
    // create header row, cells and content
    var header = newTable.createTHead()
    var rowHead = header.insertRow(0)
    var cellHead1 = rowHead.insertCell(0)
    var cellHead2 = rowHead.insertCell(1)
    var cellHead3 = rowHead.insertCell(2)
    var cellHead4 = rowHead.insertCell(3)
    var headText1 = document.createTextNode('Product')
    var headText2 = document.createTextNode('Votes')
    var headText3 = document.createTextNode('Views')
    var headText4 = document.createTextNode('Votes/Views')
    cellHead1.appendChild(headText1)
    cellHead2.appendChild(headText2)
    cellHead3.appendChild(headText3)
    cellHead4.appendChild(headText4)
    // create row and cells for product name and votes
    for (var i = 0; i < myArray.length; i++) {
      var row = newTable.insertRow(0)
      newTable.appendChild(row)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cell3 = row.insertCell(2)
      var cell4 = row.insertCell(3)
      var cellText1 = document.createTextNode(myArray[i].productName)
      var cellText2 = document.createTextNode(myArray[i].productCount)
      var cellText3 = document.createTextNode(myArray[i].productView)
      var cellText4 = document.createTextNode(myArray[i].calculatePercent() + ' %')
      cell1.appendChild(cellText1)
      cell2.appendChild(cellText2)
      cell3.appendChild(cellText3)
      cell4.appendChild(cellText4)
    }
    var tablePosition = document.getElementById('resultsTable')
    var messagePosition = document.getElementById('resultsMessage')
    var messageForResults = '<p><h3>Thank you for participating in our survey.  Here are your results.</h3></p>'
    messagePosition.innerHTML = messageForResults
    tablePosition.appendChild(newTable)
}

// function to sort results
function sortResults() {
  var sortArray = productArray.slice(0)
  console.log(sortArray[0].productName)
  sortArray.sort(function(a, b){return b.productCount - a.productCount})
  return sortArray
}

// function to rule them all
function pullItTogether () {
  fillRandomArray()
  shuffleRandomArray()
  displayImage(createImageArray())
}

pullItTogether()

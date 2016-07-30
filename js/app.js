var count = 0
var voteLog = 0

// arrays for product manipulation
var randomArray = []
var displayVotesArray = []
var displayViewArray = []

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
  console.log('Random Array: ' + randomArray);
}

// function for getting image groupings
function createImageArray () {
  var numPics = 3
  var imageGroup = []
  var reshuffle = false
  if (voteLog == 15) {
  //  showResults(sortResults())
    displayGraph ()
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

// function to sort results
function sortResults() {
  var sortArray = productArray.slice(0)
  console.log(sortArray[0].productName)
  sortArray.sort(function(a, b){return b.productCount - a.productCount})
  return sortArray
}


// function to rule them all
function pullItTogether () {
  fillArray()
  shuffleRandomArray()
  displayImage(createImageArray())
}

pullItTogether()

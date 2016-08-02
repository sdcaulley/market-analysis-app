function Votes (productName, productVote) {
  this.label = productName
  this.y = productVote
}

function MarketerVotes (productName, productVote) {
  this.label = productName
  this.y = productVote
}

function MarketerViews (productName, productView) {
  this.label = productName
  this.y = productView
}

function showActiveVotes () {
  var myArray = []
  for (var i = 0; i < someArray.length; i++) {
    if (someArray[i].y > 0) {
        myArray.push(i)
    }
  }
  return myArray
}

function fillVotesArray () {
  var someArray = []

  for (i = 0; i < productArray.length; i++) {
    someArray.push(new Votes(productArray[i].productName, productArray[i].productVote))
  }
  return someArray
}

function fillMarketerVotesArray () {
  var someArray = []
  for (i = 0; i < productArray.length; i++) {
    someArray.push(new MarketerVotes(productArray[i].productName, productArray[i].productVote))
  }
  return someArray
}

function fillMarketerViewsArray () {
  var someArray = []
  for (i = 0; i < productArray.length; i++) {
    someArray.push(new MarketerViews(productArray[i].productName, productArray[i].productVote))
  }
  return someArray
}

// function to sort results
function sortArray() {
  someArray.sort(function(a, b){return b.y - a.y})
  return someArray
}

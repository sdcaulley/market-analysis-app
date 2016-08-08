function GraphData (name, data) {
  this.label = name
  this.y = data
}
function showActiveVotes (someArray) {
  var myArray = []
  for (var i = 0; i < someArray.length; i++) {
    if (someArray[i].y > 0) {
        myArray.push(someArray[i])
    }
  }
  return myArray
}

function fillVotesArray () {
  var someArray = []
  for (i = 0; i < productArray.length; i++) {
    someArray.push(new GraphData(productArray[i].productName, productArray[i].productVote))
  }
  return someArray
}

function fillMarketerVotesArray () {
  var someArray = []
  for (i = 0; i < marketerArray.length; i++) {
    someArray.push(new GraphData(marketerArray[i].productName, marketerArray[i].productVote))
  }
  return someArray
}

function fillMarketerViewsArray () {
  var someArray = []
  for (i = 0; i < marketerArray.length; i++) {
    someArray.push(new GraphData(marketerArray[i].productName, marketerArray[i].productView - marketerArray[i].productVote))
  }
  return someArray
}

// function to sort results
function sortArray(someArray) {
  someArray.sort(function(a, b){return b.y - a.y})
  return someArray
}

function moveIn() {
  document.getElementById("image-container").setAttribute("class", "fadeIn");
}

window.addEventListener("load",function() {
  setTimeout(moveIn, 100)
}
)

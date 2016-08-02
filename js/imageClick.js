//what the user sees
var voteLog = 0
var count = 0

// function for coundting product votes
function recordVote(e) {
  var target = e.target
  var index = event.target.id
  productArray[index].productVote++
  marketerArray[index].productVote++
  voteLog++
  var imagePosition = document.getElementById('image-container')
  imagePosition.innerHTML = ''
  //check to see if user has voted 15 times
  if (voteLog == 15) {
    fifteenVotes()
  } else {
    displayImage(createImageArray())
  }
}

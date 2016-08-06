// reset app for new user
function newUser () {
  //reset productArray
  storeImages()
  //reset global counts
  count = 0
  voteLog = 0
  //reset display
  var newUserButtonPosition = document.getElementById('newUserButton')
  var newMarketerButtonPosition = document.getElementById("marketerButton")
  var newImageContainerPosition = document.getElementById("image-container")
  var newPlacePosition = document.getElementById("place")
  var newResultMessagePosition = document.getElementById("resultsMessage")
  var newColumnPosition = document.getElementById("columnButton")
  var newPieButtonPosition = document.getElementById("pieButton")
  var newChartContainerPosition = document.getElementById("chart-container")
  var newUserButton = ''
  var newMarketerButton = ''
  var newImageContainer = ''
  var newPlace = ''
  var newResultMessage = ''
  var newColumn = ''
  var newPieButton = ''
  var newChartContainer = ''
  newUserButtonPosition.innerHTML = newUserButton
  newMarketerButtonPosition.innerHTML = newMarketerButton
  newImageContainerPosition.innerHTML = newImageContainer
  newPlacePosition.innerHTML = newPlace
  newResultMessagePosition.innerHTML = newResultMessage
  newColumnPosition.innerHTML = newColumn
  newPieButtonPosition.innerHTML = newPieButton
  newChartContainerPosition.innerHTML = newChartContainer
  displayImage(createImageArray())
}

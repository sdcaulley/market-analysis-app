// function for end of 15 votes
function fifteenVotes () {
  if (localStorage.getItem("storedMarketerArray") !== null) {
    localStorage.removeItem("storedMarketerArray")
    localStorage.setItem("storedMarketerArray", JSON.stringify(marketerArray))
  } else {
    localStorage.setItem("storedMarketerArray", JSON.stringify(marketerArray))
  }
  var messagePosition = document.getElementById('resultsMessage')
  var messageForResults = '<h2>Thank you for participating in our survey.  Here are your results.</h2>'
  messagePosition.innerHTML = messageForResults
  var columnPosition = document.getElementById('columnButton')
  var piePosition = document.getElementById('pieButton')
  var columnButton = '<button class="buttons" type="button" id="columnButton">Column Chart</button>'
  var pieButton = '<button class="buttons" type="button" id="pieButton">Pie Chart</button>'
  columnPosition.innerHTML = columnButton
  piePosition.innerHTML = pieButton
  columnPosition.addEventListener('click', displayGraph, false)
  piePosition.addEventListener('click', displayPieChart, false)
  columnPosition.addEventListener('click', chartFade, false)
  piePosition.addEventListener('click', chartFade, false)
  //buttons for new user and marketer
  var newUserPosition = document.getElementById('newUserButton')
  var marketerPosition = document.getElementById('marketerButton')
  var newUserButton = '<button class="buttons" type="button" id="newUserButton">New User</button>'
  var marketerButton = '<button class="buttons" type="button" id="marketerButton">Marketer</button>'
  newUserPosition.innerHTML = newUserButton
  marketerPosition.innerHTML = marketerButton
  newUserPosition.addEventListener('click', newUser, false)
  marketerPosition.addEventListener('click', displayStackedColumn100, false)
  marketerPosition.addEventListener('click', chartFade, false)
}

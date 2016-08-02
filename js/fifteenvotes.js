// function for end of 15 votes
function fifteenVotes () {
  var messagePosition = document.getElementById('resultsMessage')
  var messageForResults = '<h3>Thank you for participating in our survey.  Here are your results.</h3>'
  messagePosition.innerHTML = messageForResults
  var columnPosition = document.getElementById('columnButton')
  var piePosition = document.getElementById('pieButton')
  var columnButton = '<button class="buttons" type="button" id="columnButton">Column Chart</button>'
  var pieButton = '<button class="buttons" type="button" id="pieButton">Pie Chart</button>'
  columnPosition.innerHTML = columnButton
  piePosition.innerHTML = pieButton
  columnPosition.addEventListener('click', displayGraph, false)
  piePosition.addEventListener('click', displayPieChart, false)
  //buttons for new user and marketer
  var newUserPosition = document.getElementById('newUserButton')
  var marketerPosition = document.getElementById('marketerButton')
  var newUserButton = '<button class="buttons" type="button" id="newUserButton">New User</button>'
  var marketerButton = '<button class="buttons" type="button" id="marketerButton">Marketer</button>'
  newUserPosition.innerHTML = newUserButton
  marketerPosition.innerHTML = marketerButton
  newUserPosition.addEventListener('click', newUser, false)
  marketerPosition.addEventListener('click', displayStackedColumn100, false)
}

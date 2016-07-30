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

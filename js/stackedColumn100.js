var chart

function Marketer (name, vote, view) {
  this.productName = name
  this.productVote = vote
  this.productView = view
}

var marketerArray = []

function fillMarketerArray () {
  if (localStorage.getItem("storedMarketerArray")  == null) {
    for (var i = 0; i < productArray.length; i++) {
      marketerArray.push(new Marketer(productArray[i].productName, productArray[i].productVote, productArray[i].productView))
    }
  } else {
    marketerArray = []
    var storedMarketerArray = JSON.parse(localStorage.getItem("storedMarketerArray"));
    for (var index = 0; index < storedMarketerArray.length; index++) {
      marketerArray.push(new Marketer(storedMarketerArray[index].productName, storedMarketerArray[index].productVote, storedMarketerArray[index].productView))
    }
  }
}

function displayStackedColumn100 () {
  var marketerVotesArray = []
  var marketerViewsArray = []
  var myMarketerArray = marketerArray

  myMarketerArray = sortArray(myMarketerArray)
  marketerViewsArray = fillMarketerViewsArray(myMarketerArray)
  marketerVotesArray = fillMarketerVotesArray(myMarketerArray)

  CanvasJS.addColorSet("products",
  [
    "#993333",
    "#ccccff"
  ]);

  chart = new CanvasJS.Chart("chart-container",
    {
      colorSet: "products",
      title:{
        fontFamily: "Josefin Sans",
        text: "Product Votes vs Views"
      },
      axisX: {
        titleFontFamily: "Josefin Sans",
        labelFontFamily: "Josefin Sans"
      },
      axisY: {
        titleFontFamily: "Josefin Sans",
        labelFontFamily: "Josefin Sans"
      },
      legend: {
        fontFamily: "Josefin Sans"
      },
      data:[
      {
        type: "stackedColumn100",
        indexLabelFontFamily: "Josefin Sans",
        indexLabelFontSize: 17,
        legendText: "Votes",
        showInLegend: "true",
        indexLabelMaxWidth: 50,
        indexLabelWrap: true,
        indexLabel: "#percent%",
        indexLabelFontColor: "black",
        dataPoints: marketerVotesArray
      },
      {
        type: "stackedColumn100",
        legendText: "Views",
        showInLegend: "true",
        indexLabelFontColor: "black",
        dataPoints: marketerViewsArray
      }
      ]
    });

chart.render();
}

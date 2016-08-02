var chart

var marketerArray = []

function displayStackedColumn100 () {
  var marketerVotesArray = []
  var marketerViewsArray = []
  var myMarketerArray = marketerArray
  myMarketerArray = sortArray(myMarketerArray)
  marketerViewsArray = fillMarketerViewsArray(myMarketerArray)
  marketerVotesArray = fillMarketerVotesArray(myMarketerArray)

  chart = new CanvasJS.Chart("chart-container",
    {
      colorSet: "products",
      title:{
        text: "Product vs Views"

      },
      data:[
      {
        type: "stackedColumn100",
        indexLabel: "'Votes', {y}",
        dataPoints: marketerVotesArray
      },
      {
        type: "stackedColumn100",
        indexLabel: "'Views', {y}",
        dataPoints: marketerViewsArray
      }
      ]
    });

chart.render();
}

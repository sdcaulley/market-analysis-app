var chart

var marketerArray = []

function displayStackedColumn100 () {
  var marketerVotesArray = []
  var marketerViewsArray = []
  marketerViewsArray = fillMarketerViewsArray()
  marketerViewsArray = fillMarketerVotesArray()
  sortArray(marketerViewsArray)

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

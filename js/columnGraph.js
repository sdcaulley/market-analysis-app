var chart

function displayGraph () {
  var activeVotesArray = []
  activeVotesArray = fillVotesArray()

  activeVotesArray = showActiveVotes(activeVotesArray)

  activeVotesArray = sortArray(activeVotesArray)

  CanvasJS.addColorSet("products",
  [
    "#000066",
    "#ccccff",
    "#993333",
    "#6699ff",
    "#003300",
    "#ff6666",
    "#66ff66",
    "#ffff66",
    "#003366",
    "#ff66ff",
    "#663300",
    "#00ffff",
    "#660066",
    "#ffffcc"
  ]
);

    chart = new CanvasJS.Chart("chart-container",
    {
      colorSet: "products",
      title: {
        text: "Product Votes"
      },

      axisX: {
        interval: 1
      },

      data: [
      {
        type: "column",
        dataPoints: activeVotesArray
      }
      ]
    })
	chart.render()
}

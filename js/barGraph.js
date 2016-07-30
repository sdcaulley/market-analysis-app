var chart;

function displayGraph () {
    chart = new CanvasJS.Chart("putChartHere",
    {
      title:{
        text: "Product Votes"
      },
      data: [
      {
        type: "bar",
        dataPoints:
      }
      ]
    });
	chart.render();
}

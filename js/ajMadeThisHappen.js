var chart;

function displayGraph () {
    chart = new CanvasJS.Chart("putChartHere",
    {
      title:{
        text: "Shark Tanks investment Ideas for the one rich jerk"
      },
      data: [
      {
        type: "bar",
        dataPoints: productArray
      },
      {
        type: "bar",
        dataPoints: [
					productArray
        ]
      },
      {
        type: "bar",
        dataPoints: [
					productArray
        ]
      }
      ]
    });
	chart.render();
}

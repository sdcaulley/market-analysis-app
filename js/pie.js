var chart

function displayPieChart () {
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
		theme: "theme2",
		title:{
			text: "Percentage of Votes"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: activeVotesArray
		}
		]
	});
	chart.render();
}

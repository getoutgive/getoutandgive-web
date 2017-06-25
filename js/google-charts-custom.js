function drawVisualization() {
	// Set data
	var data = google.visualization.arrayToDataTable([
	  ['Month',   'Attendees', 'Donations'],
	  ['2013/06',    6,      15],
	  ['2013/07',    17,      415]
	]);

	// Create and draw the visualization.
	var ac = new google.visualization.AreaChart(document.getElementById('visualization'));
	ac.draw(data, {
	  isStacked: true,
	  width: 600,
      height: 400,
      vAxis: {title: "Progress"},
	  hAxis: {title: "Month"}
	});
}

google.setOnLoadCallback(drawVisualization);
	 
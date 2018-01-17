/* jshint undef: false */
var mapper;
var output;

function onSelectFixture(fixture) {
	//API call to assosiated edge data
	pgdb.readEdges({id: fixture.edge}, function(result) {
		output.value = "fixture:"+JSON.stringify(fixture)+"\n\nedge:"+JSON.stringify(result.edges[0]);
	});
	//API call to set state
	pgdb.updateFixture({id: fixture.id, state:"operational"});
}

function initialize() {
	mapper = new Mapper("map");							// load fixures & zones onto map element
	mapper.setCenter({lat: 32.7165, lng: -117.161});	// pan map to location
	mapper.setSelectListener(onSelectFixture);			// assign fixture selection listener
	output = document.getElementById("result");			// hook selection output
}
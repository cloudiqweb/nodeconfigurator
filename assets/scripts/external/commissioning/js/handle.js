/* jshint undef: false */
var mapper;

function showFixtureInfo(fixture) {
	alert(JSON.stringify(fixture));
}

function initialize() {
	mapper = new Mapper("map");
	mapper.setCenter({lat: 32.7165, lng: -117.161});
	mapper.setSelectListener(showFixtureInfo);
}
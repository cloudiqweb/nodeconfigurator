/* jshint undef: false */

var gMap;
var base;
var pole_edit = true;
var poles = [];
var parking = [];
var selectListener = null;

function Mapper(mapId) {
	gMap = new google.maps.Map(document.getElementById(mapId), {
		//center: {lat: 32.7165, lng: -117.161},
		zoom: 19,
		panControl: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: true,
		streetViewControl: true,
		overviewMapControl: true,
		rotateControl: true,
		
		mapTypeId: google.maps.MapTypeId.HYBRID
	});
	
	gMap.setTilt(0);     	

	pgdb.readFixtures({latitude:32.7165, longitude:-117.161}, function(response) {
		response.fixtures.forEach(function(fixture) {
			var pole = new Pole(gMap, fixture);
			poles.push(pole.marker);
		});
		base = new Base(gMap);
	});
	
	pgdb.readZones({type:"PARKING_ZONE"}, function(response) {
	   response.zones.forEach(function(zone) {           
			var box = new google.maps.Polygon({
				map: gMap,
				strokeColor: '#00FFFF',
				strokeWeight: 2,
				fillOpacity: 0,
				zIndex: 500
			});           
			box.setPath(zone.coordinates);
		   parking.push(box);			
	   });
	});

	this.setCenter = function (coord) {
		gMap.setCenter(coord);
	}

	this.setMode = function (mode) {
		base.setMode(parseInt(mode));
	}

	this.setSelectListener = function (callback) {
		selectListener = callback;
	}
}
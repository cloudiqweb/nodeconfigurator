/* jshint undef: false */

var gMap;
var base;
var pole_edit = true;
var poles = [];
var parking = [];
var selectListener = null;


function Mapper(mapId) {
	
	var that = this;
	
	/* Initializes map and loads fixtures and zones
	   mapId : map div id */
	function construct(mapId) {
		var mapInfo = document.getElementById(mapId);
		gMap = new google.maps.Map(mapInfo !== null ? mapInfo : mapId, {
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
		
		that.refresh();
		
		pgdb.readZones({type:"PARKING_ZONE"}, function(response) {
		   response.zones.forEach(function(zone) {           
				var box = new google.maps.Polygon({
					map: gMap,
					strokeColor: '#00FFFF',
					strokeWeight: 3,
					fillOpacity: 0,
					zIndex: 500
				});           
				box.setPath(zone.coordinates);
			   parking.push(box);			
		   });
		});
	}
	
	/* Pan map to geolocation
	   coord : {lat, lng} */
	this.setCenter = function (coord) {
		gMap.setCenter(coord);
	}

	/* Change operating mode
	   mode : 1=coverage, 4=homography etc. */
	this.setMode = function (mode) {
		base.setMode(parseInt(mode));
		debugger;
	}

	/* Define fixture selection handler function
	   callback : function(fixture) */
	this.setSelectListener = function (callback) {
		selectListener = callback;
	}
	
	/* Change overlay visibility
	   opt : {poles, zones, coverage} etc. */	
	this.setView = function (opt) {
		parking.forEach(function(box) {
			box.setMap(opt.zones?mapId:null);
		});
	}
	
		/* Load poles & state */
	this.refresh = function() {
		if (poles.length > 0) poles.forEach(function(mark) {
			mark.setMap(null);
		});
		poles = [];
		
		pgdb.readFixtures({tenant:"San Diego"}, function(response) {
			response.fixtures.forEach(function(fixture) {
				var pole = new Pole(gMap, fixture);
				poles.push(pole.marker);
			});
			base = new Base(gMap);
		});
	}
	
	construct(mapId);
}
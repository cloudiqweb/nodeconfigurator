/* jshint undef: false */

const modes = {
	NONE: 0,
	MASK: 1, 
    HOM: 2,
    COVER: 3,
	PARK: 4,
    TRAFFIC: 5,
	PED: 6
}

var defaultLocal =  [[{x: -5, y: +1}, {x: +5, y: +1}, {x: +12, y: +10}, {x: -12, y: +10}],
                     [{x: +5, y: +3}, {x: -5, y: +3}, {x: -8, y: -4}, {x: +8, y: -4}]];
var boxHD = [{x: 480, y: 720}, {x: 1440, y: 720}, {x: 1440, y: 240}, {x: 480, y: 240}];
var gridLocal = [];

function Base(map) {
    var icon = {strokeColor: "#ffff00", strokeWeight: 3, strokeOpacity: 1,
        path: 'M -1,0 A 1,1 0 1,1 1,0 M -1,0 A 1,1 0 0,0 1,0', scale: 2};
    
    var that = this;
    var handle = null;
	var old_mode = null;
    this.camIndex = 0;
    var origin;

    this.pole = null;
    this.grid = null;
	this.mode = modes.MASK;

    var grid_params = {strokeColor: '#80ff80', strokeOpacity: 0.3, strokeWeight: 1, map: map};

    for (var x = -16; x <= 16; x += 2) {
        gridLocal.push({
            p0: cart2pol(x, -8),
            p1: cart2pol(x, +14),
            poly: new google.maps.Polygon(grid_params)
        });
    }

    for (var y = -6; y <= 12; y += 2) {
        gridLocal.push({
            p0: cart2pol(-18, y),
            p1: cart2pol(+18, y),
            poly: new google.maps.Polygon(grid_params)
        });
    }

    this.zones = [];

    defaultLocal.forEach(function(z) {
        that.zones.push(new google.maps.Polygon({strokeColor: '#FFFFFF', strokeWeight: 2, fillOpacity: 0}));
    });

	this.coverage = function(show) {	  
		  this.zones.forEach(function(z, i) {
              debugger;
			  z.setOptions({map: show ? gMap : null});
		  });
	}	
	
    this.setMode = function(mode) {
        this.mode = mode;

        switch (mode) {
			case modes.MASK:
                this.coverage(true);
                        debugger;
				break;
								
			case modes.PARK:
		        this.coverage(false);
//				handle.setOptions({map: null});
				break;				
		}
    };

    this.getGeo = function(local) {
        var corners = [];

        local.forEach(function(point, k) {
            var radius = Math.sqrt(point.x * point.x + point.y * point.y);
            var theta = that.pole.fixture.heading + 90 - Math.atan2(point.y, point.x) / Math.PI * 180;
            corners[k] = google.maps.geometry.spherical.computeOffset(origin, radius, theta);
        });

        return corners;
    };

	/* initialize elsewhere */
    this.resetHandle = function() {        
		if (handle == null) {
			handle = new google.maps.Marker({map: map, icon: icon, zIndex: 1000, draggable: pole_edit});
			handle.addListener("drag", method(this, this.onDrag));
			handle.addListener("dragend", method(this, this.onDrop));              
        }
        
		handle.setOptions({map: gMap});
		handle.setPosition(google.maps.geometry.spherical.computeOffset(origin, 10, that.pole.fixture.heading));        
    }

    this.drawGrid = function(pole) {
        origin = pole.marker.getPosition();  // to be moved out
        this.pole = pole;

        that.grid = [];
        gridLocal.forEach(function(line) {
            var start = google.maps.geometry.spherical.computeOffset(origin, line.p0.radius, that.pole.fixture.heading + line.p0.theta);
            that.grid.push({lat: start.lat(), lng:start.lng()});
            
            var stop = google.maps.geometry.spherical.computeOffset(origin, line.p1.radius, that.pole.fixture.heading + line.p1.theta);
            that.grid.push({lat: stop.lat(), lng:stop.lng()});
            
            line.poly.setPath([start, stop]);
        });

		//use defaults for simiulation, no camera available
		this.zones.forEach(function(z, i) {
			z.setPath(that.getGeo(defaultLocal[i]));
		});
    };

    this.onDrag = function() {
		if (old_mode === null) old_mode = this.mode;
		this.setMode(modes.COVER);
        
        this.pole.fixture.heading = google.maps.geometry.spherical.computeHeading(origin, handle.getPosition());        
        this.drawGrid(this.pole);

    };

    this.onDrop = function() {
		this.setMode(old_mode);
		old_mode = null;
        this.resetHandle();
    };    
}
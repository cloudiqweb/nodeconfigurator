/* jshint undef: false */

function Quad(map) {
    var icon = {strokeColor: "#FF00FF", strokeWeight: 2, strokeOpacity: 1,
        path: 'M -1,0 A 1,1 0 1,1 1,0 M -1,0 A 1,1 0 0,0 1,0', scale: 2};
    var pointer = {map: map, icon: icon, zIndex: 1000, draggable: true};

    var zone = new google.maps.Polygon({strokeColor: '#FFFFFF', strokeWeight: 2, fillOpacity: 0});
    var line = new google.maps.Polygon({strokeColor: '#00FFFF', strokeWeight: 2, zIndex: 500});
    var markers = [];
    var points;

    zone.setOptions({strokeColor: '#FF00FF'});

    function drawQuad() {
        var path = [];

        if (points.length === 2) {
            var heading = google.maps.geometry.spherical.computeHeading(markers[0].getPosition(), markers[1].getPosition());

            markerOutline.forEach(function(c, i) {
                var radius = Math.sqrt(c.x * c.x + c.y * c.y);
                var theta = heading + 90 - Math.atan2(c.y, c.x) / Math.PI * 180;
                path[i] = google.maps.geometry.spherical.computeOffset(markers[0].getPosition(), radius, theta);
            });
        } else {
            var crd = zone.getPath().getArray();
            path = [{lat: crd[0].lat(), lng: crd[0].lng()}, {lat: crd[1].lat(), lng: crd[1].lng()}];
        }
        line.setOptions({map: map});
        line.setPath(path);
        
        return path; // for marker
    }

    function onEdit() {  // optimise to recover only moving corner
        var path = [];
        points = [];
        
		markers.forEach(function(m, i) {
			var pt = m.getPosition();
			path.push(pt);
			points.push({lat: pt.lat(), lng: pt.lng()});
		});

		zone.setPath(path);
		drawQuad();
		view[base.camIndex].refresh(points);
    }
  
    this.clearMarkers = function() {
        markers.forEach(function(m) {
            m.setOptions({
                map: null
            });
        });

        markers = [];
        line.setOptions({
            map: null
        });                
    }
/*    
    this.load0 = function(new_points) {
        points = new_points;
        zone.setOptions({map: gMap});
        zone.setPath(points);
        this.clearMarkers();
    };
*/
    this.unload = function() {
        zone.setOptions({map: null});
        this.clearMarkers();
    };

    this.load4 = function(new_points) {
        points = new_points;
        zone.setOptions({map: gMap});
        zone.setPath(points);
        this.clearMarkers();

        points.forEach(function(p, i) {
            markers.push(new google.maps.Marker(pointer));
            markers[i].setPosition(p);
            markers[i].addListener("drag", onEdit);
        });
        drawQuad();
    };   
/*    
    this.load5 = function(marker) {
        points = [];
        
        var a = new google.maps.Marker(pointer); 
        a.setPosition(marker[0]);
        var b = new google.maps.Marker(pointer); 
        b.setPosition(marker[1]);
        var center = {lat:(marker[0].lat+marker[2].lat)/2, lng:(marker[0].lng+marker[2].lng)/2};
        var c = new google.maps.Marker(pointer); 
        c.setPosition(center);
        var heading = google.maps.geometry.spherical.computeHeading(a.getPosition(),b.getPosition());
        points.push(center);
        var d = google.maps.geometry.spherical.computeOffset(c.getPosition(), 5, heading+90);
        points.push({lat:d.lat(), lng:d.lng()});
        
        zone.setOptions({map: gMap});
        zone.setPath(points);
        this.clearMarkers();

        points.forEach(function(p, i) {
            markers.push(new google.maps.Marker(pointer));
            markers[i].setPosition(p);
            markers[i].addListener("drag", onEdit);
        });
        drawQuad();
    };   
*/
    this.getPoints = function() {
        return points;
    }
}
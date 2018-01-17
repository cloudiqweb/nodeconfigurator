/* jshint undef: false */

function Pole(map, fixture) {
	var color = fixture.state=="flagged-pole"? "#ff0000" : 
				fixture.state=="defined"? "#A0A0A0" : 
				fixture.state=="installed"? "#ffff00" : "#00ff00"
    var latLng = new google.maps.LatLng(fixture.latitude, fixture.longitude);
    var icon = {strokeColor: color, strokeWeight: 3, strokeOpacity: 1,
        path: 'M -1,0 A 1,1 0 1,1 1,0 M -1,0 A 1,1 0 0,0 1,0', scale: 8};
    var options = {
        map: map,
        position: latLng,
        icon: icon,
        zIndex: 1000,
        draggable: pole_edit
    };
    var that = this;

    this.marker = new google.maps.Marker(options);
    this.fixture = fixture;

    this.onClick = function() {
        if (base.pole !== this) {
            base.pole = this;

            base.drawGrid(this); 
            base.resetHandle();
			base.setMode(base.mode);
        }
		if (selectListener !== null) {
		    selectListener(fixture);
		}
    };

    this.onDrop = function() {                         
        if (base.pole != this) {
            this.onClick();
        } else {
            base.drawGrid(this);
            base.resetHandle();
        }
    };

    this.setColor = function(color) {
        icon.strokeColor = color;
        this.marker.setIcon(icon);
    };

    this.marker.addListener("click", method(this, this.onClick));
    this.marker.addListener("dragend", method(this, this.onDrop));
}
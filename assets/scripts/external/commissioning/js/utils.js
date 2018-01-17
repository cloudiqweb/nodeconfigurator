/* jshint undef: false */

function method(obj, func) {
    return function() {
        obj.method = func;
        obj.method();
    };
}

function cart2pol(x, y) {
    var radius = Math.sqrt(x * x + y * y);
    var theta = 90 - Math.atan2(y, x) / Math.PI * 180;
    return {
        radius: radius,
        theta: theta
    };
}

function expand(p0, p1, p2) {    
    m = (p2.y - p1.y) / (p2.x - p1.x);
    c = p1.y - m * p1.x;
    
    left = {x:0, y:c};
    right = {x:p0.x, y:m * p0.x + c};
    
    return {p1:left, p2:right};
}

function calcH(pix, zone) {
    // on map edit, pass coord, get keypoints from box
    var input = [];
    pix.forEach(function(p) {
        input.push(p.x);
        input.push(p.y);
    });

    var output = [];
    zone.forEach(function(c) {
        output.push(c.lat - zone[0].lat);
        output.push(c.lng - zone[0].lng);
    });

    // Calculate matrix in real gps coordinates.
    var H = new PerspT(input, output);
    H = numeric.transpose(numeric.dot([
        [1, 0, zone[0].lat],
        [0, 1, zone[0].lng],
        [0, 0, 1]
    ], [
        [H.coeffs[0], H.coeffs[1], H.coeffs[2]],
        [H.coeffs[3], H.coeffs[4], H.coeffs[5]],
        [H.coeffs[6], H.coeffs[7], H.coeffs[8]]
    ]));

    return H;
};

function calcPix(zone, H) {
    var pix = [];
    var I = numeric.inv(H);
    zone.forEach(function(c, i) {
        var coord = numeric.dot([c.lat, c.lng, 1], I);
        pix.push({
            x: Math.round(coord[0] / coord[2]),
            y: Math.round(coord[1] / coord[2])
        });
    });
    return pix;
}

function calcZone(pix, H) {
    var zone = [];
    pix.forEach(function(c, i) {
        var coord = numeric.dot([c.x, c.y, 1], H);
        zone.push({
            lat: (coord[0] / coord[2]),
            lng: (coord[1] / coord[2])
        });
    });
    return zone;
}

///var ClipperLib = require('./clipper');
function calcClip(cover, zone) {
	var inter = new ClipperLib.Paths();
	var tool = new ClipperLib.Clipper();
	var subj = [];
	var clip = [];
	var over = [];
	
	cover.forEach(function (point) { subj.push({X:point.lat*1e9, Y:point.lng*1e9});});
	zone.forEach(function (point) { clip.push({X:point.lat*1e9, Y:point.lng*1e9});});

	tool.AddPaths([subj], ClipperLib.PolyType.ptSubject, true);
	tool.AddPaths([clip], ClipperLib.PolyType.ptClip, true);
	tool.Execute(ClipperLib.ClipType.ctIntersection, inter);
	
    if (inter.length>0)
    {
	   inter[0].forEach(function (point) { over.push({lat:point.X*1e-9, lng:point.Y*1e-9});});
    }
	return over;
}

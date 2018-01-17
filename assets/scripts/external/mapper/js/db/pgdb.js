/* jshint undef: false */

var pgdb = (function () {

	var fixtures = [
        {
            "id": "50024031",
            "tenant": "San Diego",
            "type": "Horizontal",
            "latitude": 32.71666581,
            "longitude": -117.1612259,
            "height": 0,
            "heading": -1,
            "edge": "edge50024031",
            "state": "defined",
            "updated": "1499801144253"
        },
        {
            "id": "50024113",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.7164711,
            "longitude": -117.1610013,
            "height": 0,
            "heading": -1,
            "edge": "edge50024113",
            "state": "installed",
            "updated": "1499720321548"
        },
        {
            "id": "50024029",
            "tenant": "San Diego",
            "type": "Horizontal",
            "latitude": 32.71668703,
            "longitude": -117.1608744,
            "height": 0,
            "heading": -1,
            "edge": "edge50024029",
            "state": "configured",
            "updated": "1499812152846"
        },
        {
            "id": "50024081",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71602035,
            "longitude": -117.1610259,
            "height": 0,
            "heading": -1,
            "edge": "edge50024081",
            "state": "installed",
            "updated": "1499532239488"
        },
        {
            "id": "50024114",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71628847,
            "longitude": -117.1609827,
            "height": 0,
            "heading": -1,
            "edge": "edge50024114",
            "state": "flagged-pole",
            "updated": "1499709851406"
        },
        {
            "id": "50026980",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71587361,
            "longitude": -117.160039,
            "height": 0,
            "heading": -1,
            "edge": "edge50026980",
            "state": "installed",
            "updated": "1499719299920"
        },
        {
            "id": "50039717",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71607553,
            "longitude": -117.1600941,
            "height": 0,
            "heading": -1,
            "edge": "edge50039717",
            "state": "configured",
            "updated": "1499801331383"
        },
        {
            "id": "50026982",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71626992,
            "longitude": -117.16028,
            "height": 0,
            "heading": -1,
            "edge": "edge50026982",
            "state": "configured",
            "updated": "1499804011748"
        },
        {
            "id": "50026983",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71654072,
            "longitude": -117.1602585,
            "height": 0,
            "heading": -1,
            "edge": "edge50026983",
            "state": "defined",
            "updated": "1499804363901"
        },
        {
            "id": "50026978",
            "tenant": "San Diego",
            "type": "Vertical",
            "latitude": 32.71651364,
            "longitude": -117.1600895,
            "height": 0,
            "heading": -1,
            "edge": "edge50026978",
            "state": "installed",
            "updated": "1499804466149"
        },
        {
            "id": "50042702",
            "tenant": "San Diego",
            "type": "Horizontal",
            "latitude": 32.71687126,
            "longitude": -117.1601134,
            "height": 0,
            "heading": -1,
            "edge": "edge50042702",
            "state": "defined",
            "updated": "1499804936547"
        },
        {
            "id": "50042703",
            "tenant": "San Diego",
            "type": "Horizontal",
            "latitude": 32.7166829,
            "longitude": -117.1602746,
            "height": 0,
            "heading": -1,
            "edge": "edge50042703",
            "state": "installed",
            "updated": "1499811798657"
        }
    ];
	
	var cameras = [
        {
            "edge": "edge50024031",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593528"
        },
        {
            "edge": "edge50024031",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50024081",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50024081",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50024113",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50024113",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026982",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026982",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026980",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026980",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026978",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026978",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026983",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593530"
        },
        {
            "edge": "edge50026983",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593531"
        },
        {
            "edge": "edge50039717",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593531"
        },
        {
            "edge": "edge50039717",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593531"
        },
        {
            "edge": "edge50042703",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593531"
        },
        {
            "edge": "edge50042703",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593532"
        },
        {
            "edge": "edge50042702",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593532"
        },
        {
            "edge": "edge50042702",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593532"
        },
        {
            "edge": "edge50024029",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593524"
        },
        {
            "edge": "edge50024029",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593524"
        },
        {
            "edge": "edge50024114",
            "id": "1",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593527"
        },
        {
            "edge": "edge50024114",
            "id": "2",
            "type": "",
            "width": 1920,
            "height": 1080,
            "polygons": [],
            "keypoints": [],
            "homography": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            "coverage": [],
            "zones": [
                "parking-area"
            ],
            "updated": "1500054593527"
        }
    ];
	
	var edges = [
        {
            "id": "8cc661a00131",
            "type": "Vertical",
            "sku": "",
            "label": "SN123456789",
            "access": {
                "wifi_mac": "74:c6:3b:65:cd:55"
            },
            "built": "1497644042",
            "updated": "1499460349671"
        },
        {
            "id": "edge50024029",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50024029",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50024114",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50024114",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50024031",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50024031",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50024081",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50024081",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50024113",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50024113",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50026982",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50026982",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50026980",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50026980",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50026978",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50026978",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50026983",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50026983",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50039717",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50039717",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50042703",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50042703",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        },
        {
            "id": "edge50042702",
            "type": "Vertical",
            "sku": "GE123-456",
            "label": "SN50042702",
            "access": {
                "sim": "1234567899",
                "wifi_mac": "A1-B2-C3-D4-E9",
                "wifi_ssid": "host",
                "wifi_psk": "pass"
            },
            "built": "1497644042",
            "updated": "0"
        }
    ];
	
	var zones = [
	{
		"id": "parking-area",
		"tenant": "San Diego",
		"type": "PARKING_ZONE",
		"coordinates": [
			{"lat": 32.7156, "lng": -117.1601},
			{"lat": 32.7156, "lng": -117.1612},
			{"lat": 32.7169, "lng": -117.1612},
			{"lat": 32.7169, "lng": -117.1601}],
		"orientation": "0",
		"fixtures": [
			"50024029",
			"50024114",
			"50024031",
			"50024081",
			"50024113",
			"50026982",
			"50026980",
			"50026978",
			"50026983",
			"50039717",
			"50042703",
			"50042702"
		],
		"updated": 1500054593580
	}];
	
  function readFixtures(fixture, next, error) {        
    //https.get("/api/read/fixtures", fixture, next, error);
	next({fixtures: fixtures});
  }
  
  function updateFixture(fixture, next, error) {        
    //https.put("/api/update/fixture", fixture, next, error);
	fixtures.forEach(function (element) {
		if (element.id == fixture.id) {
			element.state = fixture.state;
		}
	});
  }
  
  function readCameras(camera, next, error) {        
    //https.get("/api/read/cameras", camera, next, error);
    next({cameras: cameras});
  }
  
  function createZone(zone, next, error) {        
    //https.post("/api/create/zone", zone, next, error);
  }
    
  function readZones(zone, next, error) {        
    //https.get("/api/read/zones", zone, next, error);
    next({zones: zones});
  }
  
  function readEdges(edge, next, error) {        
    //https.get("/api/read/edges", edge, next, error);
	edges.forEach(function (element) {
		if (element.id == edge.id) {
			next({edges: [element]});
		}
	});
  }
  
  function createAction(action, next, error) {        
    //https.post("/api/create/action", action, next, error);
  }
  
  function readActions(action, next, error) {        
    //https.get("/api/read/actions", action, next, error);
  }
          
  return {
    readFixtures: readFixtures,
    updateFixture: updateFixture,
    readCameras: readCameras,
    createZone: createZone,
    readZones: readZones,
    readEdges: readEdges,
	createAction: createAction,
	readActions: readActions
  };
})();
/* jshint undef: false */

var commissioning = (function () {
  
  function utcTimeStamp() {
    var now = new Date(),
        utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    return utc_timestamp;
  }

  function Fixture(other) {
    if (!other) other = {};  
    this.id = other.id || 0;
    this.tenant = other.tenant || "";
    this.type = other.type || '';
    this.latitude = other.latitude || 0.0;
    this.longitude = other.longitude || 0.0;
    this.height = other.height || 0.0;
    this.heading = other.heading || 0.0;
    this.edge = other.edge || "";
    this.state = other.state || "";
    this.updated = utcTimeStamp();
  }

  function Edge(other) {
    if (!other) other = {};
    this.id = other.id || "";
    this.type = other.type || "";
    this.sku = other.sku || "";
    this.label = other.label || "";
    this.access = other.access || "";
    this.built = other.built || 0;
    this.updated = utcTimeStamp();
  }

  function Camera(other) {
    if (!other) other = {};
    this.edge = other.edge || "";
    this.id = other.id || "";
    this.tenant = other.tenant || "";
    this.type = other.type || "";
    this.width = other.width || 0;
    this.height = other.height || 0;
    this.polygons = other.polygons || [];
    this.keypoints = other.keypoints || [];
    this.homography = other.homography || [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0]];
    this.coverage = other.coverage || [];
    this.updated = utcTimeStamp();
  }

  function Zone(other) {
    if (!other) other = {};
    this.id = other.id || 0;
    this.tenant = other.tenant || "";
    this.type = other.type || "";
    this.coordinates = other.coordinates || [];
    this.orientation = other.orientation || 0.0;
    this.fixtures = other.fixtures || [];
    this.updated = utcTimeStamp();
  }

  function Action(other) {
    if (!other) other = {};
    this.id = other.id || 0;
    this.username = other.username || "";
    this.fixture = other.type || 0;
    this.state = other.state || "";
    this.note = other.note || "";
    this.updated = utcTimeStamp();
  }
    
  function Config(other) {
    if (!other) other = {};
    this.name = other.name || "";
    this.val = other.val || "";
    this.updated = utcTimeStamp();
  }

  return {
    Fixture: Fixture,
    Camera: Camera,
    Zone: Zone,
    Edge: Edge,
    Action: Action,
    Config: Config
  };
  
})();
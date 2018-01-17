/* jshint undef: false */

var pgdb = (function () {
      
  function createFixture(fixture, next, error) {        
    https.post("/api/create/fixture", fixture, next, error);
  }
  
  function readFixtures(fixture, next, error) {        
    https.get("/api/read/fixtures", fixture, next, error);
  }
  
  function updateFixture(fixture, next, error) {        
    https.put("/api/update/fixture", fixture, next, error);
  }
  
  function deleteFixture(fixture, next, error) {        
    https.del("/api/delete/fixture", fixture, next, error);
  }
  
  function createCamera(camera, next, error) {        
    https.post("/api/create/camera", camera, next, error);
  }
  
  function readCameras(camera, next, error) {        
    https.get("/api/read/cameras", camera, next, error);
  }
  
  function updateCamera(camera, next, error) {        
    https.put("/api/update/camera", camera, next, error);
  }
  
  function deleteCamera(camera, next, error) {        
    https.del("/api/delete/camera", camera, next, error);
  }
  
  function createZone(zone, next, error) {        
    https.post("/api/create/zone", zone, next, error);
  }
    
  function readZones(zone, next, error) {        
    https.get("/api/read/zones", zone, next, error);
  }
  
  function updateZone(zone, next, error) {        
    https.put("/api/update/zone", zone, next, error);
  }
  
  function deleteZone(zone, next, error) {        
    https.del("/api/delete/zone", zone, next, error);
  }
  
  function createEdge(edge, next, error) {        
    https.post("/api/create/edge", edge, next, error);
  }
  
  function readEdges(edge, next, error) {        
    https.get("/api/read/edges", edge, next, error);
  }
  
  function updateEdge(edge, next, error) {        
    https.put("/api/update/edge", edge, next, error);
  }
  
  function deleteEdge(edge, next, error) {        
    https.del("/api/delete/edge", edge, next, error);
  }
  
  function createAction(action, next, error) {        
    https.post("/api/create/action", action, next, error);
  }
  
  function readActions(action, next, error) {        
    https.get("/api/read/actions", action, next, error);
  }
  
  function updateAction(action, next, error) {        
    https.put("/api/update/action", action, next, error);
  }
  
  function deleteAction(action, next, error) {        
    https.del("/api/delete/action", action, next, error);
  }
  
  function createConfig(config, next, error) {        
    https.post("/api/create/config", config, next, error);
  }
  
  function readConfigs(config, next, error) {        
    https.get("/api/read/configs", config, next, error);
  }
  
  function updateConfig(config, next, error) {        
    https.put("/api/update/config", config, next, error);
  }
  
  function deleteConfig(config, next, error) {        
    https.del("/api/delete/config", config, next, error);
  }
  
  function createDb(next, error) {
    https.put('/api/create/db', {}, next, error);  
  }
  
  function backupDb(sqlDumpFile, next, error) {
    https.post('/api/backup/db', {sqlDumpFile: sqlDumpFile}, next, error);
  }
  
  function restoreDb(sqlDumpFile, next, error) {
    https.put('/api/restore/db', {sqlDumpFile: sqlDumpFile}, next, error);
  }
  
      
  return {
    createFixture: createFixture,
    readFixtures: readFixtures,
    updateFixture: updateFixture,
    deleteFixture: deleteFixture,
    createCamera: createCamera,
    readCameras: readCameras,
    updateCamera: updateCamera,
    deleteCamera: deleteCamera,
    createZone: createZone,
    readZones: readZones,
    updateZone: updateZone,
    deleteZone: deleteZone,
    createEdge: createEdge,
    readEdges: readEdges,
    updateEdge: updateEdge,
    deleteEdge: deleteEdge,
    createConfig: createConfig,
    readConfigs: readConfigs,
    updateConfig: updateConfig,
    deleteConfig: deleteConfig,
    createDb: createDb,
    backupDb: backupDb,
    restoreDb: restoreDb
  };
})();
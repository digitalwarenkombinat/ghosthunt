$(document).one(":passagedisplay", function() {
  setup.mapboxLoaded.then(function () {
    mapboxgl.accessToken = State.variables.accessToken
  
    var map = new mapboxgl.Map({
      container: 'map',
      style: State.variables.style,
    });
  
    var geolocate = new mapboxgl.GeolocateControl(window.geolocation.getGeolocateControl());
  
    map.addControl(geolocate);
  
    geolocate.on('geolocate', ({ coords }) => {
      const lat = coords.latitude
      const lon = coords.longitude
      console.log(`Koordinaten : ${lat}; ${lon}`);
    });
  
    map.on('load', () => {
      renderMap();
	    $(".mapboxgl-ctrl-geolocate").click();
    })

    function renderMap() {
      map.resize();
    }
   })
  });
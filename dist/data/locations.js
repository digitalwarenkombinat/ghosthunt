class CircularGeofenceRegion {
    constructor(opts) {
      Object.assign(this, opts)
    }
  }

getLocations = function () {
    const location1 = new CircularGeofenceRegion({
      id: 'friedenspark',
      latitude: 51.3257,
      longitude: 12.397461,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location2 = new CircularGeofenceRegion({
      id: 'wiedebachplatz',
      latitude: 51.309573, 
      longitude: 12.377370,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location3 = new CircularGeofenceRegion({
      id: 'rabet',
      latitude: 51.343321, 
      longitude: 12.404982,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location4 = new CircularGeofenceRegion({
      id: 'clara-zetkin-park',
      latitude: 51.331494, 
      longitude: 12.357056,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location5 = new CircularGeofenceRegion({
      id: 'marburg',
      latitude: 50.817296, 
      longitude: 8.662450,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location6 = new CircularGeofenceRegion({
      id: 'herzbergplatz',
      latitude: 52.477949, 
      longitude: 13.449104,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location7 = new CircularGeofenceRegion({
      id: 'burg',
      latitude: 51.492992, 
      longitude: 11.953488,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location8 = new CircularGeofenceRegion({
      id: 'leutzsch',
      latitude: 51.344967, 
      longitude: 12.318555,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location9 = new CircularGeofenceRegion({
      id: 'hamburg',
      latitude: 53.580682, 
      longitude: 9.909469,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location10 = new CircularGeofenceRegion({
      id: 'freiburg',
      latitude: 48.034971, 
      longitude: 7.875424,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location11 = new CircularGeofenceRegion({
      id: 'schlange',
      latitude: 51.754062,
      longitude: 11.455933,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location12 = new CircularGeofenceRegion({
      id: 'schwein',
      latitude: 51.753561,
      longitude: 11.454144,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location13 = new CircularGeofenceRegion({
      id: 'truthahn',
      latitude: 51.752776,
      longitude: 11.453532,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location14 = new CircularGeofenceRegion({
      id: 'zebra',
      latitude: 51.751645,
      longitude: 11.453348,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location15 = new CircularGeofenceRegion({
      id: 'affe',
      latitude: 51.750972,
      longitude: 11.454920,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location16 = new CircularGeofenceRegion({
      id: 'eule',
      latitude: 51.751370,
      longitude: 11.457007,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location17 = new CircularGeofenceRegion({
      id: 'gazelle',
      latitude: 51.752479,
      longitude: 11.458342,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location18 = new CircularGeofenceRegion({
      id: 'katze',
      latitude: 51.753686,
      longitude: 11.458826,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location19 = new CircularGeofenceRegion({
      id: 'krokodil',
      latitude: 51.754571,
      longitude: 11.458813,
      radius: 30, // meters
      alreadyEntered: false
    });
  
    const location20 = new CircularGeofenceRegion({
      id: 'lama',
      latitude: 51.756125,
      longitude: 11.459156,
      radius: 30, // meters
      alreadyEntered: false
    });
  
  /* Die oben definierten Locations müssen diesem Array zugewiesen werden */	
    const locations = [location1, location2, location3, location4, location5, location6, location7, location8, location9, location10, location11, location12, location13, location14, location15, location16, location17, location18, location19, location20]
    return locations;
  };
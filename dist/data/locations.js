class CircularGeofenceRegion {
    constructor(opts) {
      Object.assign(this, opts)
    }
  }

getLocations = function () {  
    const location1 = new CircularGeofenceRegion({
      id: 'Grabmal Porträt',
      latitude: 51.325305,
      longitude: 12.397482,
      radius: 30,
      alreadyEntered: false
    });
    
    const location2 = new CircularGeofenceRegion({
      id: 'Skulptur Drei Grazien',
      latitude: 51.329915,
      longitude: 12.393133,
      radius: 30,
      alreadyEntered: false
    });
    
    const location3 = new CircularGeofenceRegion({
      id: 'Gipfel auf dem Hügel mit Blick auf Serpentine',
      latitude: 51.328049,
      longitude: 12.395892,
      radius: 30,
      alreadyEntered: false
    });
    
    const location4 = new CircularGeofenceRegion({
      id: 'Eingangsportal zum Friedhof',
      latitude: 51.330461,
      longitude: 12.395353,
      radius: 30,
      alreadyEntered: false
    });
    
    const location5 = new CircularGeofenceRegion({
      id: 'fester Grill',
      latitude: 51.326618,
      longitude: 12.396255,
      radius: 30,
      alreadyEntered: false
    });
    
    const location6 = new CircularGeofenceRegion({
      id: 'Skulptur Lesende',
      latitude: 51.327534,
      longitude: 12.39494,
      radius: 30,
      alreadyEntered: false
    });

    const location7 = new CircularGeofenceRegion({
      id: 'Grabmal Walther Simon',
      latitude: 51.329781,
      longitude: 12.396697,
      radius: 30,
      alreadyEntered: false
    });

    const location8 = new CircularGeofenceRegion({
      id: 'Statue Studentinnen',
      latitude: 51.325018,
      longitude: 12.395986,
      radius: 30,
      alreadyEntered: false
    });

    const location9 = new CircularGeofenceRegion({
      id: 'Grabmal Oskar Langbein',
      latitude: 51.326239,
      longitude: 12.3973,
      radius: 30,
      alreadyEntered: false
    });

    const location10 = new CircularGeofenceRegion({
      id: 'Öffentliche Toilette',
      latitude: 51.325511,
      longitude: 12.393341,
      radius: 30,
      alreadyEntered: false
    });
  
  /* The locations defined above must be assigned to this array */	
  const locations = [
    location1, location2, location3, location4, location5, location6, location7, location8, location9, location10
  ];
    return locations;
  };
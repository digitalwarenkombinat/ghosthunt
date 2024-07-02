class CircularGeofenceRegion {
    constructor(opts) {
      Object.assign(this, opts)
    }
  }

getLocations = function () {  
    const location1 = new CircularGeofenceRegion({
      id: 'Japanisches Teehaus',
      latitude: 48.14539,
      longitude: 11.58587,
      radius: 30
    });
    
    const location2 = new CircularGeofenceRegion({
      id: 'Spielplatz Wippe',
      latitude: 48.14504,
      longitude: 11.58891,
      radius: 30
    });
    
    const location3 = new CircularGeofenceRegion({
      id: 'Wasserfallbrücke',
      latitude: 48.14575,
      longitude: 11.58772,
      radius: 30
    });
    
    const location4 = new CircularGeofenceRegion({
      id: 'Rumfordstraße',
      latitude: 48.14716,
      longitude: 11.59120,
      radius: 30
    });
    
    const location5 = new CircularGeofenceRegion({
      id: 'Monopteros',
      latitude: 48.14988,
      longitude: 11.59092,
      radius: 30
    });
    
    const location6 = new CircularGeofenceRegion({
      id: 'Schwabinger Bach',
      latitude: 48.14968,
      longitude: 11.58754,
      radius: 30
    });

    const location7 = new CircularGeofenceRegion({
      id: 'Militärgartenweg',
      latitude: 48.14855,
      longitude: 11.58571,
      radius: 30
    });

    const location8 = new CircularGeofenceRegion({
      id: 'Berliner Mauer',
      latitude: 48.14520,
      longitude: 11.58412,
      radius: 30
    });

    const location9 = new CircularGeofenceRegion({
      id: 'Rumford Denkmal',
      latitude: 48.14398,
      longitude: 11.58908,
      radius: 30
    });

    const location10 = new CircularGeofenceRegion({
      id: 'Öffentliche Toilette',
      latitude: 48.14967,
      longitude: 11.58513,
      radius: 30
    });
  
    /* The locations defined above must be assigned to this array */	
    const locations = [ location1, location2, location3, location4, location5, location6, location7, location8, location9, location10 ];
    return locations;
  };
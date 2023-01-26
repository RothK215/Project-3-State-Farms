// A function to determine the marker size based on the population
function markerSize(population) {
  return Math.sqrt(population) * 100;
}

// An array that contains all the information needed to create city and state markers
// Population = Total Acres
var locations = [
  {
    coordinates: [41.603221, -73.087749],
    state: {
      name: "Connecticut",
      population: 23906
    },
    city: {
    name: "Connecticut",
    population: 23906
    }
  },
  {
    coordinates: [45.253783, -69.445469],
    state: {
      name: "Maine",
      population: 65145
    },
    city: {
    name: "Maine",
    population: 65145
    }
  },
  {
    coordinates: [42.407211, -71.382439],
    state: {
      name: "Massachusetts",
      population: 14973
    },
    city: {
    name: "Massachusetts",
    population: 14973
    }
  },
  {
    coordinates: [43.299428, -74.217933],
    state: {
      name: "New York",
      population: 1450971
    },
    city: {
    name: "New York",
    population: 1450971
    }
  },
  {
    coordinates: [41.203322, -77.194525],
    state: {
      name: "Pennsylvania",
      population: 1650117
    },
    city: {
    name: "Pennsylvania",
    population: 1650117
    }
  },
  {
    coordinates: [40.058324, -74.405661],
    state: {
      name: "New Jersey",
      population: 190981
    },
    city: {
    name: "New Jersey",
    population: 190981
    }
  },
  {
    coordinates: [43.872754, -72.772265],
    state: {
      name: "Vermont",
      population: 92271
    },
    city: {
    name: "Vermont",
    population: 92271
    }
  },
  {
    coordinates: [43.610283, -71.58302],
    state: {
      name: "New Hampshire",
      population: 12586
    },
    city: {
    name: "New Hampshire",
    population: 12586
    }
  },
  {
    coordinates: [41.580095, -71.477429],
    state: {
      name: "Rhode Island",
      population: 1708
    },
    city: {
    name: "Rhode Island",
    population: 1708
    }
  },
];

//const jsonFile = require("State_Acres_Lat_Lon.json");
//console.log(jsonFile);
//var locations = jsonFile

// Define arrays to hold the created city and state markers.
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations, and create the city and state markers.
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "#e18210",
      fillColor: "#e18210",
      radius: markerSize(locations[i].state.population)
    })
  );

  // Set the marker radius for the city by passing the population to the markerSize() function.
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "#e18210",
      fillColor: "#e18210",
      radius: markerSize(locations[i].city.population)
    })
  );
}

// Create the base layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create two separate layer groups: one for the city markers and another for the state markers.
var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

// Create an overlay object.
var overlayMaps = {
  "State Farmed Acres": states
};

// Define a map object.
var myMap = L.map("map", {
  center: [43.299428, -74.217933],
  zoom: 3,
  minZoom:5.3,
  layers: [street, states, cities]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);






// Define a function that we want to run once for each state feature in the features array.
// Give each feature a popup that names the state and total acres farmed.
//function onEachFeature(feature, layer) {
    //layer.bindPopup(
        //`<h1>State:${feature.Row_Labels[0]}</h1> <hr> <h3>Total Acres Farmed in 2022:${feature.Row_Labels[12]}</h3>`);
//};








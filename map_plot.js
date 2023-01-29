// A function to determine the marker size based on the population
function markerSize(data) {
  return Math.sqrt(data) * 50;
}


// An array that contains all the information needed to create city and state markers
var state = [
  {
  state_name: "Alabama",
  coord: [32.318231, -86.902298],
  acre_info: {
     acres_farmed: 1158192,
     planted: 3500663.71,
     volunteer: 122848.87,
     failed: 1613.7,
     prevented: 5036.15,
     not_planted: 109401.41,
     planted_and_failed: 3502277.41,
     farm_count: 46833}
  },
  {
  state_name: "Alaska",
  coord: [63.588753, -154.493062], 
  acre_info: {
     acres_farmed: 6178,
     planted: 92718.16,
     volunteer: 1037.82,
     failed: 0,
     prevented: 2523.23,
     not_planted: 10681.28,
     planted_and_failed: 92718.16,
     farm_count: 125}
  },
  {
  state_name: "Arizona",
  coord: [34.048927, -111.093735], 
  acre_info: {
     acres_farmed: 335673,
     planted: 15322271.49,
     volunteer: 3622027.65,
     failed: 275.1,
     prevented: 63692.13,
     not_planted: 48976.01,
     planted_and_failed: 15322546.59,
     farm_count: 3372}
  },
  {
  state_name: "Arkansas",
  coord: [35.20105, -91.831833], 
  acre_info: {
     acres_farmed: 5786166,
     planted: 8933211.89,
     volunteer: 243448.27,
     failed: 32211.96,
     prevented: 584878.93,
     not_planted: 98339.85,
     planted_and_failed: 8965423.85,
     farm_count: 56549}
  },
  {
  state_name: "California",
  coord: [36.778261, -119.417932], 
  acre_info: {
     acres_farmed: 1141461,
     planted: 14298834.1,
     volunteer: 447831.5,
     failed: 1066.52,
     prevented: 395716.77,
     not_planted: 265226.37,
     planted_and_failed: 14299900.62,
     farm_count: 21187}
  },
  {
  state_name: "Colorado",
  coord: [39.550051, -105.782067], 
  acre_info: {
     acres_farmed: 3927968,
     planted: 24331538.9,
     volunteer: 148703.42,
     failed: 456344.62,
     prevented: 283187.98,
     not_planted: 1008618.4,
     planted_and_failed: 24787883.52,
     farm_count: 31466}
  },
  {
  state_name: "Connecticut",
  coord: [41.603221, -73.087749], 
  acre_info: {
     acres_farmed: 23906,
     planted: 86424.34,
     volunteer: 1.77,
     failed: 50.5,
     prevented: 0,
     not_planted: 2201.01,
     planted_and_failed: 86474.84,
     farm_count: 2425}
  },
  {
  state_name: "Delaware",
  coord: [38.910832, -75.52767], 
  acre_info: {
     acres_farmed: 384463,
     planted: 539150.12,
     volunteer: 481.19,
     failed: 565.12,
     prevented: 0,
     not_planted: 41.43,
     planted_and_failed: 539715.24,
     farm_count: 4954}
  },
  {
  state_name: "Florida",
  coord: [27.664827, -81.515754], 
  acre_info: {
     acres_farmed: 394039,
     planted: 2640086.83,
     volunteer: 261673.22,
     failed: 543.64,
     prevented: 29.73,
     not_planted: 1307703.49,
     planted_and_failed: 2640630.47,
     farm_count: 12582}
  },
  {
  state_name: "Georgia",
  coord: [32.157435, -82.907123], 
  acre_info: {
     acres_farmed: 2013729,
     planted: 5076482.13,
     volunteer: 18011.08,
     failed: 437.13,
     prevented: 2437.26,
     not_planted: 379078.25,
     planted_and_failed: 5076919.26,
     farm_count: 47253}
  },
  {
  state_name: "Idaho",
  coord: [44.068203, -114.742043], 
  acre_info: {
     acres_farmed: 2123909,
     planted: 8676732.05,
     volunteer: 1664616.22,
     failed: 13353.68,
     prevented: 100381.42,
     not_planted: 164150.94,
     planted_and_failed: 8690085.73,
     farm_count: 22623}
  },
  {
  state_name: "Illinois",
  coord: [40.000000, -89.000000], 
  acre_info: {
     acres_farmed: 21965155,
     planted: 24159267.61,
     volunteer: 317143.04,
     failed: 6264.02,
     prevented: 116824.44,
     not_planted: 58574.41,
     planted_and_failed: 24165531.63,
     farm_count: 198376}
  },
  {
  state_name: "Indiana",
  coord: [40.273502, -86.126976], 
  acre_info: {
     acres_farmed: 11359770,
     planted: 13007231.72,
     volunteer: 208085.42,
     failed: 8384.46,
     prevented: 50337.73,
     not_planted: 38039.22,
     planted_and_failed: 13015616.18,
     farm_count: 131813}
  },
  {
  state_name: "Iowa",
  coord: [41.878003, -93.097702], 
  acre_info: {
     acres_farmed: 22884899,
     planted: 28456781.33,
     volunteer: 349674.56,
     failed: 3043.62,
     prevented: 5097.41,
     not_planted: 54781.84,
     planted_and_failed: 28459824.95,
     farm_count: 188205}
  },
  {
  state_name: "Kansas",
  coord: [39.011902, -98.484246], 
  acre_info: {
     acres_farmed: 21074211,
     planted: 45445154.71,
     volunteer: 77558.85,
     failed: 74168.36,
     prevented: 208836.39,
     not_planted: 123315,
     planted_and_failed: 45519323.07,
     farm_count: 134144}
  },
  {
  state_name: "Kentucky",
  coord: [37.839333, -84.270018], 
  acre_info: {
     acres_farmed: 3755736,
     planted: 6546140.67,
     volunteer: 191673.86,
     failed: 1637.73,
     prevented: 16357.45,
     not_planted: 86177.63,
     planted_and_failed: 6547778.4,
     farm_count: 71109}
  },
  {
  state_name: "Louisiana",
  coord: [31.244823, -92.145024], 
  acre_info: {
     acres_farmed: 2885413,
     planted: 4451946,
     volunteer: 404301.32,
     failed: 11158.34,
     prevented: 85845.11,
     not_planted: 286913.49,
     planted_and_failed: 4463104.35,
     farm_count: 32196}
  },
  {
  state_name: "Maine",
  coord: [45.367584, -68.972168], 
  acre_info: {
     acres_farmed: 65145,
     planted: 307639.33,
     volunteer: 53743.47,
     failed: 2.5,
     prevented: 415.73,
     not_planted: 36085.6,
     planted_and_failed: 307641.83,
     farm_count: 5046}
  },
  {
  state_name: "Maryland",
  coord: [39.045753, -76.641273], 
  acre_info: {
     acres_farmed: 1085739,
     planted: 1636528.82,
     volunteer: 25307.61,
     failed: 302.1,
     prevented: 335.91,
     not_planted: 12223.08,
     planted_and_failed: 1636830.92,
     farm_count: 17840}
  },
  {
  state_name: "Massachusetts",
  coord: [42.407211, -71.382439], 
  acre_info: {
     acres_farmed: 14973,
     planted: 110981.15,
     volunteer: 409.88,
     failed: 0,
     prevented: 157,
     not_planted: 20756.43,
     planted_and_failed: 110981.15,
     farm_count: 3552}
  },
  {
  state_name: "Michigan",
  coord: [44.314844, -85.602364], 
  acre_info: {
     acres_farmed: 5008821,
     planted: 6665734.46,
     volunteer: 115776.33,
     failed: 15095.29,
     prevented: 110493.49,
     not_planted: 178543.57,
     planted_and_failed: 6680829.75,
     farm_count: 73081}
  },
  {
  state_name: "Minnesota",
  coord: [46.729553, -94.6859], 
  acre_info: {
     acres_farmed: 17156026,
     planted: 21287853.93,
     volunteer: 408988.98,
     failed: 2741.89,
     prevented: 511796.52,
     not_planted: 164237.06,
     planted_and_failed: 21290595.82,
     farm_count: 129115}
  },
  {
  state_name: "Mississippi",
  coord: [32.354668, -89.398528], 
  acre_info: {
     acres_farmed: 3553786,
     planted: 5211117.45,
     volunteer: 56358.38,
     failed: 7269.02,
     prevented: 162185.73,
     not_planted: 83761.05,
     planted_and_failed: 5218386.47,
     farm_count: 35092}
  },
  {
  state_name: "Missouri",
  coord: [38.573936, -92.603760], 
  acre_info: {
     acres_farmed: 10399930,
     planted: 20173496.98,
     volunteer: 265097.94,
     failed: 32265.14,
     prevented: 191358.23,
     not_planted: 37529.33,
     planted_and_failed: 20205762.12,
     farm_count: 141462}
  },
  {
  state_name: "Montana",
  coord: [46.879682, -110.362566], 
  acre_info: {
     acres_farmed: 6429930,
     planted: 47576634.49,
     volunteer: 51495.91,
     failed: 195484.35,
     prevented: 57945.3,
     not_planted: 2521721.87,
     planted_and_failed: 47772118.84,
     farm_count: 44605}
  },
  {
  state_name: "Nebraska",
  coord: [41.500000, -100.000000], 
  acre_info: {
     acres_farmed: 16600770,
     planted: 42508314.56,
     volunteer: 40292.05,
     failed: 84842.67,
     prevented: 6759.95,
     not_planted: 297327.81,
     planted_and_failed: 42593157.23,
     farm_count: 108109}
  },
  {
  state_name: "Nevada",
  coord: [39.876019, -117.224121], 
  acre_info: {
     acres_farmed: 24190,
     planted: 3618566.23,
     volunteer: 1670.94,
     failed: 365.46,
     prevented: 7034.56,
     not_planted: 5896.96,
     planted_and_failed: 3618931.69,
     farm_count: 1950}
  },
  {
  state_name: "New Hampshire",
  coord: [44.000000, -71.500000], 
  acre_info: {
     acres_farmed: 12586,
     planted: 70641.94,
     volunteer: 3722.15,
     failed: 15.87,
     prevented: 7.35,
     not_planted: 62954.48,
     planted_and_failed: 70657.81,
     farm_count: 1568}
  },
  {
  state_name: "New Jersey",
  coord: [40.058324, -74.405661], 
  acre_info: {
     acres_farmed: 190981,
     planted: 309802.19,
     volunteer: 412.52,
     failed: 22.58,
     prevented: 575.97,
     not_planted: 40412.61,
     planted_and_failed: 309824.77,
     farm_count: 5130}
  },
  {
  state_name: "New Mexico",
  coord: [34.97273, -105.032363], 
  acre_info: {
     acres_farmed: 773378,
     planted: 28413544.18,
     volunteer: 7675.25,
     failed: 20242.36,
     prevented: 13754.2,
     not_planted: 102320.99,
     planted_and_failed: 28433786.54,
     farm_count: 10746}
  },
  {
  state_name: "New York",
  coord: [43.299428, -74.217933], 
  acre_info: {
     acres_farmed: 1450971,
     planted: 3330209.79,
     volunteer: 76189,
     failed: 2321.06,
     prevented: 50788.05,
     not_planted: 160042.13,
     planted_and_failed: 3332530.84,
     farm_count: 39880}
  },
  {
  state_name: "North Carolina",
  coord: [35.782169, -80.793457], 
  acre_info: {
     acres_farmed: 3404015,
     planted: 5025826.79,
     volunteer: 175429.15,
     failed: 1333.05,
     prevented: 5986.7,
     not_planted: 105137.36,
     planted_and_failed: 5027159.84,
     farm_count: 81287}
  },
  {
  state_name: "North Dakota",
  coord: [47.650589, -100.437012], 
  acre_info: {
     acres_farmed: 15855697,
     planted: 34557755.68,
     volunteer: 261938.22,
     failed: 5135.34,
     prevented: 2772263.71,
     not_planted: 521097.76,
     planted_and_failed: 34562891.02,
     farm_count: 74911}
  },
  {
  state_name: "Ohio",
  coord: [40.417287, -82.907123], 
  acre_info: {
     acres_farmed: 8812266,
     planted: 10345485.04,
     volunteer: 108425.48,
     failed: 19577.12,
     prevented: 80106.78,
     not_planted: 82034.6,
     planted_and_failed: 10365062.16,
     farm_count: 120061}
  },
  {
  state_name: "Oklahoma",
  coord: [35.007752, -97.092877], 
  acre_info: {
     acres_farmed: 7869982,
     planted: 28098963.94,
     volunteer: 86524.05,
     failed: 20713.08,
     prevented: 104068.76,
     not_planted: 245259.08,
     planted_and_failed: 28119677.02,
     farm_count: 99849}
  },
  {
  state_name: "Oregon",
  coord: [43.804133, -120.554201], 
  acre_info: {
     acres_farmed: 853666,
     planted: 12525696.02,
     volunteer: 26205.71,
     failed: 7909.36,
     prevented: 21867.02,
     not_planted: 33430.46,
     planted_and_failed: 12533605.38,
     farm_count: 18103}
  },
  {
  state_name: "Pennsylvania",
  coord: [41.203322, -77.194525], 
  acre_info: {
     acres_farmed: 1650117,
     planted: 2746130.18,
     volunteer: 46203.34,
     failed: 297.16,
     prevented: 5132.47,
     not_planted: 129074.34,
     planted_and_failed: 2746427.34,
     farm_count: 50219}
  },
  {
  state_name: "Puerto Rico",
  coord: [18.220833, -66.590149], 
  acre_info: {
     acres_farmed: 6,
     planted: 13449.51,
     volunteer: 0,
     failed: 0,
     prevented: 0.4,
     not_planted: 116.68,
     planted_and_failed: 13449.51,
     farm_count: 839}
  },
  {
  state_name: "Rhode Island",
  coord: [41.580095, -71.477429], 
  acre_info: {
     acres_farmed: 1708,
     planted: 15159.07,
     volunteer: 0,
     failed: 22.09,
     prevented: 0,
     not_planted: 1484.12,
     planted_and_failed: 15181.16,
     farm_count: 853}
  },
  {
  state_name: "South Carolina",
  coord: [33.836081, -81.163725], 
  acre_info: {
     acres_farmed: 1069162,
     planted: 1875008.1,
     volunteer: 8681.2,
     failed: 1021.84,
     prevented: 15232.9,
     not_planted: 77970.94,
     planted_and_failed: 1876029.94,
     farm_count: 25690}
  },
  {
  state_name: "South Dakota",
  coord: [43.969515, -99.901813], 
  acre_info: {
     acres_farmed: 12665131,
     planted: 42151745.89,
     volunteer: 63194.43,
     failed: 53131.57,
     prevented: 745568.24,
     not_planted: 438319.64,
     planted_and_failed: 42204877.46,
     farm_count: 74056}
  },
  {
  state_name: "Tennessee",
  coord: [35.517491, -86.580447], 
  acre_info: {
     acres_farmed: 3081436,
     planted: 4935688.47,
     volunteer: 187442.63,
     failed: 8771.18,
     prevented: 31833.91,
     not_planted: 71726.87,
     planted_and_failed: 4944459.65,
     farm_count: 58121}
  },
  {
  state_name: "Texas",
  coord: [31.968599, -99.901813], 
  acre_info: {
     acres_farmed: 18851229,
     planted: 77150000.11,
     volunteer: 374552.12,
     failed: 4188455.29,
     prevented: 85825.76,
     not_planted: 979690.71,
     planted_and_failed: 81338455.39,
     farm_count: 190974}
  },
  {
  state_name: "Utah",
  coord: [39.419220, -111.950684], 
  acre_info: {
     acres_farmed: 194762,
     planted: 6992208.16,
     volunteer: 275990.16,
     failed: 3510.71,
     prevented: 29154.83,
     not_planted: 52466.87,
     planted_and_failed: 6995718.87,
     farm_count: 11518}
  },
  {
  state_name: "Vermont",
  coord: [44.000000, -72.699997], 
  acre_info: {
     acres_farmed: 92271,
     planted: 979504.11,
     volunteer: 2256.38,
     failed: 51.47,
     prevented: 30.94,
     not_planted: 47756.01,
     planted_and_failed: 979555.58,
     farm_count: 6232}
  },
  {
  state_name: "Virgin Islands of the U.S.",
  coord: [18.3358, 64.8963], 
  acre_info: {
     acres_farmed: 3,
     planted: 2327.8,
     volunteer: 0,
     failed: 0.03,
     prevented: 0,
     not_planted: 0,
     planted_and_failed: 2327.83,
     farm_count: 96}
  },
  {
  state_name: "Virginia",
  coord: [37.431573, -78.656894], 
  acre_info: {
     acres_farmed: 1268865,
     planted: 3076990.19,
     volunteer: 70301.88,
     failed: 744.59,
     prevented: 675.04,
     not_planted: 50543.08,
     planted_and_failed: 3077734.78,
     farm_count: 41373}
  },
  {
  state_name: "Washington",
  coord: [47.751074, -120.740139], 
  acre_info: {
     acres_farmed: 2434531,
     planted: 9302682.45,
     volunteer: 6877.44,
     failed: 1429.08,
     prevented: 5808.25,
     not_planted: 304391.16,
     planted_and_failed: 9304111.53,
     farm_count: 18059}
  },
  {
  state_name: "West Virginia",
  coord: [38.597626, -80.454903], 
  acre_info: {
     acres_farmed: 75442,
     planted: 535123.99,
     volunteer: 235287.06,
     failed: 39.42,
     prevented: 142.28,
     not_planted: 28375.41,
     planted_and_failed: 535163.41,
     farm_count: 12051}
  },
  {
  state_name: "Wisconsin",
  coord: [44.500000, -89.500000], 
  acre_info: {
     acres_farmed: 6371965,
     planted: 9479194.15,
     volunteer: 290521.52,
     failed: 6712.68,
     prevented: 23750.28,
     not_planted: 137239.61,
     planted_and_failed: 9485906.83,
     farm_count: 113370}
  },
  {
  state_name: "Wyoming",
  coord: [43.075968, -107.290284], 
  acre_info: {
     acres_farmed: 320954,
     planted: 20780383.62,
     volunteer: 12278.8,
     failed: 4395.79,
     prevented: 594.82,
     not_planted: 43198.01,
     planted_and_failed: 20784779.41,
     farm_count: 11771
  }
}];

// Define arrays to hold the created city and state markers.
var plantedMarkers = [];
var volunteerMarkers = [];
var failedMarkers = [];
var preventedMarkers= [];
var not_plantedMarkers= [];
var farm_countMarkers= [];


// Loop through locations, and create the city and state markers.
for (var i = 0; i < state.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  plantedMarkers.push(
    L.circle(state[i].coord, {
      stroke: false,
      fillOpacity: 0.35,
      color: "black",
      fillColor: "green",
      radius: markerSize(state[i].acre_info.planted)
    }).bindPopup("<h3>" + state[i].state_name +": "+ state[i].acre_info.planted +" acres"+ "</h3>" + 
                                       "<hr>" +
                                       "<h4>" +"State's Total Farm Count: "+  state[i].acre_info.farm_count + "</h4>")
  );

  volunteerMarkers.push(
    L.circle(state[i].coord, {
      stroke: false,
      fillOpacity: 0.35,
      color: "black",
      fillColor: "yellow",
      radius: markerSize(state[i].acre_info.volunteer)
    }).bindPopup("<h3>" + state[i].state_name +": "+ state[i].acre_info.volunteer +" acres"+ "</h3>" + 
                                       "<hr>" +
                                       "<h4>" +"State's Total Farm Count: "+  state[i].acre_info.farm_count + "</h4>")
  );

  failedMarkers.push(
    L.circle(state[i].coord, {
      stroke: false,
      fillOpacity: 0.35,
      color: "black",
      fillColor: "red",
      radius: markerSize(state[i].acre_info.failed)
    }).bindPopup("<h3>" + state[i].state_name +": "+ state[i].acre_info.failed +" acres"+ "</h3>" + 
                                       "<hr>" +
                                       "<h4>" +"State's Total Farm Count: "+  state[i].acre_info.farm_count + "</h4>")
  );

  preventedMarkers.push(
    L.circle(state[i].coord, {
      stroke: false,
      fillOpacity: 0.35,
      color: "black",
      fillColor: "orange",
      radius: markerSize(state[i].acre_info.prevented)
    }).bindPopup("<h3>" + state[i].state_name +": "+ state[i].acre_info.prevented +" acres"+ "</h3>" + 
                                       "<hr>" +
                                       "<h4>" +"State's Total Farm Count: "+  state[i].acre_info.farm_count + "</h4>")
  );

  not_plantedMarkers.push(
    L.circle(state[i].coord, {
      stroke: false,
      fillOpacity: 0.35,
      color: "black",
      fillColor: "black",
      radius: markerSize(state[i].acre_info.not_planted)
    }).bindPopup("<h3>" + state[i].state_name +": "+ state[i].acre_info.not_planted +" acres"+ "</h3>" + 
                                       "<hr>" +
                                       "<h4>" +"State's Total Farm Count: "+  state[i].acre_info.farm_count + "</h4>")
  );


}

// Create the base layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


// Create 6 separate layer groups: one for the city markers and another for the state markers.
var planted = L.layerGroup(plantedMarkers);
var volunteer = L.layerGroup(volunteerMarkers);
var failed = L.layerGroup(failedMarkers);
var prevented = L.layerGroup(preventedMarkers);
var not_planted = L.layerGroup(not_plantedMarkers);

// Create a baseMaps object.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

// Create an overlay object.
var overlayMaps = {
  "Planted Acres": planted,
  "Volunteered Acres": volunteer,
  "Failed Acres": failed,
  "Prevented Acres": prevented,
  "Unused Acres": not_planted,
};

// Define a map object.
var myMap = L.map("map", {
  center: [43.299428, -74.217933],
  zoom: 1,
  minZoom:5.3,
  layers: [street, planted]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


//State Array Objects Retrieval
let Alabama = Object.values(data.Alabama);
let Alaska = Object.values(data.Alaska);
let Arizona = Object.values(data.Arizona);
let Arkansas = Object.values(data.Arkansas);
let California = Object.values(data.California);
let Colorado = Object.values(data.Colorado);
let Connecticut = Object.values(data.Connecticut);
let Delaware = Object.values(data.Delaware);
let Florida = Object.values(data.Florida);
let Georgia = Object.values(data.Georgia);
let Guam = Object.values(data.Guam);
let Idaho = Object.values(data.Idaho);
let Illinois = Object.values(data.Illinois);
let Indiana = Object.values(data.Indiana);
let Iowa = Object.values(data.Iowa);
let Kansas = Object.values(data.Kansas);
let Kentucky = Object.values(data.Kentucky);
let Louisiana = Object.values(data.Louisiana);
let Maine = Object.values(data.Maine);
let Maryland = Object.values(data.Maryland);
let Massachusetts = Object.values(data.Massachusetts);
let Michigan = Object.values(data.Michigan);
let Minnesota = Object.values(data.Minnesota);
let Mississippi = Object.values(data.Mississippi);
let Missouri = Object.values(data.Missouri);
let Montana = Object.values(data.Montana);
let Nebraska = Object.values(data.Nebraska);
let Nevada = Object.values(data.Nevada);
let New_Hampshire = Object.values(data.New_Hampshire);
let New_Jersey = Object.values(data.New_Jersey);
let New_Mexico = Object.values(data.New_Mexico);
let New_York = Object.values(data.New_York);
let North_Carolina = Object.values(data.North_Carolina);
let North_Dakota = Object.values(data.North_Dakota);
let Ohio = Object.values(data.Ohio);
let Oklahoma = Object.values(data.Oklahoma);
let Oregon = Object.values(data.Oregon);
let Pennsylvania = Object.values(data.Pennsylvania);
let Puerto_Rico = Object.values(data.Puerto_Rico);
let Rhode_Island = Object.values(data.Rhode_Island);
let South_Carolina = Object.values(data.South_Carolina);
let South_Dakota = Object.values(data.South_Dakota);
let Tennessee = Object.values(data.Tennessee);
let Texas = Object.values(data.Texas);
let Utah = Object.values(data.Utah);
let Vermont = Object.values(data.Vermont);
let Virgin_Islands_of_the_US = Object.values(data.Virgin_Islands_of_the_US);
let Virginia = Object.values(data.Virginia);
let Washington = Object.values(data.Washington);
let West_Virginia = Object.values(data.West_Virginia);
let Wisconsin = Object.values(data.Wisconsin);
let Wyoming = Object.values(data.Wyoming);

// Create an array of category labels
let labels = Object.keys(data.Alabama);

// Display the default plot
function init() {
  let data = [{
    values: Alabama,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 500,
    width: 500,
    plot_bgcolor: "rgba(0,0,0,0)",
    paper_bgcolor: "rgba(0,0,0,0)",       
    font:(color='white')
  };
 
  
  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the state's data
  let data = [];

  if (dataset == 'Alabama') {
    data = Alabama;
}
else if (dataset == 'Alaska') {
    data = Alaska;
}
else if (dataset == 'Arizona') {
    data = Arizona;
}
else if (dataset == 'Arkansas') {
    data = Arkansas;
}
else if (dataset == 'California') {
    data = California;
}
else if (dataset == 'Colorado') {
    data = Colorado;
}
else if (dataset == 'Connecticut') {
    data = Connecticut;
}
else if (dataset == 'Delaware') {
    data = Delaware;
}
else if (dataset == 'Florida') {
    data = Florida;
}
else if (dataset == 'Georgia') {
    data = Georgia;
}
else if (dataset == 'Guam') {
    data = Guam;
}
else if (dataset == 'Idaho') {
    data = Idaho;
}
else if (dataset == 'Illinois') {
    data = Illinois;
}
else if (dataset == 'Indiana') {
    data = Indiana;
}
else if (dataset == 'Iowa') {
    data = Iowa;
}
else if (dataset == 'Kansas') {
    data = Kansas;
}
else if (dataset == 'Kentucky') {
    data = Kentucky;
}
else if (dataset == 'Louisiana') {
    data = Louisiana;
}
else if (dataset == 'Maine') {
    data = Maine;
}
else if (dataset == 'Maryland') {
    data = Maryland;
}
else if (dataset == 'Massachusetts') {
    data = Massachusetts;
}
else if (dataset == 'Michigan') {
    data = Michigan;
}
else if (dataset == 'Minnesota') {
    data = Minnesota;
}
else if (dataset == 'Mississippi') {
    data = Mississippi;
}
else if (dataset == 'Missouri') {
    data = Missouri;
}
else if (dataset == 'Montana') {
    data = Montana;
}
else if (dataset == 'Nebraska') {
    data = Nebraska;
}
else if (dataset == 'Nevada') {
    data = Nevada;
}
else if (dataset == 'New_Hampshire') {
    data = New_Hampshire;
}
else if (dataset == 'New_Jersey') {
    data = New_Jersey;
}
else if (dataset == 'New_Mexico') {
    data = New_Mexico;
}
else if (dataset == 'New_York') {
    data = New_York;
}
else if (dataset == 'North_Carolina') {
    data = North_Carolina;
}
else if (dataset == 'North_Dakota') {
    data = North_Dakota;
}
else if (dataset == 'Ohio') {
    data = Ohio;
}
else if (dataset == 'Oklahoma') {
    data = Oklahoma;
}
else if (dataset == 'Oregon') {
    data = Oregon;
}
else if (dataset == 'Pennsylvania') {
    data = Pennsylvania;
}
else if (dataset == 'Puerto_Rico') {
    data = Puerto_Rico;
}
else if (dataset == 'Rhode_Island') {
    data = Rhode_Island;
}
else if (dataset == 'South_Carolina') {
    data = South_Carolina;
}
else if (dataset == 'South_Dakota') {
    data = South_Dakota;
}
else if (dataset == 'Tennessee') {
    data = Tennessee;
}
else if (dataset == 'Texas') {
    data = Texas;
}
else if (dataset == 'Utah') {
    data = Utah;
}
else if (dataset == 'Vermont') {
    data = Vermont;
}
else if (dataset == 'Virgin Islands of the U.S.') {
    data = Virgin_Islands_of_the_US;
}
else if (dataset == 'Virginia') {
    data = Virginia;
}
else if (dataset == 'Washington') {
    data = Washington;
}
else if (dataset == 'West_Virginia') {
    data = West_Virginia;
}
else if (dataset == 'Wisconsin') {
    data = Wisconsin;
}
else if (dataset == 'Wyoming') {
    data = Wyoming;
}


// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();

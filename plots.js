// Create an array of each states's data
let Connecticut = Object.values(data.Connecticut);
let Delaware = Object.values(data.Delaware);
let Maine = Object.values(data.Maine);
let Massachusetts = Object.values(data.Massachusetts);
let New_Hampshire = Object.values(data.New_Hampshire);
let New_Jersey = Object.values(data.New_Jersey);
let New_York = Object.values(data.New_York);
let Pennsylvania = Object.values(data.Pennsylvania);
let Rhode_Island = Object.values(data.Rhode_Island);
let Vermont = Object.values(data.Vermont);

// Create an array of category labels
let labels = Object.keys(data.Connecticut);

// Display the default plot
function init() {
  let data = [{
    values: Connecticut,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 500,
    width: 500,
    plot_bgcolor: "rgba(0,0,0,0)",
    paper_bgcolor: "rgba(0,0,0,0)"       
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

  if (dataset == 'Connecticut') {
      data = Connecticut;
  }
  else if (dataset == 'Maine') {
      data = Maine;
  }
  else if (dataset == 'Massachusetts') {
      data = Massachusetts;
  }
  else if (dataset == 'New_Hampshire') {
    data = New_Hampshire;
  }
  else if (dataset == 'New_Jersey') {
      data = New_Jersey;
  }
  else if (dataset == 'New_York') {
    data = New_York;
  }
  else if (dataset == 'Pennsylvania') {
    data = Pennsylvania;
  }
  else if (dataset == 'Rhode_Island') {
    data = Rhode_Island;
  }
  else if (dataset == 'Vermont') {
    data = Vermont;
  }
  else if (dataset == 'Delaware') {
    data = Delaware;
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();

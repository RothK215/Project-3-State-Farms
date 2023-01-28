function buildMetadata(pie_data_url) {
    d3.json("https://raw.githubusercontent.com/RothK215/Project-3-State-Farms/main/json/pie_data_url.json").then((data) => {
        let metadata = data.metadata;

        let resultArray = metadata.filter(sampleObj => sampleObj.id == pie_data_url);
        let result = resultArray[0];

        let PANEL = d3.select("#state-metadata");
        PANEL.html("");

        for (key in result){
            PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
        };

    });
}

function buildCharts(pie_data_url) {
    d3.json("https://raw.githubusercontent.com/RothK215/Project-3-State-Farms/main/json/pie_data_url.json").then((data) => {
    let stateData = data.metadata;
    let resultsArray = stateData.filter(sampleObj => sampleObj.state == pie_data_url);
    let result = resultsArray[0];

    let state_name = result.state;
    let state_values = result.crop;


    // Display the default plot
    let pieData = [{
        values: state_values,
        labels: state_name,
        type: "pie"
    }];

    let layout = {
        height: 500,
        width: 500,
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0,0)"       
    };
    
  
  Plotly.newPlot("pie", pieData, layout);
});
}

function init() {
    let selector = d3.select("#selDataset");
    d3.json("https://raw.githubusercontent.com/RothK215/Project-3-State-Farms/main/json/pie_data_url.json").then((data) => {
    let stateNames = data.names;

    for (let i = 0; i<stateNames; i++) {
        selector
            .append("option")
            .text(stateNames[i])
            .property("value", stateNames[i])
    };
    
    let newState = stateNames[i];
    buildCharts(newState);
    });
}

function optionChanged(newState) {
    buildCharts(newState);
}

init();
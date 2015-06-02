
function runMore(){
    var svg = d3.select("svg");
    svg.selectAll("rect")
        .data([127, 61, 256, 23])
        .attr("x", 0)
        .attr("y", function(d,i) { return i*30+30 })
        .attr("width", function(d,i) { return d; })
        .attr("height", 20)
        .style("fill", "steelblue")
}

function runLess(){
    var svg = d3.select("svg");
    svg.selectAll("rect")
        .data([43, 66])
        .attr("x", 0)
        .attr("y", function(d,i) { return i*30+30 })
        .attr("width", function(d,i) { return d; })
        .attr("height", 20)
        .style("fill", "steelblue")
}
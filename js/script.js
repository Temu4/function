var parameters = {
  target: '#myFunction',
  data: [{
    fn: 'sin(x)', 
    color: 'blue'
 }       
        ],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

function plot() {
    var color = document.querySelector("#color").value;
    parameters.data[0].color = color;
    var fn = document.querySelector("#fn").value;
    parameters.data[0].fn = fn;
    var xMin = document.querySelector("#xMin").value;
    parameters.xAxis.domain[0] = xMin;
    var xMax = document.querySelector("#xMax").value;
    parameters.xAxis.domain[1] = xMax;
    var yMin = document.querySelector("#yMin").value;
    parameters.yAxis.domain[0] = yMin;
    var yMax = document.querySelector("#yMax").value;
    parameters.yAxis.domain[1] = yMax;
  functionPlot(parameters);
}
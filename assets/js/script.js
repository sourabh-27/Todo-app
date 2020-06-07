// console.log("Hello, you are inside javascript");
var colors = {
    "School": "F2A700", "Work":"9C00AF", "Personal":"3C6CB8", "Other": "66e0c6" 
};

var getDiv = $('#category-type').html().trim();
var getColor = colors[getDiv];
// console.log("Color", getColor);
$('#set-color').css("background-color", '#'+getColor);
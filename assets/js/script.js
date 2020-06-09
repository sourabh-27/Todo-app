//This is to change the color of todo icon according to the category type
$( document ).ready(function() {
    var colors = {
        "School": "F2A700", "Work":"9C00AF", "Personal":"3C6CB8", "Other": "66e0c6" 
    };
    var getDiv = $('.category-type');
    for(let div of getDiv){
        $(div).parent().css("background-color", '#'+colors[$(div).text()]);
    }
     //The thing is actually my html is not static it is for loop if you see
});

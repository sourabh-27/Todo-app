// console.log("Hello, you are inside javascript");
$( document ).ready(function() {
    var colors = {
        "School": "F2A700", "Work":"9C00AF", "Personal":"3C6CB8", "Other": "66e0c6" 
    };
    var getDiv = $('.category-type');

    // console.log(getDiv.length);
    for(let div of getDiv){
        // console.log($(div).text());
        // console.log($(div).parent()[0]);
        // let color = $(div).text()
        $(div).parent().css("background-color", '#'+colors[$(div).text()]);
    }
     //Hi the thing is actually my html is not static it is for loop if you see
});

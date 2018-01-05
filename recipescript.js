var slider = document.getElementById("myRange");
var output = document.getElementById("slideroutput");
output.innerHTML = slider.value; // Display the default slider value

var reset = document.getElementsByClassName('reset');
var ingredients = document.getElementsByClassName('ingredmath');


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    for(let i = 0; i < ingredients.length; i++)
    ingredients[i].innerHTML = reset[i].innerHTML;
    
    output.innerHTML = this.value;
    for(let i = 0; i < ingredients.length; i++)
    ingredients[i].innerHTML = Math.round((ingredients[i].innerHTML * this.value / 4) * 100) / 100;
}

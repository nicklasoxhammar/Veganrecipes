
var img = document.getElementsByTagName('img');

for(let i = 0; i < img.length; i++)
img[i].addEventListener('mouseover', mouseOver);

for(let i = 0; i < img.length; i++)
img[i].addEventListener('mouseout', mouseOut);

function mouseOver(){
    this.style.borderColor = 'white';
}

function mouseOut(){
    this.style.borderColor = 'rgba(218, 159, 32, 0.4)';
}

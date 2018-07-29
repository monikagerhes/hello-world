var image;
function upload(){
    // get input
    var fileinput = document.getElementById("finput");
    var filename = fileinput.value;
    // alert displaying text
    alert("You chose: " + filename + "!");

    // create a new SimpleImage
    image = new SimpleImage(fileinput);
    // get canvas
    var canvas = document.getElementById("can");
    // draw the image on the canvas
    image.drawTo(canvas);
}

function makeGray(){
    for(var pixel of image.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
    
}
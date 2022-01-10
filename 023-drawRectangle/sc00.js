window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.rect(50, 50, 200, 150);
    context.stroke();
    //Similar to drawing a line, we need to call the stroke function to draw the rectangle.
};
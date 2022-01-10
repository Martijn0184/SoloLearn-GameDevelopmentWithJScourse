window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    //this is getContext is to acces the drawing functions

    context.moveTo(300, 0);
    context.lineTo(150, 75);
    context.stroke();
};
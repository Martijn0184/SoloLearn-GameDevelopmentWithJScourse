window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    //this is getContext is to acces the drawing functions

    context.moveTo(0, 0);
    context.lineTo(100, 100);
    context.stroke();
};
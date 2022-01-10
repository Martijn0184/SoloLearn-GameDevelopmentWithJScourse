window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    //this is getContext is to acces the drawing functions

    context.moveTo(50, 100);
    context.lineTo(400, 200);
    context.stroke();
};
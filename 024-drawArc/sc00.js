window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.arc(150, 150, 100, 0, 1 * Math.PI);
    /*
    (centerX, centerY, Radius, StartingAngle, endingAngle and optional counterclockwise or clockwise)
    */
    context.stroke();
};
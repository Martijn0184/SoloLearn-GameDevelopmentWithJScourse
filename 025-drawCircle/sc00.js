window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.arc(300, 200, 100, 0, 2 * Math.PI);
    /*
    (centerX, centerY, Radius, StartingAngle, endingAngle and optional counterclockwise or clockwise)
    */
    context.stroke();
};
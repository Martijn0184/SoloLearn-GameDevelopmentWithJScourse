

window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    context.moveTo(0, 0);
    context.lineTo(600, 400);
    context.stroke();
};


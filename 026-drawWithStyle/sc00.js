window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.rect(50, 50, 200, 150);
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.stroke();
};


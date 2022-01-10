window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.rect(50, 50, 200, 150);

    context.fillStyle = "#5e9860";
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = "#af1f1f";
    context.stroke();
};


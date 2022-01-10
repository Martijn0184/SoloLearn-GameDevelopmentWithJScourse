window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.arc(300, 200, 100, 0, 2 * Math.PI);

    context.fillStyle = "#de4646";
    context.fill();

    context.lineWidth = 6;
    context.strokeStyle = "#505050";
    context.stroke();
};


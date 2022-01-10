window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");


    context.beginPath();
    context.rect(50, 50, 300, 200);
    context.fillStyle = "#1775b7";
    context.fill();

    context.beginPath();
    context.arc(300, 200, 100, 0, 2 * Math.PI);
    context.fillStyle = "#de4646";
    context.fill();
};


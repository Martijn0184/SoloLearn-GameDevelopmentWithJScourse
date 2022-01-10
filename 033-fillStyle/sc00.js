window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    context.font = '42px Arial';
    context.fillStyle = "red";
    context.fillText("Hello Text", 200, 100);

};


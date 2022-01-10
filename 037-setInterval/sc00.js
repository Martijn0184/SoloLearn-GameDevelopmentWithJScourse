window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var x = 0;
    var y = 100;

    function draw() {
        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = "red";
        context.fill();

        x += 10;
        if (x >= 600) {
            x = -100;
        }
    }
    setInterval(draw, 50);
}
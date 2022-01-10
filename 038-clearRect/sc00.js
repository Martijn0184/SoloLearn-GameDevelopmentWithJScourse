window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var size = 50;
    var step = 10;

    function draw() {
        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.arc(300, 200, size, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();

        size += step;
        if (size >= 150 || size <= 50) {
            step *= -1;
        }
    }
    setInterval(draw, 100);
}
window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var x = 300;
    var y = 200;

    function draw() {
        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.arc(x, y, 100, 150, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();

        x += 10;
        if (x >= 600) {
            x = -100;
        }
        window.requestAnimationFrame(draw);
    }
    draw();
}
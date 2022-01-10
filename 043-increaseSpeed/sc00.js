window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var x = 300;
    var y = 200;

    var t = Date.now();
    let speed = 100;

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);

        context.font = "25px Arial";
        context.fillStyle = "black";
        context.fillText("FPS: " + fps, 20, 30);

        context.beginPath();
        context.arc(x, y, 100, 150, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();

        x += (speed * timePassed);
        
        if (x >= 600) {
            x = -100;
        }
        window.requestAnimationFrame(draw);
    }
    draw();
}
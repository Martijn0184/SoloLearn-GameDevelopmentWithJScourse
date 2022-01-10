window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    var img = new Image();
    img.src = 'https://blob.sololearn.com/avatars/sololearn.jpg';
    img.onload = function () {
        context.drawImage(img, -100, -100, 1024, 1024);
    };
}


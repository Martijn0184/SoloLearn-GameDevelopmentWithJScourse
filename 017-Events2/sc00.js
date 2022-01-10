window.onload = function () {
    let btn = document.getElementById("myButton");
    btn.onclick = hit;
};

let health = 100;

function hit() {
    health = health / 2;
    if (health <= 1) {
        alert("Game Over!");
    }
    else {
        console.log(health);
    }
}


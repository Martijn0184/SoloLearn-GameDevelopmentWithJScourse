
function hello() {
    alert("Hello, you clicked me...");
}
window.onload = function () {
    let btn = document.getElementById("myButton");
    btn.onclick = hello;
};


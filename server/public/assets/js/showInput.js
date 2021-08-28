document.getElementByClass("inputDisplay").addEventListener("click", showInput);

function showInput() {
    let { display } = document.getElementById("1").style;
    if (display == "none") {
        display = "initial";
    } else {
        display = "none";
    }
}
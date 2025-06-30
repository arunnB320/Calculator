let isShown = false;
function appendValue(val) {
    const display = document.getElementById("display");
    if (isShown) {
        if ("0123456789.(".includes(val)) {
            display.value += val;
        } else {
            display.value += val;
        }
        isShown = false;
    } else {
        display.value += val;
    }
}
function Clear() {
    document.getElementById("display").value = "";
}

function deletLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
// Equal Logic
function Equal() {
    const display = document.getElementById("display");
    try {
        const result = math.evaluate(display.value);
        display.value = result;
        isShown = true;

    } catch (error) {
        alert("Invalid Expression")
    }
}


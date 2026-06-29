function displayTime() {

    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // AM or PM
    let period = h >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    h = h % 12;

    if (h == 0) {
        h = 12;
    }

    // Add leading zeros
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("clock").innerHTML =
        h + ":" + m + ":" + s + " " + period;
}

// Show time immediately
displayTime();

// Update every second
setInterval(displayTime, 1000);
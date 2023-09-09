function displayTime() {
    var dataTime = new Date();
    var hrs = dataTime.getHours();
    var min = dataTime.getMinutes();
    var sec = dataTime.getSeconds();
    var session = document.getElementById("session");

    if (hrs >= 12) {
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs <= 9) {
        hrs = `0` + hrs
    }
    if (min <= 9) {
        min = `0` + min
    }
    if (sec <= 9) {
        sec = `0` + sec
    }

    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10)
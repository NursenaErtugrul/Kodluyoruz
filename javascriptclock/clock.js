function askName() {
    var name = prompt("What is your name?");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var weekdayNumber = date.getDay();

    var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var weekdayName = arrayOfWeekdays[weekdayNumber]

    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    var time = hours + ":" + minute + ":" + second + " " + weekdayName;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

askName();
showTime();
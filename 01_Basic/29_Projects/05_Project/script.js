const heading = document.getElementById("heading");
const headingDay = document.getElementById("day");
const headingDate = document.getElementById("date");

setInterval(() => {
    const digitalClock = new Date();

    heading.textContent = digitalClock.toLocaleTimeString();

    headingDay.textContent = digitalClock.toLocaleDateString("en-US", {
        weekday: "long",
    });

    headingDate.textContent = digitalClock.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

}, 1000);
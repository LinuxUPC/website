function updateDateTime() {
  const dateTimeElement = document.getElementById("top_datetime");
  const now = new Date();

  // Diría que las fechas de Ubuntu salen más o menos así
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = now.getDate();
  const month = months[now.getMonth()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  dateTimeElement.textContent = `${day} ${month} ${hours}:${minutes}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();

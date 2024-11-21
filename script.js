function countdown() {
    const thanksgivingDate = new Date("November 28, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeDifference = thanksgivingDate - now;
  
    if (timeDifference <= 0) {
      document.getElementById("countdown").innerHTML = "<h2>Happy Thanksgiving!</h2>";
      return;
    }
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  }
  
  setInterval(countdown, 1000);
  
function updateCountdown() {
  const christmas = new Date(new Date().getFullYear(), 11, 25).getTime();
  const now = new Date().getTime();
  const distance = christmas - now;

  // If Christmas has passed, use next year's Christmas
  if (distance < 0) {
    const nextYear = new Date().getFullYear() + 1;
    const nextChristmas = new Date(nextYear, 11, 25).getTime();
    const newDistance = nextChristmas - now;
    
    const days = Math.floor(newDistance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((newDistance % (1000 * 60)) / 1000);

    updateDisplay(days, hours, minutes, seconds);
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateDisplay(days, hours, minutes, seconds);
  }
}

function updateDisplay(days, hours, minutes, seconds) {
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
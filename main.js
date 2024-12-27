// Snow effect
function createSnowflakes() {
  const snowContainer = document.querySelector('.snow-container');
  const snowflakeCount = 50;

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Random properties for each snowflake
    const size = Math.random() * 5 + 2;
    const startPosition = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startPosition}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.animationDuration = `${duration}s`;

    snowContainer.appendChild(snowflake);
  }
}

// Christmas countdown
function updateCountdown() {
  const christmas = new Date(new Date().getFullYear(), 11, 25).getTime();
  const now = new Date().getTime();
  const distance = christmas - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Form handling
document.getElementById('wishForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const wish = e.target.querySelector('input').value;
  alert('Your Christmas wish has been sent to Santa! 🎅');
  e.target.reset();
});

// Initialize
createSnowflakes();
setInterval(updateCountdown, 1000);
updateCountdown();
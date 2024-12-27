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

// Initialize snow effect
createSnowflakes();
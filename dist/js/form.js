// Form handling
document.getElementById('wishForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const wish = e.target.querySelector('input').value;
  alert('Your Christmas wish has been sent to Santa! 🎅');
  e.target.reset();
});
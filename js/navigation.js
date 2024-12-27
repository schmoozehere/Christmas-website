// Handle navigation for the "Explore the Magic" button
document.querySelector('.cta-button').addEventListener('click', () => {
    const section = document.querySelector('.activities');
    section.scrollIntoView({ behavior: 'smooth' });
});
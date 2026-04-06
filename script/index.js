const toggleBtn = document.getElementById('toggle-dark');
const links = document.querySelectorAll('.links a');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// hover effect
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.letterSpacing = '1px';
    });

    link.addEventListener('mouseout', () => {
        link.style.letterSpacing = 'normal';
    });
});

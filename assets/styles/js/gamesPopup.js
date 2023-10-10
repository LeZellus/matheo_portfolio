const listItems = document.querySelectorAll('.list-item');
const popups = document.querySelectorAll('.popup');
const closePopups = document.querySelectorAll('.close-popup');
const backgroundOverlay = document.querySelector('.background-overlay');

listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const content = e.currentTarget.getAttribute('data-content');
        const popup = document.querySelector(`.popup[data-content="${content}"]`);
        popup.style.bottom = '0'; // Définir la propriété "bottom" sur 0 pour activer la transition
        document.body.style.overflow = 'none';
        setTimeout(() => {
            popup.classList.add('bottom-0');
            backgroundOverlay.classList.remove("hidden")
            // Déclencher la transition de glissement
        }, 10);
    });
});

closePopups.forEach((closePopup) => {
    closePopup.addEventListener('click', () => {
        document.body.style.overflow = 'auto';
        const popup = closePopup.closest('.popup');
        popup.classList.remove('bottom-0'); // Retirer la classe "show" pour masquer la popup
        popup.style.bottom = '-100%'; // Définir la propriété "bottom" sur -100% pour activer la transition de retour
        backgroundOverlay.classList.add("hidden")
    });
});


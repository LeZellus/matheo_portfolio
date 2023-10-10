document.addEventListener('DOMContentLoaded', function () {
    const smoothLinks = document.querySelectorAll('.smooth');

    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Retirer la classe "active" de tous les liens "smooth"
            smoothLinks.forEach(smoothLink => {
                smoothLink.classList.remove('active');
            });

            link.classList.add('active'); // Ajouter la classe "active" à l'élément cliqué

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

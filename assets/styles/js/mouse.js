document.addEventListener('mousemove', (event) => {
    if (Math.random() < 0.8) {
        return;
    }

    const colorsArray = [
        "#9ca3aF",
        "#5eead4",
        "#4b5563",
        // Ajoutez d'autres couleurs au besoin
    ];

    const randomIndex = Math.floor(Math.random() * colorsArray.length);

    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        document.body.appendChild(circle);

        const dx = Math.random() - 0.5;
        const dy = Math.random() - 0.5;
        const size = Math.random() * 8 + 1;

        // Ajustez les coordonnées de la souris en fonction du défilement de la page
        const mouseX = event.clientX + window.scrollX;
        const mouseY = event.clientY + window.scrollY;

        circle.style.left = `${mouseX}px`;
        circle.style.top = `${mouseY}px`;
        circle.style.backgroundColor = colorsArray[randomIndex];
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        circle.style.setProperty('--dx', dx);
        circle.style.setProperty('--dy', dy);

        setTimeout(() => {
            circle.remove();
        }, 500);
    }
});

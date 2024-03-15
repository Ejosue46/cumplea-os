document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('contenedor-de-fuegos-artificiales'); // Corregido

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        container.appendChild(firework);

        const animationDuration = Math.random() * 2 + 1;
        const startPositionX = Math.random() * window.innerWidth;
        const startPositionY = window.innerHeight;

        firework.style.left = startPositionX + 'px';
        firework.style.bottom = startPositionY + 'px';

        setTimeout(() => {
            firework.style.opacity = 1;
            firework.style.transform = `translateY(-${startPositionY}px)`;
        }, 10);

        setTimeout(() => {
            firework.remove();
        }, animationDuration * 1000);
    }

    function launchFireworks() {
        setInterval(createFirework, 100);
    }

    launchFireworks();


    document.getElementById("openCartaBtn").addEventListener("click", function() {
        window.location.href = "carta.html";
    });
});

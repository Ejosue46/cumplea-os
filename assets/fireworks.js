document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('fireworks-container');

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
const fuegosArtificiales = document.getElementById("fuegos-artificiales");

function crearFuegoArtificial() {
  const fuegoArtificial = document.createElement("div");
  fuegoArtificial.classList.add("fuego-artificial");

  // Posición aleatoria
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  fuegoArtificial.style.left = `${x}%`;
  fuegoArtificial.style.top = `${y}%`;

  // Color aleatorio
  const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  fuegoArtificial.style.backgroundColor = color;

  fuegosArtificiales.appendChild(fuegoArtificial);

  setTimeout(() => {
    fuegoArtificial.remove();
  }, 2000);
}

setInterval(crearFuegoArtificial, 100);

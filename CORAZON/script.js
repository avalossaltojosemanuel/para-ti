// Función para generar la noche estrellada
function crearEstrellas() {
    const contenedorEstrellas = document.querySelector('.stars');
    const numeroDeEstrellas = 120; 

    for (let i = 0; i < numeroDeEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('star');

        // Posición aleatoria en la pantalla (X y Y) en porcentajes
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Tamaño aleatorio para que unas se vean más lejos que otras (entre 1px y 3px)
        const tamano = Math.random() * 2 + 1;

        // Retraso aleatorio en la animación para que no parpadeen todas al mismo tiempo
        const retrasoAnimacion = Math.random() * 3;

        // Aplicar los estilos directamente al elemento creado
        estrella.style.left = `${x}%`;
        estrella.style.top = `${y}%`;
        estrella.style.width = `${tamano}px`;
        estrella.style.height = `${tamano}px`;
        estrella.style.setProperty('--delay', `${retrasoAnimacion}s`);

        // Meter la estrella al contenedor
        contenedorEstrellas.appendChild(estrella);
    }
}

// Ejecutar la función en cuanto cargue la página
crearEstrellas();




// Array de mensajes que quieres que aparezcan
const mensajes = [
    "Esta cancion me recuerda mucho a ti 🎵",
    "Cada segundo de mi vida es mejor si tu estas ⏳💖",
    "Eres la Estrella que le da Luz a mi Existencia 💫",
    "Ni todo el cielo estrellado brilla tanto como tu sonrisa 💫👁️‍🗨️",
    "Mi mundo era oscuro hasta que llegaste a iluminarlo 🌙💖",
    "Contigo el universo entero tiene sentido 🪐✨",
    "Eres el Cuento del que no quiero saber el Final 🎬✨",
    "Eres mi pensamiento favorito 🤔❤️",
    "Contigo el mundo es mejor 🌍",
    "Eres mi canción favorita en repetición infinita 🔁🎵",
    "El tiempo se detiene cuando estoy a tu lado ⏳💞",
    "Tu voz es la melodía que alegra todos mis días 🎶❤️",
    "Cada latido de mi corazón lleva tu nombre 💓🥁",
    "Contigo el reloj corre más rápido, pero dura para siempre 🕰️✨",
];

const heart = document.getElementById('main-heart');
const container = document.getElementById('messages-container');
const audio = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');

// 1. Lógica del Reproductor de Música
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
});

// 2. Lógica para generar los mensajes al presionar el corazón
heart.addEventListener('click', () => {
    // Seleccionar una frase aleatoria
    const fraseAleatoria = mensajes[Math.floor(Math.random() * mensajes.length)];

    // Crear el elemento de la tarjeta
    const card = document.createElement('div');
    card.classList.add('message-card');
    card.innerText = fraseAleatoria;

    // Obtener el centro de la pantalla (donde está el corazón)
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    // Generar ligeras variaciones para que no queden todos exactamente uno encima de otro
    const offsetX = (Math.random() - 0.5) * 400; // Desplazamiento horizontal
    const offsetY = (Math.random() - 0.5) * 300; // Desplazamiento vertical
    const rotacionAleatoria = (Math.random() - 0.5) * 35; // Ángulo entre -17.5 y 17.5 grados

    // Posicionar la tarjeta en el centro modificado
    card.style.left = `${x + offsetX}px`;
    card.style.top = `${y + offsetY}px`;
    
    // Pasamos la rotación como una variable CSS personalizada
    card.style.setProperty('--rotacion', `${rotacionAleatoria}deg`);

    // Añadir al contenedor
    container.appendChild(card);

    // Opcional: Si no quieres que se sature la pantalla infinitamente, 
    // puedes removerlos después de unos segundos, o dejarlos acumulados como en el video.
    setTimeout(() => card.remove(), 5000); 
});
const preguntas = [
    {
        texto: "Pregunta 1: ¿Cómo prefieres pasar tu tiempo libre?",
        opciones: [
            { texto: "Leyendo un libro", peso: 1 },
            { texto: "Saliendo con amigos", peso: 2 },
            { texto: "Haciendo deporte", peso: 3 }
        ]
    },
    {
        texto: "Pregunta 2: ¿Cuál es tu ambiente de trabajo ideal?",
        opciones: [
            { texto: "Un lugar tranquilo y solitario", peso: 1 },
            { texto: "Un ambiente colaborativo con algunos colegas", peso: 2 },
            { texto: "Un lugar dinámico con mucha interacción", peso: 3 }
        ]
    },
    {
        texto: "Pregunta 3: ¿Cómo te sientes en una fiesta?",
        opciones: [
            { texto: "Prefiero quedarme en un rincón y observar", peso: 1 },
            { texto: "Me gusta conversar con algunas personas", peso: 2 },
            { texto: "Me encanta estar en el centro de la atención", peso: 3 }
        ]
    },
    {
        texto: "Pregunta 4: ¿Cómo tomas decisiones?",
        opciones: [
            { texto: "Después de mucha reflexión", peso: 1 },
            { texto: "Consultando con algunos amigos", peso: 2 },
            { texto: "Sigo mi instinto", peso: 3 }
        ]
    },
    {
        texto: "Pregunta 5: ¿Qué tipo de vacaciones prefieres?",
        opciones: [
            { texto: "Un retiro tranquilo en la naturaleza", peso: 1 },
            { texto: "Un viaje cultural", peso: 2 },
            { texto: "Unas vacaciones llenas de aventuras", peso: 3 }
        ]
    }
];

let preguntaActual = 0;
let puntuacion = 0;

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById('pregunta-texto').textContent = pregunta.texto;
    const dropdown = document.getElementById('respuesta-dropdown');
    dropdown.innerHTML = '<option value="">Seleccione una opción</option>';

    pregunta.opciones.forEach((opcion, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index + 1;
        optionElement.textContent = opcion.texto;
        dropdown.appendChild(optionElement);
    });
}

function siguientePregunta() {
    const dropdown = document.getElementById('respuesta-dropdown');
    const respuesta = dropdown.value;

    if (respuesta) {
        puntuacion += preguntas[preguntaActual].opciones[respuesta - 1].peso;
        preguntaActual++;

        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
    } else {
        alert("Por favor, seleccione una opción.");
    }
}

function mostrarResultado() {
    let personalidad;
    if (puntuacion <= 5) {
        personalidad = "Introvertido";
    } else if (puntuacion <= 10) {
        personalidad = "Equilibrado";
    } else {
        personalidad = "Extrovertido";
    }

    document.getElementById('pregunta-container').style.display = 'none';
    document.getElementById('resultado-texto').textContent = `Tu personalidad es: ${personalidad}`;
    document.getElementById('resultado-container').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', (event) => {
    mostrarPregunta();
});

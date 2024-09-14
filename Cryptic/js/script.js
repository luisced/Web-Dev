let selectedCircle = null;
let rotateInterval = null; // Para almacenar el ID del intervalo

document.addEventListener("DOMContentLoaded", () => {
    // Distribuir letras en cada círculo
    distributeLetters('circle1', 6);
    distributeLetters('circle2', 8);
    distributeLetters('circle3', 10);
    distributeLetters('circle4', 12);
    distributeLetters('circle5', 14);

    // Añadir eventos de clic a todos los círculos
    addCircleClickEvent('circle1');
    addCircleClickEvent('circle2');
    addCircleClickEvent('circle3');
    addCircleClickEvent('circle4');
    addCircleClickEvent('circle5');

    // Añadir eventos a los botones de rotación
    const rotateLeftBtn = document.getElementById('rotate-left-btn');
    const rotateRightBtn = document.getElementById('rotate-right-btn');

    addRotationButtonEvents(rotateLeftBtn, -5); // Rotar a la izquierda (-1 grado)
    addRotationButtonEvents(rotateRightBtn, 5); // Rotar a la derecha (1 grado)
});

// Distribuir letras uniformemente alrededor del círculo
function distributeLetters(circleId, letterCount) {
    const circle = document.getElementById(circleId);
    const lettersContainer = circle.querySelector('.letters');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = alphabet.substring(0, letterCount).split('');

    const radius = circle.offsetWidth / 2;
    const angleStep = 360 / letterCount;

    letters.forEach((letter, index) => {
        const angle = index * angleStep;
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        letterElement.innerText = letter;

        const x = radius * Math.cos((angle - 90) * Math.PI / 180);
        const y = radius * Math.sin((angle - 90) * Math.PI / 180);

        letterElement.style.transform = `translate(${x}px, ${y}px)`; // No se aplica rotación a las letras
        lettersContainer.appendChild(letterElement);
    });
}

// Añadir evento de clic a cada círculo para hacerlo seleccionable
function addCircleClickEvent(circleId) {
    const circle = document.getElementById(circleId);
    circle.addEventListener('click', () => {
        selectedCircle = circle;  // Establecer el círculo seleccionado
        circle.style.borderColor = 'red';  // Cambiar color del borde para indicar selección
        // Quitar el color de borde de otros círculos
        const allCircles = document.querySelectorAll('.circle');
        allCircles.forEach((c) => {
            if (c !== circle) {
                c.style.borderColor = 'black';
            }
        });
    });
}

// Rotar el círculo seleccionado por un grado dado
function rotate(degree) {
    if (selectedCircle) {
        const currentRotation = selectedCircle.style.transform.match(/rotate\(([-\d]+)deg\)/);
        let currentAngle = currentRotation ? parseInt(currentRotation[1]) : 0;

        // Añadir el nuevo grado a la rotación actual
        let newRotation = currentAngle + degree;

        // Normalizar el ángulo entre 0 y 360 grados
        newRotation = normalizeAngle(newRotation);

        selectedCircle.style.transform = `rotate(${newRotation}deg)`;

        // Verificar la alineación de todos los círculos después de la rotación
        checkAlignment();
    } else {
        alert('Por favor, selecciona un círculo haciendo clic en él.');
    }
}

// Normalizar el ángulo a un valor entre 0 y 360
function normalizeAngle(angle) {
    return ((angle % 360) + 360) % 360; // Normalizar el ángulo al rango de 0 a 360 grados
}

// Función para añadir eventos a los botones de rotación
function addRotationButtonEvents(button, degree) {
    let intervalTime = 200; // Tiempo inicial entre rotaciones (ms)

    button.addEventListener('mousedown', () => {
        // Rotar inmediatamente
        rotate(degree);

        // Iniciar rotación continua
        rotateInterval = setInterval(() => {
            rotate(degree);
            if (intervalTime > 50) {
                intervalTime -= 10; // Aumentar la velocidad disminuyendo el tiempo de intervalo
                clearInterval(rotateInterval);
                rotateInterval = setInterval(() => {
                    rotate(degree);
                }, intervalTime);
            }
        }, intervalTime);
    });

    button.addEventListener('mouseup', () => {
        clearInterval(rotateInterval);
        intervalTime = 200; // Restablecer el tiempo de intervalo
    });

    button.addEventListener('mouseleave', () => {
        clearInterval(rotateInterval);
        intervalTime = 200; // Restablecer el tiempo de intervalo
    });

    // Soporte para dispositivos táctiles
    button.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevenir el comportamiento táctil predeterminado
        rotate(degree);

        rotateInterval = setInterval(() => {
            rotate(degree);
            if (intervalTime > 50) {
                intervalTime -= 10;
                clearInterval(rotateInterval);
                rotateInterval = setInterval(() => {
                    rotate(degree);
                }, intervalTime);
            }
        }, intervalTime);
    });

    button.addEventListener('touchend', () => {
        clearInterval(rotateInterval);
        intervalTime = 200;
    });
}

// Verificar si todos los círculos están correctamente alineados y redirigir en caso de éxito
function checkAlignment() {
    let allCorrect = true;

    // Definir los rangos de ángulos para cada círculo
    const angleRanges = {
        circle1: {min: 15, max: 25},   // Rango de 15 a 25 grados
        circle2: {min: 340, max: 360}, // Rango que cruza 360 grados
        circle3: {min: 75, max: 85},
        circle4: {min: 215, max: 225},
        circle5: {min: 275, max: 285},
    };

    // Función auxiliar para verificar si un ángulo está dentro de un rango
    function isAngleInRange(angle, range) {
        if (range.min <= range.max) {
            // Rango normal, no cruza 360 grados
            return angle >= range.min && angle <= range.max;
        } else {
            // Rango que cruza 360 grados
            return angle >= range.min || angle <= range.max;
        }
    }

    // Función auxiliar para obtener la letra alineada con la línea roja
    function getAlignedLetter(circle) {
        const letters = circle.querySelectorAll('.letter');
        let closestLetter = null;
        let minDistance = Infinity;

        const lineElement = document.getElementById('linea');
        const lineRect = lineElement.getBoundingClientRect();
        const lineY = lineRect.top + lineRect.height / 2;

        letters.forEach((letter) => {
            const letterRect = letter.getBoundingClientRect();
            const letterY = letterRect.top + letterRect.height / 2;
            const distance = Math.abs(letterY - lineY);

            if (distance < minDistance) {
                minDistance = distance;
                closestLetter = letter;
            }
        });

        return closestLetter;
    }

    // Función auxiliar para verificar cada círculo
    function checkCircleAlignment(circleId, range) {
        const circle = document.getElementById(circleId);
        const currentRotation = parseInt(circle.style.transform.match(/rotate\((-?\d+)deg\)/)?.[1] || 0);
        const normalizedRotation = normalizeAngle(currentRotation);

        const isAligned = isAngleInRange(normalizedRotation, range);

        // Obtener la letra alineada con la línea roja
        const alignedLetter = getAlignedLetter(circle);

        if (alignedLetter) {
            if (isAligned) {
                // Cambiar el color de la letra a verde si está correctamente alineada
                alignedLetter.style.color = 'green';
            } else {
                // Restaurar el color original si no está correctamente alineada
                alignedLetter.style.color = 'black';
            }
        }

        if (!isAligned) {
            allCorrect = false;
            console.log(`${circleId} no está correctamente alineado. Actual: ${normalizedRotation} grados.`);
        } else {
            console.log(`${circleId} está correctamente alineado en el rango ${range.min}-${range.max} grados.`);
        }
    }

    // Verificar cada círculo usando los rangos de ángulos
    checkCircleAlignment('circle1', angleRanges.circle1);
    checkCircleAlignment('circle2', angleRanges.circle2);
    checkCircleAlignment('circle3', angleRanges.circle3);
    checkCircleAlignment('circle4', angleRanges.circle4);
    checkCircleAlignment('circle5', angleRanges.circle5);

    // Redirigir si todos los círculos están correctamente alineados
    if (allCorrect) {
        alert('¡Todos los círculos están correctamente alineados!');
        window.location.href = "/success.html";
    }
}

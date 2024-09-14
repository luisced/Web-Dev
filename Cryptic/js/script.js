let selectedCircle = null;

document.addEventListener("DOMContentLoaded", () => {
    // Distribute letters in each circle
    distributeLetters('circle1', 6);
    distributeLetters('circle2', 8);
    distributeLetters('circle3', 10);
    distributeLetters('circle4', 12);
    distributeLetters('circle5', 14);

    // Add click event listeners to all circles
    addCircleClickEvent('circle1');
    addCircleClickEvent('circle2');
    addCircleClickEvent('circle3');
    addCircleClickEvent('circle4');
    addCircleClickEvent('circle5');

    // Add click event listener to the document to deselect circle when clicking elsewhere
    document.addEventListener('click', (event) => {
        // If a circle is selected and the click is outside a circle, deselect the circle
        if (selectedCircle && !event.target.closest('.circle')) {
            selectedCircle.style.borderColor = '';  // Reset the border color
            selectedCircle = null;  // Deselect the circle
        }
    });
});

// Distribute letters evenly around the circle
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

        letterElement.style.transform = `translate(${x}px, ${y}px)`; // No rotation applied to the letter
        lettersContainer.appendChild(letterElement);
    });
}

// Add click event listener to each circle to make it selectable
function addCircleClickEvent(circleId) {
    const circle = document.getElementById(circleId);
    circle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering the document click listener
        // Deselect any previously selected circle
        if (selectedCircle) {
            selectedCircle.style.borderColor = ''; // Reset the border color of previously selected circle
        }
        selectedCircle = circle;  // Set the newly selected circle
        circle.style.borderColor = 'red';  // Change border color to indicate selection
    });
}

// Rotate the selected circle by a given degree
function rotate(degree) {
    if (selectedCircle) {
        const currentRotation = selectedCircle.style.transform.match(/rotate\(([-\d]+)deg\)/);
        let currentAngle = currentRotation ? parseInt(currentRotation[1]) : 0;

        // Add the new degree to the current rotation
        const newRotation = currentAngle + degree;
        selectedCircle.style.transform = `rotate(${newRotation}deg)`;

        // Check the alignment of all circles after rotation
        checkAlignment();
    } else {
        alert('Please select a circle by clicking on it.');
    }
}

// Normalize the angle to a value between 0 and 360
function normalizeAngle(angle) {
    return ((angle % 360) + 360) % 360; // Normalize the angle to a range of 0 to 360 degrees
}

// Check if all circles are correctly aligned based on valid angles and redirect to success
function checkAlignment() {
    let allCorrect = true;

    // Valid angles for circle1
    const validAnglesCircle1 = [380, 20, -340, -700];
    const normalizedValidAnglesCircle1 = validAnglesCircle1.map(normalizeAngle); // Normalize angles for circle1

    // Valid angles for circle2
    const validAnglesCircle2 = [340, -10, -370, -730];
    const normalizedValidAnglesCircle2 = validAnglesCircle2.map(normalizeAngle); // Normalize angles for circle2

    // Valid angles for circle3
    const validAnglesCircle3 = [440, 80, -280, -640];
    const normalizedValidAnglesCircle3 = validAnglesCircle3.map(normalizeAngle); // Normalize angles for circle3

    // Valid angles for circle4
    const validAnglesCircle4 = [580, 220, -140, -500];
    const normalizedValidAnglesCircle4 = validAnglesCircle4.map(normalizeAngle); // Normalize angles for circle4

    // Valid angles for circle5
    const validAnglesCircle5 = [640, 280, -80, -440, -800];
    const normalizedValidAnglesCircle5 = validAnglesCircle5.map(normalizeAngle); // Normalize angles for circle5

    // Check alignment for circle1
    const circle1 = document.getElementById('circle1');
    const currentRotationCircle1 = parseInt(circle1.style.transform.match(/rotate\((-?\d+)deg\)/)?.[1] || 0);
    const normalizedCurrentRotationCircle1 = normalizeAngle(currentRotationCircle1);

    if (!normalizedValidAnglesCircle1.includes(normalizedCurrentRotationCircle1)) {
        allCorrect = false;
        console.log(`Circle1 is not correctly aligned. Current: ${normalizedCurrentRotationCircle1} degrees.`);
    } else {
        console.log(`Circle1 is correctly aligned at ${normalizedCurrentRotationCircle1} degrees.`);
    }

    // Check alignment for circle2
    const circle2 = document.getElementById('circle2');
    const currentRotationCircle2 = parseInt(circle2.style.transform.match(/rotate\((-?\d+)deg\)/)?.[1] || 0);
    const normalizedCurrentRotationCircle2 = normalizeAngle(currentRotationCircle2);

    if (!normalizedValidAnglesCircle2.includes(normalizedCurrentRotationCircle2)) {
        allCorrect = false;
        console.log(`Circle2 is not correctly aligned. Current: ${normalizedCurrentRotationCircle2} degrees.`);
    } else {
        console.log(`Circle2 is correctly aligned at ${normalizedCurrentRotationCircle2} degrees.`);
    }

    // Check alignment for circle3
    const circle3 = document.getElementById('circle3');
    const currentRotationCircle3 = parseInt(circle3.style.transform.match(/rotate\((-?\d+)deg\)/)?.[1] || 0);
    const normalizedCurrentRotationCircle3 = normalizeAngle(currentRotationCircle3);

    if (!normalizedValidAnglesCircle3.includes(normalizedCurrentRotationCircle3)) {
        allCorrect = false;
        console.log(`Circle3 is not correctly aligned. Current: ${normalizedCurrentRotationCircle3} degrees.`);
    } else {
        console.log(`Circle3 is correctly aligned at ${normalizedCurrentRotationCircle3} degrees.`);
    }

    // Check alignment for circle4
    const circle4 = document.getElementById('circle4');
    const currentRotationCircle4 = parseInt(circle4.style.transform.match(/rotate\((-?\d+)deg\)/)?.[1] || 0);
    const normalizedCurrentRotationCircle4 = normalizeAngle(currentRotationCircle4);

    if (!normalizedValidAnglesCircle4.includes(normalizedCurrentRotationCircle4)) {
        allCorrect = false;
        console.log(`Circle4 is not correctly aligned. Current: ${normalizedCurrentRotationCircle4} degrees.`);
    } else {
        console.log(`Circle4 is correctly aligned at ${normalizedCurrentRotationCircle4} degrees.`);
    }

    // Check alignment for circle5
    const circle5 = document.getElementById('circle5');
    const currentRotationCircle5 = parseInt(circle5.style.transform.match(/rotate\((-?\d+)deg\)/)?.[1] || 0);
    const normalizedCurrentRotationCircle5 = normalizeAngle(currentRotationCircle5);

    if (!normalizedValidAnglesCircle5.includes(normalizedCurrentRotationCircle5)) {
        allCorrect = false;
        console.log(`Circle5 is not correctly aligned. Current: ${normalizedCurrentRotationCircle5} degrees.`);
    } else {
        console.log(`Circle5 is correctly aligned at ${normalizedCurrentRotationCircle5} degrees.`);
    }

    // Redirect to success page if all circles are correctly aligned
    if (allCorrect) {
        window.location.href = "/succes.html";
    }
}

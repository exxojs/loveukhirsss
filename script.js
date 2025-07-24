let mood = '';
let activity = '';

document.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', function() {
        mood = this.getAttribute('data-mood');
        document.getElementById('moodQuestion').classList.add('hidden');
        document.getElementById('activityQuestion').classList.remove('hidden');

        // Play the background music
        const audio = new Audio('Eternal Life.mp3');
        audio.play();
    });
});

document.querySelectorAll('.activity-btn').forEach(button => {
    button.addEventListener('click', function() {
        activity = this.getAttribute('data-activity');
        displayMessage();
    });
});

function displayMessage() {
    let message = '';

    if (mood === 'happy') {
        message = "Yayyyy im so glad you're feeling bright bab!! Let's " + activity.replace(/_/g, ' ') + " together when u're free okiee <3";
    } else if (mood === 'sad') {
        message = "Awww. I'm sorry I or someone, something, made you feel cloudy today T^T Mhmm how about we " + activity.replace(/_/g, ' ') + " to spark you again as we always do?";
    } else {
        message = "It's okay to feel neutral sometimes. A nice " + activity.replace(/_/g, ' ') + " might just do the trick!";
    }

    document.getElementById('message').innerText = message;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('questions').classList.add('hidden');
    document.getElementById('welcome').classList.add('hidden'); // Hide the welcome message
    startConfetti(); // Start the confetti effect
}
function startConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#00bfff', '#32cd32', '#ffd700'];
    const container = document.getElementById('container');
    
    for (let i = 0; i < 100; i++) {
        createConfettiPiece(container, colors);
    }
}

const buttons = document.querySelectorAll('.mood-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        const audio = new Audio(soundFile);
        audio.play();
    });
});

function createConfettiPiece(container, colors) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.opacity = Math.random() + 0.5;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    container.appendChild(confetti);
    
    animateConfetti(confetti);
}

function animateConfetti(confetti) {
    const fallDuration = Math.random() * 2 + 3; // Random duration between 3s and 5s
    const fallDistance = Math.random() * 100 + 50; // Random distance to fall

    confetti.animate([
        { transform: `translateY(0)` },
        { transform: `translateY(${fallDistance}vh)` }
    ], {
        duration: fallDuration * 1000,
        easing: 'ease-in',
        fill: 'forwards'
    });

    // Remove the confetti piece after it falls
    setTimeout(() => {
        confetti.remove();
    }, fallDuration * 1000);
}
const text = document.getElementById("text");

const message = `Connecting to Instagram...

Searching Birthday Database...

Found: PRIYA (Bulbul)

Verifying Identity...

ACCESS GRANTED...
`;

let textIndex = 0;

function typeWriter() {
    if (textIndex < message.length) {
        text.innerHTML += message.charAt(textIndex);
        textIndex++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

const loadingBar = document.getElementById("loadingBar");
const percent = document.getElementById("percent");

let progress = 0;

function startLoading() {

    if (progress <= 100) {

        loadingBar.style.width = progress + "%";
        percent.innerHTML = progress + "%";

        progress++;

        setTimeout(startLoading, 35);

    } else {

        document.getElementById("terminal").style.display = "none";

        document.getElementById("accessScreen").style.display = "flex";

        setTimeout(() => {

            document.getElementById("accessScreen").style.display = "none";

            document.getElementById("birthdayScreen").style.display = "block";

            document.body.style.overflow = "auto";

        }, 2000);

    }

}

setTimeout(startLoading, 3000);

function createHeart() {

    const hearts = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    const duration = Math.random() * 3 + 3;

    heart.style.animationDuration = duration + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}

setInterval(createHeart, 300);

function createBalloon() {

    const balloons = document.getElementById("balloons");

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * window.innerWidth + "px";

    const duration = Math.random() * 3 + 6;

    balloon.style.animationDuration = duration + "s";

    balloons.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, duration * 1000);

}

setInterval(createBalloon, 900);

const letterMessage = `Dear Bulbul ❤️,

Happy Birthday!!

You are one of the sweetest, kindest and most beautiful people I know.

May your smile always stay the same.

May all your dreams come true.

Stay happy forever.

From your Bunny 🐰❤️`;

let letterIndex = 0;

const letterText = document.getElementById("letterText");
function typeLetter() {

    if (letterIndex < letterMessage.length) {

        letterText.innerHTML += letterMessage.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 40);

    }

}

const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("click", () => {

    document.getElementById("birthdayScreen").style.display = "none";

     const letterScreen = document.getElementById("letterScreen");
     const envelope = document.getElementById("envelope");
     const letter = document.getElementById("letter");

     letterScreen.style.display = "flex";

     envelope.style.display = "flex";

      letter.style.display = "none";

     setTimeout(() => {

     envelope.style.display = "none";

     letter.style.display = "block";

     letterText.innerHTML = "";

     letterIndex = 0;

    typeLetter();

}, 2500);
});

// Optional: Press ESC to close the letter
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        document.getElementById("letterScreen").style.display = "none";

        document.getElementById("birthdayScreen").style.display = "block";

        document.body.style.overflow = "auto";

    }

});

// Optional: Click outside the letter to close it
const letterScreen = document.getElementById("letterScreen");
const letterBox = document.getElementById("letter");

letterScreen.addEventListener("click", (event) => {

    if (event.target === letterScreen) {

        letterScreen.style.display = "none";

        document.getElementById("birthdayScreen").style.display = "block";

        document.body.style.overflow = "auto";

    }

});
// =========================
// FIREWORKS
// =========================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;

    for (let i = 0; i < 60; i++) {

        particles.push({
            x,
            y,
            radius: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360},100%,60%)`,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 5 + 2,
            alpha: 1
        });

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        p.alpha -= 0.015;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.alpha <= 0) {
            particles.splice(index, 1);
        }

    });

    ctx.globalAlpha = 1;

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(createFirework, 1000);
// =========================
// STARS
// =========================

const stars = document.getElementById("stars");

for(let i = 0; i < 180; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    star.style.animationDuration = (Math.random() * 2 + 1) + "s";

    stars.appendChild(star);

}
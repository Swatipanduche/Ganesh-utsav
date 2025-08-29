
const timer = document.getElementById("timer");
const targetDate = new Date("Aug 29, 2025 23:59:59").getTime();

if (timer) {
  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      timer.innerHTML = "🙏 गणपती बाप्पा मोरया 🙏<br>🎉 Happy Ganesh Chaturthi 🎉";
      timer.classList.add("blink");
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}


const aartiAudio = document.querySelector("#aarti audio");
const plate = document.querySelector(".aarti-plate img");
if (aartiAudio && plate) {
  aartiAudio.addEventListener("play", () => plate.classList.add("rotate"));
  aartiAudio.addEventListener("pause", () => plate.classList.remove("rotate"));
  aartiAudio.addEventListener("ended", () => plate.classList.remove("rotate"));
}

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.width = (6 + Math.random() * 8) + "px";
  petal.style.height = (4 + Math.random() * 6) + "px";
  petal.style.animationDuration = (4 + Math.random() * 3) + "s";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 6000);
}
setInterval(createPetal, 200);


const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");
const answers = { q1: 'A', q2: 'B', q3: 'B', q4: 'C', q5: 'B' };

if (quizForm) {
  quizForm.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    for (let i = 1; i <= 5; i++) {
      const userAns = quizForm[`q${i}`].value;
      if (userAns === answers[`q${i}`]) score++;
    }
    resultDiv.innerHTML = `Your Score: ${score}/5 <br> ${score === 5 ? "🌟 Excellent! Bappa is proud of you! 🌟" :
        score >= 3 ? "👍 Good job! Keep learning!" :
          "🙂 Keep trying, you'll get better!"
      }`;
  });
}

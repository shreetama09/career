const questions = [
  { question: "Do you enjoy solving technical problems?", type: "Engineering" },
  { question: "Do you like helping others with empathy?", type: "Healthcare" },
  { question: "Do you enjoy creativity and visual design?", type: "Arts" },
  { question: "Do financial trends interest you?", type: "Finance" }
];

let current = 0;
let score = {};

function loadQuestion() {
  document.getElementById("question").textContent = questions[current].question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = `
    <button onclick="recordAnswer('${questions[current].type}')" class='btn'>Yes</button>
    <button onclick="recordAnswer('skip')" class='btn'>Skip</button>
  `;
}

function recordAnswer(type) {
  if (type !== 'skip') {
    score[type] = (score[type] || 0) + 1;
  }
  current++;
  current < questions.length ? loadQuestion() : showResults();
}

function showResults() {
  const topCareer = Object.entries(score).sort((a,b)=>b[1]-a[1])[0];
  window.location.href = `results.html?career=${topCareer[0]}`;
}

loadQuestion();
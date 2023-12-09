function generateTask() {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  return { num1, num2, answer: num1 * num2 };
}

let score = 0;
let currentTask;

function updatePage() {
  document.getElementById('score').textContent = `Загальний рахунок: ${score}`;
  document.getElementById('task').textContent = `Завдання: ${currentTask.num1} * ${currentTask.num2}`;
  document.getElementById('answerInput').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  const userAnswer = document.getElementById('answerInput').value.trim();

  if (!userAnswer) {
    document.getElementById('result').textContent = 'Введіть відповідь.';
  } else if (!/^\d+$/.test(userAnswer)) {
    document.getElementById('result').textContent = 'Введіть коректне число.';
  } else {
    const parsedAnswer = parseInt(userAnswer, 10);
    if (parsedAnswer === currentTask.answer) {
      score += 1;
      document.getElementById('result').textContent = 'Правильно!';
    } else {
      document.getElementById('result').textContent = `Неправильно. Правильна відповідь: ${currentTask.answer}`;
    }
    updatePage();
  }
}

document.getElementById('nextBtn').addEventListener('click', function() {
  currentTask = generateTask();
  updatePage();
});

document.getElementById('checkBtn').addEventListener('click', checkAnswer);

currentTask = generateTask();
updatePage();

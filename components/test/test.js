let userName = prompt("Ismingizni kiriting: ")
		// Define the questions and answers
        const questions = [	
    {	question: `Abdulla Qodiriyning qaysi asari "O'tkan kunlar" nomi ostida mashhur?`,		
        answers: [ "Olovli yollar", "Yolg'izginam", "O'tkan kunlar", "Mehrobdan Chayon"],
		correctAnswer: "O'tkan kunlar"
	},
	{
		question: "Xalq o'quvchilari, maktab o'quvchilari uchun yozilgan ilk kitob?",
		answers: ["Hamzanama", "Bobur shoh yulduzi", "Hayratul-abror", "Doston va Farhod"],
		correctAnswer: "Hamzanama"
	},
	{
		question: "Sadriddin Ayni qaysi davlat adabiyotining muqaddimasini yozgan? ",
		answers: [ "O'zbekiston adabiyoti tarixi","Xitoy adabiyoti tarixi","Sharq adabiyoti tarixi","Dunyo adabiyoti tarixi"],
		correctAnswer: "O'zbekiston adabiyoti tarixi"
	},
	{
		question: `"Dunyo yangiliklari" gazetasining asoschisi kim?`,
		answers: ["Abdulla Avloniy", "Sadriddin Ayni", "Mirzo Ulug'bek", "Abdulla Qodiriy"],
		correctAnswer: "Abdulla Qodiriy"
	},
	{
		question: `"G'ofir go'zal" adli dostonchi kimga tegishli?`,
		answers: ["Erkin Vohidov", "Fitrat", "Sadriddin Ayni", "Chulpon"],
		correctAnswer: "Fitrat"
	},
	{
		question: `Alisher Navoiyning qaysi asari "Lison ut-Tayr"ga o'xshash?`,
		answers: ["Munojatnoma", "Farhod va Shirin", "Sabai Sayyor", "Xamsa"],
		correctAnswer: "Xamsa"
        
	}
];

// Define variables
let currentQuestion = 0;
let score = 0;
const timer = document.getElementById("timer");

// Start the quiz
function startQuiz() {
	showQuestion();
	startTimer();
}

// Show the current question and answers
function showQuestion() {
	const questionText = document.getElementById("question-text");
	const answers = document.querySelectorAll(".answer");

	questionText.innerText = questions[currentQuestion].question;

	for (let i = 0; i < answers.length; i++) {
		answers[i].innerText = questions[currentQuestion].answers[i];
		answers[i].addEventListener("click", checkAnswer);
	}
}

// Check the answer and move to the next question
function checkAnswer(event) {
	const selectedAnswer = event.target.innerText;

	if (selectedAnswer === questions[currentQuestion].correctAnswer) {
		score++;
	}

	currentQuestion++;

	if (currentQuestion < questions.length) {
		showQuestion();
	} else {
		finishQuiz();
	}
}

// Start the timer and display the remaining time
function startTimer() {
	let timeLeft = 200;

	const timerInterval = setInterval(() => {
		timeLeft--;
		timer.innerText = `Time left: ${timeLeft} seconds`;

		if (timeLeft === 0) {
			clearInterval(timerInterval);
			currentQuestion++;

			if (currentQuestion < questions.length) {
				showQuestion();
				startTimer();
			} else {
				finishQuiz();
			}
		}
	}, 1000);
}

// Finish the quiz and display the score
function finishQuiz() {
	const quizContainer = document.getElementById("quiz-container");
	quizContainer.innerHTML = `
		<h2>Test tugadi ${userName} !</h2>
		<p>Sizning topgan to'g'ri javoblaringiz  umumiy ${questions.length} tadan ${score} ta. <br> Keyingi urinishlaringizga omad </p>
	`;
}

startQuiz();



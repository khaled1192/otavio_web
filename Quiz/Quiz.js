
document.getElementById("submitQuiz").addEventListener("click", () => {
    const answer = document.querySelector("#quizForm select").value;
    const result = document.getElementById("quizResult");
    if (answer === "correct") {
        result.textContent = "إجابة صحيحة! 👏";
        result.style.color = "green";
    } else {
        result.textContent = "إجابة خاطئة، حاول مرة أخرى! ❌";
        result.style.color = "red";
    }
});

 
 const submitButton = document.getElementById("submitQuiz");
 const resultText = document.getElementById("quizResult");
 const selectElement = document.getElementById("quizSelect");

 submitButton.addEventListener("click", () => {
     const answer = selectElement.value;
     if (answer === "correct") {
         resultText.textContent = "إجابة صحيحة! 🎉 أحسنت!";
         resultText.style.color = "green";
     } else {
         resultText.textContent = "إجابة خاطئة. حاول مرة أخرى! ❌";
         resultText.style.color = "red";
     }
 });
 document.getElementById("submitQuiz").addEventListener("click", () => {
    const form = document.getElementById("quizForm");
    const answers = form.querySelectorAll("select");
    let score = 0;

    answers.forEach((select) => {
        if (select.value === "correct") {
            score++;
        }
    });

    const result = document.getElementById("quizResult");
    result.textContent = `لقد أجبت بشكل صحيح على ${score} من ${answers.length} أسئلة!`;
    result.style.color = score === answers.length ? "green" : "orange";
});

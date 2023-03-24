const form = document.getElementById("grade-form");
const englishInput = document.getElementById("english");
const mathsInput = document.getElementById("maths");
const physicsInput = document.getElementById("physics");
const chemistryInput = document.getElementById("chemistry");
const computerInput = document.getElementById("computer");
const totalOutput = document.getElementById("total");
const averageOutput = document.getElementById("average");
const gradeOutput = document.getElementById("grade");

form.addEventListener("submit", calculateGrade);

function calculateGrade(event) {
  event.preventDefault();

  const english = parseInt(englishInput.value) || 0;
  const maths = parseInt(mathsInput.value) || 0;
  const physics = parseInt(physicsInput.value) || 0;
  const chemistry = parseInt(chemistryInput.value) || 0;
  const computer = parseInt(computerInput.value) || 0;

  const total = english + maths + physics + chemistry + computer;
  const average = total / 5;

  if (english <= 35 || maths <= 35 || physics <= 35 || chemistry <= 35 || computer <= 35) {
    totalOutput.textContent = "FAIL";
    averageOutput.textContent = "0%";
    gradeOutput.textContent = "F";
    return;
  }

  totalOutput.textContent = total;
  averageOutput.textContent = average.toFixed(2) + "%";

  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  gradeOutput.textContent = grade;
}


const inputFields = document.querySelectorAll(".subject-input");

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function () {
    const value = parseInt(this.value);

    if (isNaN(value) || value > 100 || value < 0) {
      alert("Please enter a number between 0 and 100.");
      this.value = "";
    }
  });
}

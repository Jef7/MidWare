function calculateProgress(progress, goal) {
  let progressValue = progress.value;
  let goalValue = goal.value;
  let currentProgressResult = 0;
  const higherLimit = 99.99;

  if (!inputEmptyValidator(progress, goal)) {
    currentProgressResult =
      Math.round((progressValue / goalValue) * 100 * 100) / 100;

    restultText(currentProgressResult);
    if (currentProgressResult >= 100) currentProgressResult = higherLimit;

    showBarValidator();
    progressBar(currentProgressResult);
    clearInputs(progress, goal);
  }
}

function clearInputs(input1, input2) {
  input1.value = "";
  input2.value = "";
}

function progressBar(currentProgressResult) {
  let progressBar = document.getElementById("progress-bar");
  let quantity = currentProgressResult;
  let progress = 0;

  while (progress <= quantity) {
    progress++;
    progressBar.style.width = progress + "%";
  }
}

function inputEmptyValidator(inputProgress, inputGoal) {
  const inputProgressValue = inputProgress.value;
  const inputGoalValue = inputGoal.value;
  const errorStyle = "0.17em solid #DC0015";
  let errorStatusProgress = false;
  let errorStatusGoal = false;

  if (inputProgressValue === "") {
    inputProgress.style.border = errorStyle;
    errorStatusProgress = true;
  } else {
    inputProgress.style.border = "none";
  }
  if (inputGoalValue === "") {
    inputGoal.style.border = errorStyle;
    errorStatusGoal = true;
  } else {
    inputGoal.style.border = "none";
  }

  return errorStatusProgress || errorStatusGoal;
}

function showBarValidator() {
  let checkbox = document.getElementById("show-bar");
  let barElement = document.getElementById("container-bar").style;

  checkbox.checked
    ? (barElement.display = "block")
    : (barElement.display = "none");
}

function restultText(result) {
  let resultElement = document.getElementById("result");

  result > 100
    ? (resultElement.innerHTML = "You Are Awesomme")
    : (resultElement.innerHTML = result + "%");
}

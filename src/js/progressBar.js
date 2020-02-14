function calculateProgress(progress, goal) {
  let progressValue = progress.value;
  let goalValue = goal.value;
  let currentProgress = 0;
  const higherLimit = 99.99;

  if (!inputEmptyValidator(progress, goal)) {
    currentProgress = (progressValue / goalValue) * 100;

    if (currentProgress >= 100) currentProgress = higherLimit;

    progressBar(currentProgress);
    clearInputs(progress, goal);
  }
}

// esto se puede mejorar con rest operator
function clearInputs(input1, input2) {
  input1.value = "";
  input2.value = "";
}

function progressBar(currentProgress) {
  let progressBar = document.getElementById("progress-bar");
  let quantity = currentProgress;
  let progress = 0;

  while (progress <= quantity) {
    progress++;
    progressBar.style.width = progress + "%";
  }
}

function inputEmptyValidator(inputId1, inputId2) {
  const inputValue1 = inputId1.value;
  const inputValue2 = inputId2.value;
  const errorStyle = "0.17em solid #DC0015";
  let errorStatus1 = false;
  let errorStatus2 = false;

  if (inputValue1 === "") {
    inputId1.style.border = errorStyle;
    errorStatus1 = true;
  } else {
    inputId1.style.border = "none";
  }
  if (inputValue2 === "") {
    inputId2.style.border = errorStyle;
    errorStatus2 = true;
  } else {
    inputId2.style.border = "none";
  }

  return errorStatus1 || errorStatus2;
}

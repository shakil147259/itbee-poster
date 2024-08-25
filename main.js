// handle header input
const headerInput = document.getElementById("hIn");
headerInput.addEventListener("input", function () {
  const headerText = headerInput.value;
  const headerOutput = document.getElementById("hOut");
  headerOutput.textContent = headerText;
});

function headerColorChange(color) {
  const headerOutput = document.getElementById("hOut");
  headerOutput.style.color = color;
}

function headerTextAlignChange(textAlign) {
  const headerOutput = document.getElementById("hOutContainer");
  headerOutput.style.textAlign = textAlign;
}

//handle file input
const fileInput = document.getElementById("file-upload");
const imagePreview = document.getElementById("imgOut");
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
});

//handle description input
const descriptionInput = document.getElementById("descIn");
descriptionInput.addEventListener("input", function () {
  const descriptionText = descriptionInput.value;
  const descriptionOutput = document.getElementById("descOut");
  descriptionOutput.textContent = descriptionText;
});

// show hide input section
function showHideInput(inputSectionId, buttonId) {
  const inputSection = document.getElementById(inputSectionId);
  const controlBtn = document.getElementById(buttonId);
  if (inputSection.style.display === "none") {
    inputSection.style.display = "block";
    controlBtn.style.background = "#3b82f6";
    controlBtn.style.color = "#fff";
  } else {
    inputSection.style.display = "none";
    controlBtn.style.background = "#fff";
    controlBtn.style.color = "#000";
    controlBtn.style.border = "1px solid #3b82f6";
  }
}

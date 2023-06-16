// Get the form and the main div
const form = document.querySelector("#resume-form");
const mainDiv = document.querySelector(".resume-preview");

// Add an event listener for the input change
form.addEventListener("input", updateMainDiv);

function updateMainDiv() {
  // Clear the main div
  mainDiv.innerHTML = '';

  // Create a new resume section
  const resumeSection = document.createElement("div");
  resumeSection.className = 'resume-section';

  // Get form data
  const formData = new FormData(form);

  // Loop through form data and append to main div
  for (let [key, value] of formData.entries()) {
    let p = document.createElement("p");
    p.innerText = `${key}: ${value}`;
    resumeSection.appendChild(p);
  }

  // Append the new resume section to the main div
  mainDiv.appendChild(resumeSection);
}

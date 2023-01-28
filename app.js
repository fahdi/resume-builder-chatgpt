// Get form elements
const form = document.getElementById("contact-form");
if (form) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Listen for form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var formData = new URLSearchParams();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("subject", subject.value);
    formData.append("message", message.value);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    // Send data to endpoint
    fetch("http://localhost:3000/submit-form", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // do something with the response
      });
  });
}

// array of image URLs
// Get the container element where the images will be displayed
const contactImgContainer = document.getElementById("image-container");

if (contactImgContainer) {
  console.log(contactImgContainer);
  console.log("Aaa ja re");
  // Create an array of image URLs
  const images = [
    "/images/contact-monkey-2.webp",
    "/images/contact-monkey.webp",
    "/images/contact-monkey-3.webp",
  ];

  // Function to randomly select an image from the array
  const randomImage = () => {
    // Generate a random index between 0 and the number of images in the array
    const randomIndex = Math.floor(Math.random() * images.length);
    // Return the image URL at the randomly generated index
    return images[randomIndex];
  };

  console.log(randomImage);

  // Set the container's background image to a random image on page load
  contactImgContainer.style.backgroundImage = `url(${randomImage()})`;
}

// Get form elements
const ResumeForm = document.querySelector("#resume-form");
const addWorkExpBtn = document.querySelector("#add-work-experience");
const addEduBtn = document.querySelector("#add-education");
const addSkillBtn = document.querySelector("#add-skill");

console.log(ResumeForm);
// Work experience counter
let workExpCounter = 0;

// Education counter
let eduCounter = 0;

// Skills counter
let skillCounter = 0;

// Add work experience input fields
addWorkExpBtn.addEventListener("click", () => {
  workExpCounter++;
  const workExpContainer = document.querySelector(".work-exp-container");
  const newWorkExpInput = document.createElement("div");
  newWorkExpInput.innerHTML = `    
    <hr/>
    <div class="work-experience__item">
              <label for="company-name${workExpCounter}">Company Name</label>
              <input type="text" id="company-name-${workExpCounter}" name="company-name-${workExpCounter}">
              <label for="job-title-${workExpCounter}">Job Title</label>
              <input type="text" id="job-title-${workExpCounter}" name="job-title-${workExpCounter}">
              <label for="start-date-${workExpCounter}">Start Date</label>
              <input type="date" id="start-date-${workExpCounter}" name="start-date-${workExpCounter}">
              <label for="end-date-${workExpCounter}">End Date</label>
              <input type="date" id="end-date-${workExpCounter}" name="end-date-${workExpCounter}">
              <label for="job-description-${workExpCounter}">Job Description</label>
              <textarea id="job-description-${workExpCounter}" name="job-description-${workExpCounter}"></textarea>
    </div>
  `;
  workExpContainer.insertBefore(newWorkExpInput, addWorkExpBtn);
});

// Add education input fields
addEduBtn.addEventListener("click", () => {
  eduCounter++;
  const eduContainer = document.querySelector(".education-container");
  const newEduInput = document.createElement("div");
  newEduInput.innerHTML = `  
  <hr/>  
    <div class="education__item">
              <label for="school-name-${eduCounter}">School Name</label>
              <input type="text" id="school-name-${eduCounter}" name="school-name-${eduCounter}">
              <label for="degree-${eduCounter}">Degree</label>
              <input type="text" id="degree-${eduCounter}" name="degree-${eduCounter}">
              <label for="field-of-study-${eduCounter}">Field of Study</label>
              <input type="text" id="field-of-study-${eduCounter}" name="field-of-study-${eduCounter}">
              <label for="graduation-date-${eduCounter}">Graduation Date</label>
              <input type="date" id="graduation-date-${eduCounter}" name="graduation-date-${eduCounter}">
            </div> 
  `;
  eduContainer.insertBefore(newEduInput, addEduBtn);
});

// Add skills input fields
addSkillBtn.addEventListener("click", () => {
  skillCounter++;
  const skillContainer = document.querySelector(".skills-container");
  console.log(skillContainer);
  const newSkillInput = document.createElement("div");
  newSkillInput.innerHTML = `
  <hr/>
    <label for="skill-${skillCounter}">Skill ${skillCounter}</label>
    <input type="text" id="skill-${skillCounter}" name="skill-${skillCounter}">
  `;
  skillContainer.insertBefore(newSkillInput, addSkillBtn);
});

// Handle form submission
ResumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(ResumeForm);

  // Convert form data to JSON
  const jsonData = JSON.stringify(Object.fromEntries(formData));

  // Save data to Local Storage
  localStorage.setItem("resume-data", jsonData);

  // Show message
  alert("Resume data saved to Local Storage!");
});

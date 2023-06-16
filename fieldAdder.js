// Define counters
let workExpCounter = 0;
let eduCounter = 0;
let skillCounter = 0;

// Get Add Field buttons
const addWorkExpBtn = document.querySelector("#add-work-experience");
const addEduBtn = document.querySelector("#add-education");
const addSkillBtn = document.querySelector("#add-skill");

// Add work experience input fields
addWorkExpBtn.addEventListener("click", () => {
  workExpCounter++;
  const workExpContainer = document.querySelector(".work-exp-container");
  addField(workExpContainer, workExpCounter, 'work', addWorkExpBtn);
});

// Add education input fields
addEduBtn.addEventListener("click", () => {
  eduCounter++;
  const eduContainer = document.querySelector(".education-container");
  addField(eduContainer, eduCounter, 'education', addEduBtn);
});

// Add skills input fields
addSkillBtn.addEventListener("click", () => {
  skillCounter++;
  const skillContainer = document.querySelector(".skills-container");
  addField(skillContainer, skillCounter, 'skill', addSkillBtn);
});

function addField(container, counter, type, btn) {
  const newInput = document.createElement("div");
  newInput.innerHTML = createHTML(type, counter);
  container.insertBefore(newInput, btn);
}

function createHTML(type, counter) {
  switch(type) {
    case 'work':
      return createWorkHTML(counter);
    case 'education':
      return createEduHTML(counter);
    case 'skill':
      return createSkillHTML(counter);
  }
}

function createWorkHTML(counter) {
  return `    
    <hr/>
    <div class="work-experience__item">
              <label for="company-name${counter}">Company Name</label>
              <input type="text" id="company-name-${counter}" name="company-name-${counter}">
              <label for="job-title-${counter}">Job Title</label>
              <input type="text" id="job-title-${counter}" name="job-title-${counter}">
              <label for="start-date-${counter}">Start Date</label>
              <input type="date" id="start-date-${counter}" name="start-date-${counter}">
              <label for="end-date-${counter}">End Date</label>
              <input type="date" id="end-date-${counter}" name="end-date-${counter}">
              <label for="job-description-${counter}">Job Description</label>
              <textarea id="job-description-${counter}" name="job-description-${counter}"></textarea>
    </div>
  `;
}

function createEduHTML(counter) {
  return `  
  <hr/>  
    <div class="education__item">
              <label for="school-name-${counter}">School Name</label>
              <input type="text" id="school-name-${counter}" name="school-name-${counter}">
              <label for="degree-${counter}">Degree</label>
              <input type="text" id="degree-${counter}" name="degree-${counter}">
              <label for="field-of-study-${counter}">Field of Study</label>
              <input type="text" id="field-of-study-${counter}" name="field-of-study-${counter}">
              <label for="graduation-date-${counter}">Graduation Date</label>
              <input type="date" id="graduation-date-${counter}" name="graduation-date-${counter}">
            </div> 
  `;
}

function createSkillHTML(counter) {
  return `
  <hr/>
    <label for="skill-${counter}">Skill</label>
    <input type="text" id="skill-${counter}" name="skill-${counter}">
  `;
}

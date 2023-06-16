// Get form elements
const ResumeForm = document.querySelector('#resume-form')

// Handle form submission
ResumeForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(ResumeForm)

  // Convert form data to JSON
  const jsonData = JSON.stringify(Object.fromEntries(formData))

  // Save data to Local Storage
  localStorage.setItem('resume-data', jsonData)

  // Show message
  alert('Resume data saved to Local Storage!')
})

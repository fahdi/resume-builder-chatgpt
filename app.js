// Get form elements
const form = document.getElementById("contact-form");
if(form.length > 0) {
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
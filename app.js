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

  console.log(contactImgContainer);
  if (contactImgContainer) {
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

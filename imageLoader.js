// Get the container element where the images will be displayed
const contactImgContainer = document.getElementById('image-container')

if (contactImgContainer) {
  // Create an array of image URLs
  const images = [
    '/images/contact-monkey-2.webp',
    '/images/contact-monkey.webp',
    '/images/contact-monkey-3.webp',
  ]

  // Function to randomly select an image from the array
  const randomImage = () => {
    // Generate a random index between 0 and the number of images in the array
    const randomIndex = Math.floor(Math.random() * images.length)
    // Return the image URL at the randomly generated index
    return images[randomIndex]
  }

  // Set the container's background image to a random image on page load
  contactImgContainer.style.backgroundImage = `url(${randomImage()})`
}

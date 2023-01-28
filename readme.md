# Resume Builder

This is a web application that allows users to create, edit and download professional resumes. It was built using modern web technologies such as HTML, CSS, JavaScript, Node.js, Express, MongoDB, and various APIs. The project was initiated by fahdi and was assisted by ChatGPT, an AI language model by OpenAI.

![Web/AI based Resume Builder](images/resume-builder.jpeg)

## Features

* Create and edit a resume using a user-friendly interface
* Download the resume in PDF format
* Submit the resume data to a MongoDB database
* Integrate with Slack, HubSpot, and Discord to send the resume data
* Deployed on the web for easy access

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express
* MongoDB
* Slack API
* HubSpot API
* Discord API
* ChatGPT API (by OpenAI)

## Contributors

* fahdi
* ChatGPT (by OpenAI)

## Installation

- Clone the repo to your local machine `git clone https://github.com/[username]/resume-builder.git`
- Run npm install to install the dependencies `npm install`
- Create a .env file and add your environment variables (e.g. MongoDB URI, Slack API key, etc.)
touch `.env`
- Run npm start to start the application `npm start`

## Usage

- Visit http://localhost:3000 to access the resume builder
- Fill out the form to create your resume
- Click on the download button to download the resume in PDF format
- Click on the submit button to send the resume data to the database and the integrated platforms

## Note

Don't forget to add the CORS middleware to the server

## License

MIT

Thanks for using our project!

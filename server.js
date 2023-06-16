const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const dbUri = require('./db-uri')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Connect to MongoDB
// Replace with your actual connection string

// Connect to MongoDB when server starts
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err))

mongoose.set('strictQuery', false);

// Create a MongoDB model for the contact form
const Contact = mongoose.model('Contact', {
  name: String,
  email: String,
  subject: String,
  message: String,
})

// Use body-parser to parse the form data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Handle form submission
app.post('/submit-form', (req, res) => {
  // Create a new contact document
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  })

  // Save the contact document to the database
  contact.save((err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send('Form submitted successfully!')
    }
  })
})

// Start the server
app.listen(9000, () => {
  console.log('Server listening on port 9000')
})

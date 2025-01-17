const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// Add a new contact
app.post('/contacts', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send({
      message: 'Contact added successfully',
      contact,
    });
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      res.status(400).send({ message: 'Email already exists. Please use a unique email.' });
    } else {
      res.status(500).send({ message: 'An error occurred while adding the contact.' });
    }
  }
});

// Get all contacts
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({
      message: 'Contacts fetched successfully',
      contacts,
    });
  } catch (error) {
    res.status(500).send({ message: 'An error occurred while fetching contacts.' });
  }
});

// Search contacts by name or email
app.get('/contacts/search', async (req, res) => {
  try {
    const { query } = req.query;
    const contacts = await Contact.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
      ],
    });
    res.status(200).send({
      message: 'Contacts fetched successfully',
      contacts,
    });
  } catch (error) {
    res.status(500).send({ message: 'An error occurred while searching contacts.' });
  }
});

// Start the server
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

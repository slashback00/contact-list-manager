import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5002/contacts');
      setContacts(response.data.contacts || []); // Adjust based on backend response
    } catch (error) {
      console.error('Error fetching contacts:', error.response || error.message);
      alert('Error fetching contacts. Please try again later.');
    }
  };

  const addContact = async () => {
    if (!name.trim() || !email.trim()) {
      alert('Name and email are required.');
      return;
    }
    try {
      await axios.post('http://localhost:5002/contacts', { name, email });
      fetchContacts();
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding contact:', error.response || error.message);
      if (error.response && error.response.data.message) {
        alert(error.response.data.message); // Show backend error message if available
      } else {
        alert('Error adding contact. Please try again.');
      }
    }
  };

  const searchContacts = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/contacts/search?query=${searchQuery}`);
      setContacts(response.data.contacts || []); // Adjust based on backend response
    } catch (error) {
      console.error('Error searching contacts:', error.response || error.message);
      alert('Error searching contacts. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Contact List Manager</h1>

      <div>
        <h2>Add Contact</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addContact}>Add</button>
      </div>

      <div>
        <h2>Search Contacts</h2>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={searchContacts}>Search</button>
      </div>

      <div>
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

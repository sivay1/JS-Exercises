import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function UserForm({ onAddUser, onUpdateUser, editUser }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    company: '',
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editUser) {
      setFormData({
        name: editUser.name,
        username: editUser.username,
        email: editUser.email,
        city: editUser.address.city,
        company: editUser.company.name,
      });
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const user = {
      id: editUser ? editUser.id : Date.now(), // reuse id if editing
      name: formData.name,
      username: formData.username,
      email: formData.email,
      address: { city: formData.city },
      company: { name: formData.company },
    };

    if (editUser) {
      onUpdateUser(user); // update existing
    } else {
      onAddUser(user); // add new
    }

    // Clear form after add/update
    setFormData({
      name: '',
      username: '',
      email: '',
      city: '',
      company: '',
    });
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, p: 2, flexWrap: 'wrap', backgroundColor: "white"}}>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <TextField label="Username" name="username" value={formData.username} onChange={handleChange} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
      <TextField label="City" name="city" value={formData.city} onChange={handleChange} />
      <TextField label="Company" name="company" value={formData.company} onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>
        {editUser ? 'Update User' : 'Add User'}
      </Button>
    </Box>
  );
}
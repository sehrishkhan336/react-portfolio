import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.background.dark, // Use your preferred color here
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (formData[name] === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailBlur = (e) => {
    const { value } = e.target;
    const isValidEmail = validateEmail(value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      email: !isValidEmail,
    }));
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.field}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={formErrors.name}
          helperText={formErrors.name && 'This field is required'}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.field}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleEmailBlur}
          error={formErrors.email}
          helperText={formErrors.email ? 'Invalid email address' : ''}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.field}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={formErrors.message}
          helperText={formErrors.message && 'This field is required'}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}

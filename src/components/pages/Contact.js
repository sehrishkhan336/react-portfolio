import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, CardMedia } from '@mui/material';
import { Container } from '@mui/system';
import BackgroundImage from '../../images/background.jpg';

export default function Contact() {
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
        <Container>
        
                <Card sx={{ width: '100wh', height: '100vh', display: 'flex'}}>
                    
                    <CardMedia sx={{ width: '100wh', height: '100vh' }}>
                        <img
                            src={BackgroundImage}
                            alt="contact" 
                            style={{ width: '100%', height: '100%' }}
                            />
                    </CardMedia>

                    <CardContent sx={{ maxWidth: 600, marginTop: 40,padding: 2, textAlign: 'center' }}>
                       
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: 2 }}
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
                            sx={{ marginBottom: 2 }}
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
                            sx={{ marginBottom: 2 }}
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
                            sx={{ marginTop: 2 }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>

        </Container>
    );
}

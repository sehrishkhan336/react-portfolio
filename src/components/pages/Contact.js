import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { Container } from '@mui/system';

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
            <div style={{ padding: '16px' }}>
                <Card sx={{ maxWidth: 400, margin: '0 auto', marginTop: 4, padding: 2, textAlign: 'center', backgroundColor: theme => theme.palette.background.dark }}>
                    <CardContent>
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
            </div>
        </Container>
    );
}

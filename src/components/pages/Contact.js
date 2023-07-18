import React, { useState } from 'react';
import './Pages.css';
import { faEnvelope, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        if (formData[name] === '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: true
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
            message: ''
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
            email: !isValidEmail
        }));
    };

    return (
        <div className="card">
            <div className="content">
                <div className="tile">
                    <h2 className="title">Contact</h2>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                className={`input ${formErrors.name ? 'is-danger' : ''}`}
                                type="text"
                                placeholder="Text input"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {formErrors.name && <p className="help is-danger">This field is required</p>}
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-right">
                            <input
                                className={`input ${formErrors.email ? 'is-danger' : ''}`}
                                type="email"
                                placeholder="Email input"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={handleEmailBlur}
                            />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            {formErrors.email && (
                                <span className="icon is-small is-right">
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                </span>
                            )}
                        </div>
                        {formErrors.email && <p className="help is-danger">Invalid email address</p>}
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea
                                className={`textarea ${formErrors.message ? 'is-danger' : ''}`}
                                placeholder="Textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            ></textarea>
                        </div>
                        {formErrors.message && <p className="help is-danger">This field is required</p>}
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

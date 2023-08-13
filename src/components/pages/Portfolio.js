import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import tictactoeimage from '../../images/tic-tac-toe.gif';

const Portfolio = () => {
    const projects = [
        {
            title: 'Tic Tac Toe',
            description: 'This is a simple Tic Tac Toe game built with React. It was built as part of the React tutorial.',
            imageSrc: tictactoeimage,
        },
        {
            title: 'Weather Dashboard',
            description:
                'This is a weather dashboard that allows the user to search for a city and see the current weather as well as the 5 day forecast.',
            imageSrc: '../../../images/weather-dashboard.gif',
        },
        {
            title: 'Work Day Scheduler',
            description:
                'This is a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            imageSrc: '../../../images/work-day-scheduler.gif',
        },
        {
            title: 'Password Generator',
            description:
                'This is an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.',
            imageSrc: '../../../images/password-generator.gif', 
        },
        {
            title: 'Code Quiz',
            description:
                'This is a timed coding quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.',
            imageSrc: '../../../images/code-quiz.gif',
        },
        {
            title: 'Note Taker',
            description:
                'This is an application that can be used to write, save, and delete notes. This app runs in the browser and features dynamically updated HTML and CSS powered by a Node.js back end.',
            imageSrc: '../../../images/note-taker.gif',
        },

    ];

    return (
        <Container>
            <div style={{ padding: '16px', marginTop: '20px', width: '100%', height: '100%' }}>
                <div className="card" style={{ padding: '16px', marginTop: '20px' }}>
                    <Grid container spacing={2}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <CardMedia component="img" src={project.imageSrc} alt="Project" sx={{ width: '100%', height: '100%' }} />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </Container>
    );
};

export default Portfolio;

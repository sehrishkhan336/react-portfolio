import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import tictactoeimage from '../../images/tic-tac-toe.gif';
import WeatherDashboardImage from '../../images/weather-dashboard.gif';
import WorkdaySchedulerImage from '../../images/workday-scheduler.gif';
import FoodReviewAppImage from '../../images/splash-image.png';
import RythmixConcertHubImage from '../../images/music-1.gif';
import DocTalkImage from '../../images/doc-talk.gif';

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
            imageSrc: WeatherDashboardImage,
        },
        {
            title: 'Work Day Scheduler',
            description:
                'This is a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            imageSrc: WorkdaySchedulerImage,
        },
        {
            title: 'FineDine Review App',
            description:
                'This Application is a review app. Google Apis are used to locate restaurants and the user can leave a review for the restaurant.',
            imageSrc: FoodReviewAppImage, 
        },
        {
            title: 'Rythmix ConcertHub',
            description:
                'This is a timed coding quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript.',
            imageSrc: RythmixConcertHubImage,
        },
        {
            title: 'DocTalk',
            description:
                'This is a React Application that allows the user to search for a doctor by name or specialty. The user can also chat, email and request a call back from the doctor.',
            imageSrc: DocTalkImage,
        },

    ];

    return (
        <Container>
        <div style={{ padding: '16px', marginTop: '20px', width: '100%' }}>
            <div className="card" style={{ padding: '16px', marginTop: '20px' }}>
                <Grid container spacing={2}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                             <a href={project.projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}></a>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    '&:hover': {
                                        '& .project-details': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    src={project.imageSrc}
                                    alt="Project"
                                    sx={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                    }}
                                />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                    </CardContent>
                                    <div className="project-details" style={{ opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.3s, transform 0.3s' }}>
                                        <Typography variant="h6">{project.title}</Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                    </div>
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

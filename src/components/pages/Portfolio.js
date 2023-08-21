import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
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
            description: 'React Application that allows the user to play tic tac toe.',
            imageSrc: tictactoeimage,
            projectLink: 'https://github.com/sehrishkhan336/tic-tac-toe',
        },
        {
            title: 'Weather Dashboard',
            description:
                'This is a weather dashboard that allows the user to search for a city and see the current weather as well as the 5 day forecast.',
            imageSrc: WeatherDashboardImage,
            projectLink: 'https://github.com/sehrishkhan336/Weather-Dashboard/tree/master',
        },
        {
            title: 'Work Day Scheduler',
            description:
                'This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            imageSrc: WorkdaySchedulerImage,
            projectLink: 'https://github.com/sehrishkhan336/Note-Taker-Aap',
        },
        {
            title: 'FineDine Review App',
            description:
                'This Application is a review app. Google Apis are used to locate restaurants and the user can leave a review for the restaurant.',
            imageSrc: FoodReviewAppImage,
            projectLink: 'https://findine.herokuapp.com/',
        },
        {
            title: 'Rythmix ConcertHub',
            description:
                'An application that allows the user to find concert happening in their area. The user can also search for a specific artist and see their upcoming concerts.',
            imageSrc: RythmixConcertHubImage,
            projectLink: 'https://sehrishkhan336.github.io/Portfolio-Sehrish-Khan/',
        },
        {
            title: 'DocTalk',
            description:
                'This is a React Application that allows the user to search for a doctor by name or specialty. The user can also chat, email and request a call back from the doctor.',
            imageSrc: DocTalkImage,
            projectLink: 'https://doc-talk-1217027d6c32.herokuapp.com/',
        },

    ];
    const handleCardClick = (e, projectLink) => {
        // Prevent the default behavior of the anchor tag
        e.preventDefault();

        // Navigate to the project link
        window.open(projectLink, '_blank');
    };

    return (
        <Container>
            <div style={{ padding: '16px', marginTop: '20px', width: '100%' }}>
                <div className="card" style={{ padding: '16px', marginTop: '40px' }}>
                    <Grid container spacing={2}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                        '&:hover': {
                                            '& .project-link-button': {
                                                opacity: 1,
                                                transform: 'translateY(0)',
                                            },
                                            '& .card-content': {
                                                opacity: 1,
                                                height: 'auto',
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
                                            height: '350px',
                                            objectFit: 'cover',
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => handleCardClick(e, project.projectLink)}
                                    />
                                    <CardContent className="card-content" sx={{ opacity: 0, height: 0, overflow: 'hidden', transition: 'opacity 0.3s, height 0.3s' }}>
                                        <Typography variant="h6" gutterBottom>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                    </CardContent>
                                    <Button
                                        className="project-link-button"
                                        sx={{
                                            opacity: 0,
                                            transform: 'translateY(10px)',
                                            transition: 'opacity 0.3s, transform 0.3s',
                                            alignSelf: 'flex-end',
                                            marginRight: '16px',
                                        }}
                                        onClick={(e) => handleCardClick(e, project.projectLink)}
                                    >
                                        Project Link
                                    </Button>
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

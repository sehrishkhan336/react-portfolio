import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
    gap: theme.spacing(2),
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  projectImage: {
    width: 256,
    height: 256,
    margin: 'auto',
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'Tic Tac Toe',
      description: 'This is a simple Tic Tac Toe game built with React. It was built as part of the React tutorial.',
      imageSrc: 'https://bulma.io/images/placeholders/96x96.png', // Provide actual image source
    },
    // Add more projects here
  ];

  return (
    <div className="card">
      <div className={classes.projectGrid}>
        {projects.map((project, index) => (
          <Card className={classes.projectCard} key={index}>
            <CardMedia className={classes.projectImage} component="img" src={project.imageSrc} alt="Project" />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

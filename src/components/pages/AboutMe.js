import React from 'react';
import { Card, CardContent, Typography, makeStyles, Avatar } from '@mui/material';
import profilePicture from '../../images/Profilepic.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  header: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: '0 auto',
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h4">About Me</Typography>
        </div>

        <div>
          <Avatar alt="Profile" src={profilePicture} className={classes.avatar} />
        </div>

        <div className={classes.content}>
          <Typography variant="body1">
            I am a passionate and driven junior developer currently pursuing Full Stack Web Development certification from UCLA Bootcamp. Although I have also developed a keen understanding of software development principles, algorithms, and data structures; my coursework has exposed me to various development methodologies and tools, enabling me to adapt quickly to new technologies.
          </Typography>

          <br />

          <Typography variant="body1">
            While I may not have professional experience yet, I am constantly improving my skills through personal projects and collaborations with fellow developers. These experiences have allowed me to explore different facets of development and have instilled in me a strong problem-solving mindset.
          </Typography>

          <br />

          <Typography variant="body1">
            As a junior developer, I am eager to contribute my enthusiasm, creativity, and willingness to learn to a collaborative team environment. I am excited to work alongside experienced professionals, absorbing their expertise and applying it to real-world challenges. I am a quick learner and thrive in dynamic, fast-paced settings.
          </Typography>

          <br />

          <Typography variant="body1">
            In addition to my technical skills, I possess excellent communication and teamwork abilities. I believe in effective collaboration and enjoy working with others to achieve common goals. I am open to feedback and constantly seek opportunities to grow and improve as a developer.
          </Typography>

          <br />

          <Typography variant="body1">
            I am passionate about leveraging technology to create innovative solutions and enhance user experiences. I am excited to embark on my professional journey as a junior developer and contribute to impactful projects that make a difference.
          </Typography>

          <br />

          <Typography variant="body1">
            Thank you for taking the time to learn more about me. I look forward to connecting and exploring potential opportunities to grow and contribute to your team.
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

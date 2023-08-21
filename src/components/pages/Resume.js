import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Resume = () => {
  return (
    <Container>
      <div style={{ padding: '16px' }}>
        <Card sx={{ marginTop: '30px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <a href="../../Resume/Resume-Sehrish-Khan" download>
            My Resume
          </a>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              FrontEnd Skills
            </Typography>
            <Typography variant="body1">
              HTML,
              CSS, 
              JavaScript, 
              React, 
              Bootstrap,
              Material UI,
              Bulma,

            </Typography>

            <Typography variant="h6" gutterBottom>
              BackEnd Skills
            </Typography>
            <Typography variant="body1">
              Node.js,
              Express, 
              MongoDB,
              MySQL, 
              APIs, 
              MERN
              GraphQL

            </Typography>
          </CardContent>

        </Card>
      </div>
    </Container>
  );
};

export default Resume;

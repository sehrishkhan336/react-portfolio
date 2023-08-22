import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem } from '@mui/material';
import { Container, ThemeProvider } from '@mui/system';
import ResumeSehrishKhan from '../../Resume/Sehrish-Khan.pdf'
import theme from '../../theme';
import BackgroundImage from '../../images/background.jpg';

const Resume = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>

        <div className="card" style={{ padding: '16px', marginTop: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'contain', backgroundRepeat:'no-repeat' }}>
          
            <Typography variant='h4' gutterBottom style={{ padding: '16px', color: theme.palette.primary.main, marginTop: '60px' }}>Resume</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: '16px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}
              href={ResumeSehrishKhan}
              download
            >
              Download My Resume
            </Button>
            <br />
            <CardContent>
              <Typography variant="h6" gutterBottom style={{ backgroundColor: '#1976d2', padding: '6px', color: 'white', borderRadius: '0.2rem', textAlign: 'left', marginRight: '50rem' }}>
                FrontEnd Skills
              </Typography>
              <List sx={{ textAlign: 'left', paddingLeft: '12px' }}>
                <ListItem>* HTML</ListItem>
                <ListItem>* CSS</ListItem>
                <ListItem>* JavaScript</ListItem>
                <ListItem>* React</ListItem>
                <ListItem>* Bootstrap</ListItem>
                <ListItem>* Material UI</ListItem>
                <ListItem>* Bulma</ListItem>
              </List>
              <Typography variant="h6" gutterBottom style={{ backgroundColor: '#1976d2', padding: '6px', color: 'White', borderRadius: '0.2rem', textAlign: 'left', marginRight: '50rem' }}>
                BackEnd Skills
              </Typography>
              <List sx={{ textAlign: 'left', paddingLeft: '12px' }}>
                <ListItem>* Node.js</ListItem>
                <ListItem>* Express</ListItem>
                <ListItem>* MongoDB</ListItem>
                <ListItem>* MySQL</ListItem>
                <ListItem>* APIs</ListItem>
                <ListItem>* MERN</ListItem>
                <ListItem>* GraphQL</ListItem>
              </List>
            </CardContent>
          </div>

      </Container>
    </ThemeProvider>
  );
};

export default Resume;

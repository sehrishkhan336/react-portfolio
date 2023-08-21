import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem } from '@mui/material';
import { Container, ThemeProvider } from '@mui/system';
import ResumeSehrishKhan from '../../Resume/Sehrish-Khan.pdf'
import theme from '../../theme';

const Resume = () => {
  return (
    <Container>
      <div style={{ padding: '16px' }}>
        <Card sx={{ width: 1100, height: 1200, padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
       
          <Typography variant='h3' gutterBottom style={{ padding: '16px', color: theme.palette.primary.main }}>My Resume</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: '16px' }}
            
            href={ResumeSehrishKhan}
            download
          >
            Download My Resume
          </Button>

          <br />

          <CardContent>
            <Typography variant="h6" gutterBottom style={{ backgroundColor: '#1976d2', padding: '6px', color: 'white', borderRadius: '0.2rem' }}>
              FrontEnd Skills
            </Typography>

            <List>
              <ListItem>* HTML</ListItem>
              <ListItem>* CSS</ListItem>
              <ListItem>* JavaScript</ListItem>
              <ListItem>* React</ListItem>
              <ListItem>* Bootstrap</ListItem>
              <ListItem>* Material UI</ListItem>
              <ListItem>* Bulma</ListItem>
            </List>

            <Typography variant="h6" gutterBottom style={{ backgroundColor: '#1976d2', padding: '6px', color: 'White', borderRadius: '0.2rem' }}>
              BackEnd Skills
            </Typography>
            <List>
              <ListItem>* Node.js</ListItem>
              <ListItem>* Express</ListItem>
              <ListItem>* MongoDB</ListItem>
              <ListItem>* MySQL</ListItem>
              <ListItem>* APIs</ListItem>
              <ListItem>* MERN</ListItem>
              <ListItem>* GraphQL</ListItem>
            </List>
          </CardContent>

          
        </Card>
      </div>
    </Container>
  );
};

export default Resume;

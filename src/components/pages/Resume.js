import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';

const Resume = () => {
  return (
    <Container>
    <div style={{ padding: '16px' }}>
      <Card sx={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <CardContent>
         
          <Typography variant="h6" gutterBottom>
            Experience
          </Typography>
          <Typography variant="body1">
          
          </Typography>

          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1">
        
          </Typography>
        </CardContent>
      </Card>

   
    </div>
    </Container>
  );
};

export default Resume;

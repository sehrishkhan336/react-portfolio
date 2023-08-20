import React from 'react';
import { Card, CardContent, Typography, Avatar, Container } from '@mui/material';
import { styled } from '@mui/system';
import profilePicture from '../../images/Profilepic.jpg';


const CardWrapper = styled(Container)(({ theme }) => ({
  maxWidth: 1100,
  maxHeight: 1100,
  marginTop: theme.spacing(5),
  textAlign: 'center',
}));

const HeaderWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.primary.main,
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(25),
  height: theme.spacing(25),
  margin: '0 auto',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(100),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));

export default function AboutMe() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }} >
      <div>
        <CardWrapper>
          <CardContent >
            <HeaderWrapper>
              <Typography sx={{ marginTop: '2rem' }} variant="h4">About Me</Typography>
            </HeaderWrapper>

            <div>
              <AvatarWrapper alt="Profile" src={profilePicture} />
            </div>

            <ContentWrapper>
              <Typography variant="body1">
                I am a full stack web developer with a background in the project management professional. I have a passion for learning and
                problem solving. 
                <br></br>
                I am a team player and I am always looking for ways to improve myself and my skills. I
                enjoy working with others and I am always looking for ways to help others.
              </Typography>
            </ContentWrapper>
          </CardContent>
        </CardWrapper>
      </div>
    </Container>
  );
}

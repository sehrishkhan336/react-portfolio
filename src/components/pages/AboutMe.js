import React from 'react';
import { Card, CardContent, Typography, Avatar, Container } from '@mui/material';
import { styled } from '@mui/system';
import profilePicture from '../../images/Profilepic.jpg';


const CardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: '1100',
  margin: '0 auto',
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const HeaderWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: '0 auto',
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export default function AboutMe() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '150vh',

        marginTop: '3rem',
      }}
    >
      <div >
        <CardWrapper sx={{ width: '100%', height: '100%' }}>
          <CardContent >
            <HeaderWrapper>
              <Typography variant="h4">About Me</Typography>
            </HeaderWrapper>

            <div>
              <AvatarWrapper alt="Profile" src={profilePicture} />
            </div>

            <ContentWrapper>
              <Typography variant="body1">
                I am a full stack web developer with a background in the medical field. I have a passion for learning and
                problem solving. I am a team player and I am always looking for ways to improve myself and my skills. I
                enjoy working with others and I am always looking for ways to help others.
              </Typography>
            </ContentWrapper>
          </CardContent>
        </CardWrapper>
      </div>
    </Container>
  );
}

import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Card>
        <CardContent>
          {/* Your resume content goes here */}
          <Typography variant="h6" gutterBottom>
            Experience
          </Typography>
          <Typography variant="body1">
            {/* Add your experience details */}
          </Typography>

          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1">
            {/* Add your education details */}
          </Typography>
        </CardContent>
      </Card>

      {/* Add more Card components for different sections */}
    </div>
  );
}

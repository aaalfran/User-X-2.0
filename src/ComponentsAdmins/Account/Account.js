import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import NavbarComponent from '../../Components/navbarComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  useStyles();

  return (
    <>
    < NavbarComponent />
      
      <br></br><br></br>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <ProfileDetails />
          </Grid>
        </Grid>
      </Container>
      </>
  );
};

export default Account;

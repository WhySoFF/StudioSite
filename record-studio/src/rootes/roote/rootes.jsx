import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from "../../pages/home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Account from "../../pages/account";
import useAuth from "../hooks/useAuth";
import PrivateRoute from "../privateRoote";
import GuestRoute from "../guestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Routes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Rooter>
        <Rootes>
            <Route exact path="/">
                <Home />
            </Route>

            <PrivateRoute path="/account">
                <Account />
            </PrivateRoute>

            <GuestRoute path="/login">
                <Login />
            </GuestRoute>
            <GuestRoute path="/registration">
                <Registration />
            </GuestRoute>
        </Rootes>
    </Rooter>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Routes;
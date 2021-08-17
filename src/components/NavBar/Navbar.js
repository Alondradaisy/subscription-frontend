import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

async function Navbar() {
  const classes = useStyles();

  async function logout() {
    try {
      await axios.get("http://localhost:3002/api/users/logout");

      dispatch({
        type: "LOG_OUT",
      });
      Cookies.remove("jwt-cookie");
      props.history.push("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Subscription Signup</Link>
          </Typography>

          <NavLink activeStyle={{ color: "red" }} exact to={navLinkTitleTwo}>
            <Button color="inherit" style={{ color: "white" }}>
              {navLinkDisplayOne}
            </Button>
          </NavLink>

          <NavLink activeStyle={{ color: "red" }} exact t0={navLinkTitleTwo}>
            <Button
              color="inherit"
              style={{ color: white }}
              onClick={() => logoutButton()}
            >
              {navLinkDisplayTwo}
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

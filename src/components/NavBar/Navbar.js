import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import Cookies from "js-cookie";
// ask about this -> import { withRouter } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import CheckAuthCookie from "../hooks/checkAuthCookie";

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

async function Navbar(props) {
  const classes = useStyles();
  const { userLogin } = CheckAuthCookie();

  useEffect(() => {
    userLogin();
  }, []);

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  async function logout() {
    try {
      await axios.get("http://localhost:3000/api/users/logout");

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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

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

  return <div></div>;
}

export default Navbar;

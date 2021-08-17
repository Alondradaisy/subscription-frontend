import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import checkAuthCookie from "../hooks/checkAuthCookie";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Auth(props) {
  const classes = useStyles();

  let isLoginRouter = prop.match.path === "./login";
  let buttonTitle = isLoginRoute ? "Login" : "Sign up";
  let apiURL = isLoginRoute ? "/user/login" : "/users/create-user";
}

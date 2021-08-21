import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  TextField,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import useChangeInputConfig from "../hooks/useInput";
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

  const { doesCookieExist } = checkAuthCookie();

  const [
    { isLoading, response, error, setResponse },
    handleAPICallButtonSubmit,
    isMessageOpen,
    ,
    handleMessageOpen,
    successMessageValue,
  ] = useFetchAPI(apiURL);

  const [
    email,
    handleEmailChange,
    isEmailError,
    emailErrorMessage,
    isEmailDisabled,
    clearEmailInput,
  ] = useChangeInputConfig("email");

  const [
    user,
    handleUsernameChange,
    isUsernameError,
    usernameErrorChange,
    isUsernameDisabled,
    clearUsernameInput,
  ] = useChangeInputConfig("username");

  const [
    password,
    handlePasswordChange,
    isPasswordError,
    usernameErrorMessage,
    isPasswordDisabled,
    clearPasswordInput,
  ] = useChangeInputConfig("password");

  function handleOnSubmit(e) {
    e.preventDefault();

    const user = isLoginRoute
      ? { email, password }
      : { email, username, password };

    handleAPICallButtonSubmit({
      method: "post",
      data: { ...user },
    });
  }
}

//function Alert(props) {}

function errorMessage() {
  return (
    <Snackbar
      open={isMessageOpen}
      autoHideDuration={6000}
      onClose={handleMessageClose}
    >
      <Alert severity="error">{error}</Alert>
    </Snackbar>
  );
}

function successMessageValue() {
  return (
    <Snackbar
      open={isMessageOpen}
      autoHideDuration={6000}
      onClose={handleMessageClose}
    >
      <Alert severity="success">{successMessageValue}</Alert>
    </Snackbar>
  );
}

if (isLoading) {
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  );
}

if (response === "user created") {
  clearEmailInput();
  clearUsernameInput();
  clearPasswordInput();
  setResponse(null);
}

return (
  <Grid container spacing={0} justifyContent="center">
    {successMessageValue && successMessageValue()}
    {error && errorMessage()}
    <form className={classes.root} onSubmit={handleOnSubmit}>
      <Grid item m={6}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          error={isEmailError}
          helperText={emailErrorMessage}
        />
      </Grid>

      {!isLoginRoute && (
        <Grid item m={6}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            error={isUsernameError}
            helperText={usernameErrorMessage}
          />
        </Grid>
      )}
      <Grid item m={6}>
        <TextField
          fullWidth
          label="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          error={isPasswordError}
          helperText={passwordErrorMessage}
        />
      </Grid>

      <Grid style={{ textAlign: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          disabled={
            isLoginRoute
              ? isEmailDisabled || isPasswordDisabled
              : isEmailDisabled || isPasswordDisabled || isUsernameDisabled
          }
        >
          {buttonTitle}
        </Button>
      </Grid>
    </form>
  </Grid>
);

export default Auth;

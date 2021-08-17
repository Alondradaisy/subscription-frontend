import { useContext } from "react";
import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";

import { AuthContext } from "../context/AuthContext";
function CheckAuthCookie() {
  const { dispatch } = useContext(AuthContext);

  function doesCookieExist() {
    const cookie = Cookie.get("jwt-cookie");

    if (cookie) {
      return true;
    } else {
      return false;
    }
  }
}

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import MainRouter from "./MainRouter";

import Loader from "./components/Loader/Loader"; //loading wheel
import AuthContextWrapper from "./context/AuthContext";

function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <AuthContextWrapper>
          <MainRouter />
        </AuthContextWrapper>
      </Router>
    </React.Suspense>
  );
}

export default App;

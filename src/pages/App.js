import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import AppRouter from "../Router";
import Navigation from "../components/Navigation";

function App() {
  return (
    <>
      <Router>
        <AppRouter/>
      </Router>
    </>
  );
}

export default App;

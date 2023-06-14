import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Header from "./components/pages/Header"
function App() {
  const pathInFile = (ways) =>
    ways.map((way) => (
      <Route
        key={way.path}
        path={way.path}
        element={way.element}
        index={way.index}
      />
    ));

  return (
    <>
      <Router>
      <Header />
        <Routes>{pathInFile(routes)}</Routes>
      </Router>
    </>
  );
}

export default App;

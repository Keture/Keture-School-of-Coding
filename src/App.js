
import React from "react";
import Home from "./pages/Home/Home";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default App;

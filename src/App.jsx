import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movie from "./pages/Movie";
import Player from "./pages/Player";


export default function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/" element={<Movie />} />
     

    </Routes>
    
    </BrowserRouter>
  );
}
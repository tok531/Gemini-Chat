import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Chat from "./Pages/ChatWindow";


function App(){
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Chat" element={<Chat />}/>



    </Routes>
    </BrowserRouter>   
  )

}
export default App;
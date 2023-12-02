import React,{useEffect,useState} from "react";
import Navbar from './Component/Navbar/Navbar';
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums ,fetchSongs} from "./Component/api/api"
import "./App.css"


function App() {
const [data,setData]=useState({});
const generateData=(key,source)=>{
  source().then((data)=>{
    setData((prevState)=>{
      return {...prevState,[key]:data};
    })
  })
}
useEffect(()=>{
  generateData("topAlbums",fetchTopAlbums);
  generateData("newAlbums",fetchNewAlbums);
  generateData("songs",fetchSongs);
  
},[]);
    const {topAlbums=[],newAlbums=[],songs=[]}=data;

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar/>
    <Outlet context={{data:{topAlbums,newAlbums,songs}}} />
    </StyledEngineProvider>
    </>
  );
}

export default App;

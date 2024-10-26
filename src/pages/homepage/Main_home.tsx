import {useNavigate } from "react-router-dom";
import Header from "./header/Header"
import Home from "./home/Home"
import { useEffect } from "react";
import CreatePost from "./create-post/createPost";



function Main_home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/الصفحة%20الرئسية');
  }, [])
  return (
    <div>
      <CreatePost />
      <div style={{ position: "fixed", left: '0', right: '0', zIndex: '200' }}>
        <Header />
      </div>
      <div style={{ paddingTop: '100px' }}>
        <Home />
      </div>

    </div>
  )
}

export default Main_home
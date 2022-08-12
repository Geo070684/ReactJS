// import logo from "./logo.svg";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Router/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./Router/Music/Music";
import News from "./Router/News/News";
import Setting from "./Router/Setting/Setting";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes >
        <Route path = "/profile" element ={<Profile/>}/>
        <Route  path = "/dialogs/*" element ={<Dialogs/>}/>
        <Route path = "/news" element ={<News/>}/>
        <Route path = "/music" element ={<Music/>}/>
        <Route path = "/setting" element ={<Setting/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;

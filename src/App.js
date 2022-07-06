import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const pageSize= 9
  const[ progress, setProgress] = useState (0)
  const apiKey = process.env.REACT_APP_NEWS_API
  
  return (
      <>
        <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} />

          <div className="container">
            
          <Switch>
          <Route exact path="/"><News  apiKey = {apiKey} setProgress = {setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News  apiKey = {apiKey} setProgress = {setProgress} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News  apiKey = {apiKey} setProgress = {setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News  apiKey = {apiKey} setProgress = {setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News  apiKey = {apiKey} setProgress = {setProgress} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News  apiKey = {apiKey} setProgress = {setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News  apiKey = {apiKey} setProgress = {setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News  apiKey = {apiKey} setProgress = {setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>

          </div>
        </Router>
      </>
    );
  
}
export default App;

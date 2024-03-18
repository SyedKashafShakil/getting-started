import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let name = "Harry";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title ="React - Home (Dark)";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title ="React - Home (Light)";
    }
  };
  return (
    <>
    <Router>
    <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <h2>Welcome {name} !</h2>
      {/* <Navbar/> */}
      <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

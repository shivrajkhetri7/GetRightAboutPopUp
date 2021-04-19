import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PopUpForm from './Component/PopUpForm/PopUpForm'
// import TransitionsModal from "./Component/MaterialPopUp/MaterialPopUp"
import ReadMore from "./Component/ReadMore/ReadMore"
import {Button} from 'react-bootstrap'
function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
          <Button variant="primary" onClick={() => setModalShow(true)}>
              Click Me
          </Button>
          <PopUpForm show={modalShow} onHide={() => setModalShow(false)} />
          <ReadMore/>
    </div>
  );
}

export default App;


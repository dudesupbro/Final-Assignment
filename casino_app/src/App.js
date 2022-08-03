import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Home from './pages/Home.js';
import MasterList from './pages/MasterList.js';
import ReviewForm from './pages/ReviewForm.js';



export default function App() {

  return (
    <div>
      <Container>
        <Router>
          <div>
            <ButtonGroup className="navButtons">
              <Button variant="outline-success">
                <Link to="/">Home</Link> 
              </Button>
              <Button variant="outline-success">
                <Link to="/master-list">Master List</Link>
              </Button>
              <Button variant="outline-success">
                <Link to ="/review-form">Review Form</Link>
              </Button>            
            </ButtonGroup>
            <div className="Routes">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="master-list" element={<MasterList />}></Route>
              <Route exact path="/review-form" element={<ReviewForm />}></Route>
            </Routes>
            </div>
          </div>
        </Router>
      </Container>
    </div>
  );
}


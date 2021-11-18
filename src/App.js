import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';

/*********************
 SOME IMPORTS OMMITED
*********************/
// import FunctionalComponentDemo from './components/concepts/FunctionalComponents/FunctionalComponentDemo';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

//[React: ] Functional Component, UseState(), Props, and Data Binding
const name = () => {
  return(
      <h1>AGE TEST</h1>
  );
};

const age = () => {
  return(
      <h1>AGE TEST</h1>
  );
};

const hobbies = () => {
  return(
      <h1>AGE TEST</h1>
  );
};

export default App;

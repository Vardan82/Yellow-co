import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import NavMein from "./components/NavMein";
import WhatWeDo from './components/WhatWeDo';
import HeaderTheSupporYourNeed from './components/HeaderTheSupporYourNeed';
import Footer from './components/Footer';

import "./stylesheets/NavMein.css"
import "./stylesheets/WhatWeDo.css";
import "./stylesheets/HeaderTheSupporYourNeed.css"
import "./stylesheets/Footer.css"




function App() {
  return (
    <div className="App">
  
    <Nav/>
    <NavMein/>
    <WhatWeDo/>
    <HeaderTheSupporYourNeed/>
    <Footer/>

    </div>
  );
}

export default App;

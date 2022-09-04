
import React from 'react';

import NavBar from './components/NavBar/NavBar.component.js'
import Footer from './components/Footer/Footer.component.js'
// import pages 
import Home from './pages/Home/Home.page.js';
import About from './pages/About/About.page.js';
import Blog from './pages/Blog/Blog.page.js';
import RegisterDoc from './pages/RegisterDoc/RegDoc.page.js';
import ViewDoc from './pages/ViewDoc/ViewDoc.page.js';
import PetsData from './pages/PetsData/PetsData.page.js';
// absolute imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <NavBar />
       <div className="App">
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/registerdoc' element={<RegisterDoc/>}/>
          <Route path='/viewdoc' element={ <ViewDoc /> } />
          <Route path ='/petsdata' element = {<PetsData/>}/>
      {/* <h1>Says my vet</h1> */}
      </Routes>
      <Footer/>
    </div>
      </Router>
   
  );
}

export default App;

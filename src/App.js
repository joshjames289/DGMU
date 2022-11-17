import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Community from './components/Community';
import CreateMember from './components/CreateMember';
// import 'bootstrap/dist/css/bootstrap.css';

const App = () =>{
    return (
       <Router>
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />}>
                {/* <Home /> */}
            </Route>

            <Route path='/community' element={<Community />}>
                {/* <Community /> */}
            </Route>

            <Route path='/create' element={<CreateMember />}>
                {/* <CreateMember /> */}
            </Route>
        </Routes>
        

      </Router>

       // Navbar
       // Home
       // Community
       // Create Member
    )
}

export default App;
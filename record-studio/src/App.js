import './App.css';
import Home from './pages/home';
import Prices from './pages/prices';
import Contact from './pages/contacts';
import Timetable from './pages/timetable';
import Advertises from './pages/advertises';
import SignUp from './pages/signUp';
import SignUpForStudio from './pages/signUpForStudio';
import Account from './pages/account'


import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/prices" element={<Prices/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/timetable" element={<Timetable/>}/>
                <Route path="/advertises" element={<Advertises/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/signUpForStudio" element={<SignUpForStudio/>}/>
                <Route path="*" element={<h2>Ресурс не найден</h2>} />
            </Routes>
        </Router> 
    </>
    
    
  );
}

export default App;
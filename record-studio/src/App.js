import './App.css';
import Home from './pages/home';
import Prices from './pages/prices';
import Contact from './pages/contacts';
import Timetable from './pages/timetable';
import Advertises from './pages/advertises';
import SignUpForStudio from './pages/signUpForStudio';
import Account from './pages/account';
import Registration from './pages/Registration/index';
import LogIn from './pages/Login/index';

import PrivateRoute from './rootes/privateRoute';
import GuestRoute from './rootes/guestRoute';
import useAuth from './hooks/useAuth';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  const auth = useAuth();

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/advertises" element={<Advertises />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signUpForStudio" element={<SignUpForStudio />} />

          {auth.isLoaded && auth.user ? (
            <Route path="/account" element={<Account />}>
            </Route>
          ) : (
            <>
              <Route path='/login' element={<LogIn />}>
              </Route>
              <Route path="/registration" element={<Registration />}>
              </Route>
            </>
          )}
          <Route path="*" element={<h4>Ресурс не найден</h4>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
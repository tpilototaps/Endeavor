import { Routes, Route } from 'react-router-dom';
import Landing from './Routes/LandingPage/Landing';
import SigninSignup from './Routes/AuthPage/SigninSignup';
import Feed from './Routes/FeedPage/Feed';
import './App.css';
import LogOutPage from './Routes/AuthPage/LogoutPage/LogOutPage';
import Login from './Components/Login/Login';
import UpdateUserInfo from './Components/UpdateUserInfo/UpdateUserInfo';
 
function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Landing/>} />
      <Route path = '/Auth' element = {<SigninSignup/>} />
      <Route path = '/Login' element = {<Login/>} />
      <Route path = '/Feed' element = {<Feed/>} />
      <Route path = '/LogOutPage' element = {<LogOutPage/>} />
      <Route path = '/Update' element = {<UpdateUserInfo/>}/>
    </Routes>
  );
}

export default App;

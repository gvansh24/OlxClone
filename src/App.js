import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import AuthProvider from './Context/auth';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgetPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Profile from './pages/Profile';
import PrivateRoute from './Components/PrivateRoute';
import MyFavouries from './pages/MyFavouries';
import Sell from './pages/Sell';
import Ad from './pages/Ads';
import Chat from './pages/Chat';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path='/sell'element={<Sell/>}> </Route>
            <Route path='/favourites'element={<MyFavouries/>}> </Route>
            <Route path='/chat'element={<Chat/>}> </Route>
          </Route>
          <Route path="/auth/register" element={<Register/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/auth/login" element={<Login/>}></Route>
          <Route path="/auth/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/auth/reset-password" element={<ResetPassword/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
          <Route path="/:category/:id" element={<Ad/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

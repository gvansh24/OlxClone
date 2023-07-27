import React,{useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../Context/auth'
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function NavBar() {
  const {user,unread}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleSignOut=async ()=>{
    await updateDoc(doc(db,'users',user.uid),{
      isOnline:false 
    })
    await signOut(auth);
    navigate("/auth/login");
  }

  return (
    <nav className="navbar navbar-expand-md bg-lite navbar-lite sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to='/'>
            OlxClone
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            { user?(
              <>
              <li className='nav-item'>
                <Link className='nav-link position-relative' to="/chat"> Chat
                {unread.length?(
                  <span className="position-absolute top-10 start-90 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
                ):null}
                 </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={`/profile/${user.uid}`}> Profile </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/sell"> Sell</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/favourites"> My Favourites</Link>
              </li>
                <button className="btn btn-danger btn-sm" onClick={handleSignOut}> Log Out</button>
              </>
            ):(
              <>
                <li className="nav-item">
              <Link className="nav-link"  to='/auth/register'>
                Register
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/auth/login'>
                Login
                </Link>
            </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

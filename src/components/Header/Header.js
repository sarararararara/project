import React, { useCallback } from 'react';
import {FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navigate = useNavigate()

    const LoginOrMypage = useCallback(()=> {
        navigate("/login")
    },[])

    const goMainPage = useCallback(() => {
        navigate("/")
    })

    return(
        <div>
            <div className="header">
                <div className='logo'>

                </div>
                <div className='title' onClick={goMainPage}>
                    ํ์คํ์กด 
                </div>
                <div className='userIcon' onClick={LoginOrMypage}>
                    <FaUserCircle />
                </div>
                
            </div>
            
        </div>
    );
}

export default Header;

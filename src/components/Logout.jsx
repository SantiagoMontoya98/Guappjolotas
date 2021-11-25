import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { LogOutContainer } from '../styles/LogoutStyles'
import { Link } from 'react-router-dom'

const Logout = () => {

  const handleClick = () => {

    localStorage.clear();

    setTimeout(() => {

      window.location.reload();

      console.log("reload");
      
    }, 300);

  }

  return (

    <LogOutContainer>

      <Link to="/" className="logout">
      
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" onClick={handleClick}/>
      
      </Link>

    </LogOutContainer>

  )
}

export default Logout

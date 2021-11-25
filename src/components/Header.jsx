import React from 'react';
import { Link } from 'react-router-dom';
import { ImgLogo, HeaderContainer} from '../styles/HeaderStyles';

const Header = () => {

  return (

    <HeaderContainer>
      
      <ImgLogo src="https://i.imgur.com/qwHjiVu.png" alt="Guappjolotas" />

      <Link to="/carrito">

        <img src="https://i.imgur.com/7Vq7GwA.png" alt="Carrito" />
      
      </Link>

    </HeaderContainer>

  );

}

export default Header;
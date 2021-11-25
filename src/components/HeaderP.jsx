import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerStyles, ImgCar, ImgLogo, ImgRow} from '../styles/HeaderPStyles';

const HeaderP = ({nextProduct}) => {

  return(

    <ContainerStyles>

      <Link to={nextProduct}>
      
        <ImgRow src="https://i.imgur.com/08IQPBc.png" alt="Flecha" />      
      
      </Link>

      <ImgLogo src="https://i.imgur.com/qwHjiVu.png" alt="Guappjolotas" />

      <Link to="/carrito">
      
        <ImgCar src="https://i.imgur.com/7Vq7GwA.png" alt="Carrito" />
      
      </Link>

    </ContainerStyles>

  );

}

export default HeaderP;
import React from 'react'
import { Link } from 'react-router-dom'
import GlobalStyles from '../styles/GlobalStyles'
import { ContainerStyles, ImgLogo, ImgRow, TextCarrito } from '../styles/HeaderCarStyles'

const HeaderCar = () => {

  return (    

    <ContainerStyles>

      <GlobalStyles />

      <Link to="/">
      
        <ImgRow src="https://i.imgur.com/08IQPBc.png" alt="Flecha" />
      
      </Link>

      <TextCarrito>Carrito</TextCarrito>           

      <ImgLogo src="https://i.imgur.com/qwHjiVu.png" alt="Guappjolotas" />

    </ContainerStyles>    

  )
}

export default HeaderCar

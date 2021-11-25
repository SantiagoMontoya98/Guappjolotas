import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerMain, H1Text, H2Text, Header, ImgLogo, Inicio, TextContainer } from '../styles/ExitoStyles'

const Exito = () => {

  return (

    <ContainerMain>      

      <Header>

        <Link to="/">
        
          <ImgLogo src="https://i.imgur.com/qwHjiVu.png" alt="Guappjolotas" />
        
        </Link>

      </Header>

      <TextContainer>

        <H1Text>Compra Exitosa</H1Text>

        <H2Text>Disfruta de tu pedido 🌮☕</H2Text>

        <Link to="/" className="text-regresar">

          <Inicio>
            Regresa al inicio 
            <ImgLogo src="https://i.imgur.com/qwHjiVu.png" alt="Guappjolotas" />
          </Inicio>

        </Link>
        
      </TextContainer>
      
    </ContainerMain>

  )
}

export default Exito

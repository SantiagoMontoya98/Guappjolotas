import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerMain, H1Text, Header, ImgLogo, Inicio, TextContainer } from '../styles/CancelStyles'

const Cancel = () => {

  return (

    <ContainerMain>      

      <Header>

        <Link to="/">
        
          <ImgLogo src="https://i.imgur.com/qwHjiVu.png" alt="Guappjolotas" />
        
        </Link>

      </Header>

      <TextContainer>

        <H1Text>Compra Cancelada</H1Text>        

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

export default Cancel

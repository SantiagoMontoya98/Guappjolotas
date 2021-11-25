import React from 'react'
import { Link } from 'react-router-dom'
import { GuajolotaDescription, GuajolotaName, GuajolotaPrice, GuajolotasContainer, Guajolota } from '../styles/GuajolotasStyles'
import Header from './Header'
import Logout from './Logout'
import NavBar from './NavBar'
import Searcher from './Searcher'
import Welcome from './Welcome'

const Guajolotas = () => {
  return (

    <>
    
      <Header />

      <Welcome />

      <Searcher />

      <NavBar gColor = "var(--color-naranjado)" gCurrent = "current" />
    
      <GuajolotasContainer>

        <Link to="/guajolotas/verde" className = "products">
        
          <Guajolota>
            <img src="https://i.imgur.com/GjPtKTv.png" alt="Guajolota Verde" />
            <GuajolotaDescription>
              <GuajolotaName>Verde</GuajolotaName>
              <GuajolotaPrice>$25 MXN</GuajolotaPrice>
            </GuajolotaDescription>
          </Guajolota>

        </Link>

        <Link to = "/guajolotas/mole" className = "products">
        
          <Guajolota>
            <img src="https://i.imgur.com/qL1VZ4c.png" alt="Guajolota Mole" />
            <GuajolotaDescription>
              <GuajolotaName>Mole</GuajolotaName>
              <GuajolotaPrice>$25 MXN</GuajolotaPrice>
            </GuajolotaDescription>
          </Guajolota>
        
        </Link>

        <Link to = "/guajolotas/guayaba" className = "products">
        
          <Guajolota>
            <img src="https://i.imgur.com/8iTmcQb.png" alt="Guajolota Guayaba" />
            <GuajolotaDescription>
              <GuajolotaName>Guayaba</GuajolotaName>
              <GuajolotaPrice>$25 MXN</GuajolotaPrice>
            </GuajolotaDescription>
          </Guajolota>
        
        </Link>

        <Link to = "/guajolotas/pina" className = "products">
        
          <Guajolota>
            <img src="https://i.imgur.com/Pg57sLb.png" alt="Guajolota Piña" />
            <GuajolotaDescription>
              <GuajolotaName>Piña</GuajolotaName>
              <GuajolotaPrice>$25 MXN</GuajolotaPrice>
            </GuajolotaDescription>
          </Guajolota>      
        
        </Link>

        <Link to = "/guajolotas/pasas" className = "products">
        
          <Guajolota>
            <img src="https://i.imgur.com/ZJfehPl.png" alt="Guajolota Pasas" />
            <GuajolotaDescription>
              <GuajolotaName>Pasas</GuajolotaName>
              <GuajolotaPrice>$25 MXN</GuajolotaPrice>
            </GuajolotaDescription>
          </Guajolota>
        
        </Link>        

      </GuajolotasContainer>

      {localStorage.getItem("user") !== null ? <Logout /> : ""}

    </>

  )
}

export default Guajolotas

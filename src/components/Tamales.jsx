import React from 'react'
import { Link } from 'react-router-dom'
import { Tamal, TamalDescription, TamalesContainer, TamalName, TamalPrice } from '../styles/TamalesStyles'
import Header from './Header'
import Logout from './Logout'
import NavBar from './NavBar'
import Searcher from './Searcher'
import Welcome from './Welcome'

const Tamales = () => {
  return (

    <>

      <Header />

      <Welcome />

      <Searcher />

      <NavBar tColor = "var(--color-naranjado)" tCurrent = "current" />
    
      <TamalesContainer>

        <Link to="/tamales/verde" className="products">

          <Tamal>
            <img src="https://i.imgur.com/fQQUltB.png" alt="Tamal Verde" />
            <TamalDescription>
              <TamalName>Tamal Verde</TamalName>
              <TamalPrice>$14 MXN</TamalPrice>
            </TamalDescription>
          </Tamal>

        </Link>


        <Link to="/tamales/mole" className="products">

          <Tamal>
            <img src="https://i.imgur.com/yXrt0A4.png" alt="Tamal de Mole" />
            <TamalDescription>
              <TamalName>Tamal de Mole</TamalName>
              <TamalPrice>$14 MXN</TamalPrice>
            </TamalDescription>
          </Tamal>          

        </Link>


        <Link to="/tamales/guayaba" className="products">

          <Tamal>
            <img src="https://i.imgur.com/flB8xUs.png" alt="Tamal de Guayaba" />
            <TamalDescription>
              <TamalName>Tamal de Guayaba</TamalName>
              <TamalPrice>$14 MXN</TamalPrice>
            </TamalDescription>
          </Tamal>

        </Link>


        <Link to="/tamales/pina" className="products">

          <Tamal>
            <img src="https://i.imgur.com/xutYv3e.png" alt="Tamal de Piña" />
            <TamalDescription>
              <TamalName>Tamal de Piña</TamalName>
              <TamalPrice>$14 MXN</TamalPrice>
            </TamalDescription>
          </Tamal>

        </Link>


        <Link to="/tamales/pasas" className="products">

          <Tamal>
            <img src="https://i.imgur.com/VRQF93J.png" alt="Tamal de Pasas" />
            <TamalDescription>
              <TamalName>Tamal de Pasas</TamalName>
              <TamalPrice>$14 MXN</TamalPrice>
            </TamalDescription>
          </Tamal>

        </Link>        

      </TamalesContainer>

      {localStorage.getItem("user") !== null ? <Logout /> : ""}

    </>

  )
}

export default Tamales

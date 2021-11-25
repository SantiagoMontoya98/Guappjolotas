import React from 'react'
import { Bebida, BebidaAtoleDescription, BebidaDescription, BebidaName, BebidaPrice, BebidasContainer, ImgDrink } from '../styles/BebidasStyles'
import Header from './Header'
import NavBar from './NavBar'
import Searcher from './Searcher'
import Welcome from './Welcome'
import {Link} from 'react-router-dom'
import Logout from './Logout'

const Bebidas = () => {
  return (

    <>

      <Header />

      <Welcome />

      <Searcher />

      <NavBar bColor = "var(--color-naranjado)" bCurrent = "current"/>

      <BebidasContainer>

        <Link to="/bebidas/champurrado" className = "products">

          <Bebida>
            <ImgDrink src="https://i.imgur.com/xMTByve.png" alt="Champurrado" />
            <BebidaDescription>
              <BebidaName>Champurrado</BebidaName>
              <BebidaPrice>$12 MXN</BebidaPrice>
            </BebidaDescription>
          </Bebida>

        </Link>

        <Link to="/bebidas/atole" className = "products">

          <Bebida>
            <ImgDrink src="https://i.imgur.com/L3sriS0.png" alt="Atole de Arroz con Leches" />
            <BebidaAtoleDescription>
              <BebidaName>Atole de Arroz con Leche</BebidaName>
              <BebidaPrice>$12 MXN</BebidaPrice>
            </BebidaAtoleDescription>
          </Bebida>

        </Link>

        <Link to="/bebidas/chocolate" className = "products">

          <Bebida>
            <ImgDrink src="https://i.imgur.com/4QAchTY.png" alt="Chocolate Caliente" />
            <BebidaDescription>
              <BebidaName>Chocolate Caliente</BebidaName>
              <BebidaPrice>$12 MXN</BebidaPrice>
            </BebidaDescription>
          </Bebida>

        </Link>

        <Link to="/bebidas/cafe" className = "products">

          <Bebida>
            <ImgDrink src="https://i.imgur.com/KmsHPTH.png" alt="Café Negro" />
            <BebidaDescription>
              <BebidaName>Café Negro</BebidaName>
              <BebidaPrice>$12 MXN</BebidaPrice>
            </BebidaDescription>
          </Bebida>

        </Link>        

      </BebidasContainer>

      {localStorage.getItem("user") !== null ? <Logout /> : ""}

    </>

  )
}

export default Bebidas

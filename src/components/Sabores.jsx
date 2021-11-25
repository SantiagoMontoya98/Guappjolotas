import React from 'react';
import { Link } from 'react-router-dom';
import { Flavor1, Flavor2, Flavor3, Flavor4, Flavor5, Flavor6, FlavorsContainer, FlavorsRow1, FlavorsRow2, ImgContainer, Text } from '../styles/SaboresStyles';

const Sabores = (props) => {

  let flavors = props.sabores;

  let none = "";

  if(flavors.length === 4) none = "none";

  return(

    <FlavorsContainer>

      <Text>Sabor</Text>

      <ImgContainer>

        <FlavorsRow1>

          <Link to = {props.path[0]}>
          
            <Flavor1 src={flavors[0]} alt="" 
              id = {props.verde || props.champurrado}/>

          </Link >

          <Link to = {props.path[1]}>
          
            <Flavor2 src={flavors[1]}alt="" 
              id = {props.mole || props.atole}/>          
          
          </Link>

          <Link to = {props.path.length === 4 ? props.path[2] : ""}>          
          
            <Flavor3 src={flavors[2]} alt="" 
             id = {props.chocolate}/>
          
          </Link>

        </FlavorsRow1>

        <FlavorsRow2>

          <Link to = {props.path.length === 4 ? props.path[3] : props.path[2]}> 
          
            <Flavor4 src={flavors[3]} alt="" 
              id = {props.piña || props.cafe}/>

          </Link>

          <Link to = {props.path.length > 4 ? props.path[3] : ""} className={none}>

            <Flavor5 src={flavors[4]} alt="" 
              id = {props.pasas}/>
          
          </Link>

          <Link to = {props.path.length > 4 ? props.path[4] : ""} className={none}>
          
            <Flavor6 src={flavors[5]} alt=""
              id = {props.guayaba}/>
          
          </Link>

        </FlavorsRow2>

      </ImgContainer>

    </FlavorsContainer>


  );

}

export default Sabores;
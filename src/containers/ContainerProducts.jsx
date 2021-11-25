import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AgregarCarrito from '../components/AgregarCarrito'
import Logout from '../components/Logout'
import HeaderP from '../components/HeaderP'
import MasProductos from '../components/MasProductos'
import Product from '../components/Product'
import Sabores from '../components/Sabores'
import url from '../helpers/url'


const ContainerProducts = props => {

  const [cantidadTotal, setCantidadTotal] = useState(0);

  const [total, setTotal] = useState(0);

  const [productsCar, setProductsCar] = useState([]);

  const addProduct = async () => {

    for(let el = 0; el < productsCar.length; el++){

      await fetch(url,{

        method: 'POST',
        body: JSON.stringify(productsCar[el]),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }

      })    

    }

  }  

  return (

    <div>      

      <HeaderP nextProduct = {props.otherProduct} />

      <Product 
        product = {props.product} 
        prevProduct = {props.prevProduct} 
        nextProduct = {props.nextProduct}
        total={total}
        setTotal={setTotal}
        cantidadTotal={cantidadTotal}
        setCantidadT={setCantidadTotal} 
        productCar={productsCar}
        setProductCar={setProductsCar} />

      <Sabores 
        verde = {props.verde}
        mole = {props.mole}
        piña = {props.piña}
        pasas = {props.pasas}
        guayaba = {props.guayaba}
        champurrado = {props.champurrado} 
        atole = {props.atole} 
        chocolate = {props.chocolate} 
        cafe = {props.cafe} 
        sabores = {props.sabores}
        path = {props.path} />

      <MasProductos 
        nombreC = {props.nombreC}
        textoC = {props.textoC}
        moreProducts = {props.moreProducts}
        total={total}
        setTotal={setTotal} 
        cantidadTotal={cantidadTotal}
        setCantidadT={setCantidadTotal} 
        productCar={productsCar}
        setProductCar={setProductsCar} />

      <Link to="/carrito" className="text-carrito" onClick={addProduct}>

        <AgregarCarrito 
        total={total} 
        cantidad={cantidadTotal} 
        />

      </Link>

      <Logout />
      
    </div>

  )
}

export default ContainerProducts

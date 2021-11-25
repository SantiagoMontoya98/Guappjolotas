import React, { useState } from 'react'
import Guajolotas from '../components/Guajolotas'
import Bebidas from '../components/Bebidas'
import Tamales from '../components/Tamales'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from '../styles/GlobalStyles'
import ContainerProducts from '../containers/ContainerProducts'
import { bebidas, guajolotas, tamales } from '../data/products'
import { saborBebidas, saborGyT } from '../data/flavors'
import { pathBebidas, pathGuajolotas, pathTamales } from '../data/pathProducts'
import ContainerCar from '../containers/ContainerCar'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import publicKey from '../helpers/stripe_key'
import Exito from '../components/Exito'
import Cancel from '../components/Cancel'
import ModalProduct from '../components/ModalProduct'
import FormLogin from '../components/FormLogin'
import FormRegistro from '../components/FormRegistro'
import SearcherMain from '../components/SearcherMain'

const stripePromise = loadStripe(publicKey);

const ContainerRoutes = () => {

  const [productCar, setProductCar] = useState({

    id: 0,
    name: "",
    price: 0,
    amount: 0,
    img: "",
    idPrice: ""    

  })
 
  return (

    <Elements stripe={stripePromise}>

      <BrowserRouter>

        <GlobalStyles />
      
        <Routes>

          <Route path="/" element={<Guajolotas />} />

          <Route path = "/guajolotas" element = { <Guajolotas /> }></Route>

          <Route path = "/bebidas" element = { <Bebidas /> }></Route>

          <Route path = "/tamales" element = { <Tamales /> }></Route>

          <Route path = "/guajolotas/verde" element = { 
            localStorage.getItem("user") === null
            ? <FormLogin url="/guajolotas/verde"/>
            : <ContainerProducts 
              product = { guajolotas[0] } 
              prevProduct = ""
              nextProduct = {guajolotas[1].img}
              verde = "opacity-1" 
              nombreC = "Guajolocombo"
              textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
              moreProducts = {bebidas} 
              sabores = {saborGyT} 
              path = {pathGuajolotas} 
              otherProduct = {"/guajolotas/mole"} /> } />
            

          <Route path = "/guajolotas/mole" element = { 
            localStorage.getItem("user") === null
            ? <FormLogin url="/guajolotas/mole"/>
            : <ContainerProducts 
              product = { guajolotas[1] } 
              prevProduct = { guajolotas[0].img }
              nextProduct = {guajolotas[2].img} 
              mole = "opacity-1" 
              nombreC = "Guajolocombo"
              textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
              moreProducts = {bebidas} 
              sabores = {saborGyT} 
              path = {pathGuajolotas} 
              otherProduct = {"/guajolotas/guayaba"} /> } />

          <Route path = "/guajolotas/guayaba" element = { 
            localStorage.getItem("user") === null
            ? <FormLogin url="/guajolotas/guayaba"/>
            : <ContainerProducts 
              product = { guajolotas[2] } 
              prevProduct = { guajolotas[1].img }
              nextProduct = {guajolotas[3].img} 
              guayaba = "opacity-1"
              nombreC = "Guajolocombo"
              textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
              moreProducts = {bebidas} 
              sabores = {saborGyT} 
              path = {pathGuajolotas} 
              otherProduct = {"/guajolotas/pina"} /> } />

          <Route path = "/guajolotas/pina" element = { 
            localStorage.getItem("user") === null
            ? <FormLogin url="/guajolotas/pina"/>
            : <ContainerProducts 
              product = { guajolotas[3] } 
              prevProduct = { guajolotas[2].img }
              nextProduct = {guajolotas[4].img}
              piña = "opacity-1" 
              nombreC = "Guajolocombo"
              textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
              moreProducts = {bebidas} 
              sabores = {saborGyT} 
              path = {pathGuajolotas} 
              otherProduct = {"/guajolotas/pasas"} /> } />

          <Route path = "/guajolotas/pasas" element = { 
            localStorage.getItem("user") === null
            ? <FormLogin url="/guajolotas/pasas"/>
            : <ContainerProducts 
              product = { guajolotas[4] } 
              prevProduct = { guajolotas[3].img }
              nextProduct = ""
              pasas = "opacity-1" 
              nombreC = "Guajolocombo"
              textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
              moreProducts = {bebidas} 
              sabores = {saborGyT} 
              path = {pathGuajolotas} 
              otherProduct = {""}/> } />

            <Route path = "/bebidas/champurrado" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/bebidas/champurrado"/>
              : <ContainerProducts 
                product = { bebidas[0] } 
                prevProduct = ""
                nextProduct = {bebidas[1].img}
                champurrado = "opacity-1" 
                nombreC = "Guajolocombo"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {guajolotas} 
                sabores = {saborBebidas} 
                path = {pathBebidas} 
                otherProduct = {"/bebidas/atole"} /> } />

            <Route path = "/bebidas/atole" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/bebidas/atole"/>
              : <ContainerProducts 
                product = { bebidas[1] } 
                prevProduct = { bebidas[0].img } 
                nextProduct = {bebidas[2].img}
                atole = "opacity-1" 
                nombreC = "Guajolocombo"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {guajolotas} 
                sabores = {saborBebidas} 
                path = {pathBebidas} 
                otherProduct = {"/bebidas/chocolate"} /> } />

            <Route path = "/bebidas/chocolate" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/bebidas/chocolate"/>
              : <ContainerProducts 
                product = { bebidas[2] } 
                prevProduct = { bebidas[1].img } 
                nextProduct = {bebidas[3].img}
                chocolate = "opacity-1" 
                nombreC = "Guajolocombo"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {guajolotas} 
                sabores = {saborBebidas} 
                path = {pathBebidas} 
                otherProduct = {"/bebidas/cafe"} /> } />
            
            <Route path = "/bebidas/cafe" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/bebidas/cafe"/>
              : <ContainerProducts 
                product = { bebidas[3] } 
                prevProduct = { bebidas[2].img } 
                nextProduct = ""
                cafe = "opacity-1" 
                nombreC = "Guajolocombo"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {guajolotas} 
                sabores = {saborBebidas} 
                path = {pathBebidas} 
                otherProduct = {""} /> } />

            <Route path = "/tamales/verde" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/tamales/verde"/>
              : <ContainerProducts 
                product = { tamales[0] } 
                prevProduct = ""
                nextProduct = {tamales[1].img}
                verde = "opacity-1" 
                nombreC = "Bebidas"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {bebidas}
                sabores = {saborGyT} 
                path = {pathTamales} 
                otherProduct = {"/tamales/mole"} /> } />
            

            <Route path = "/tamales/mole" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/tamales/mole"/>
              : <ContainerProducts 
                product = { tamales[1] } 
                prevProduct = { tamales[0].img }
                nextProduct = {tamales[2].img} 
                mole = "opacity-1" 
                nombreC = "Bebidas"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {bebidas} 
                sabores = {saborGyT} 
                path = {pathTamales} 
                otherProduct = {"/tamales/guayaba"} /> } />

            <Route path = "/tamales/guayaba" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/tamales/guayaba"/>
              : <ContainerProducts 
                product = { tamales[2] } 
                prevProduct = { tamales[1].img }
                nextProduct = {tamales[3].img} 
                guayaba = "opacity-1"
                nombreC = "Bebidas"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {bebidas} 
                sabores = {saborGyT} 
                path = {pathTamales} 
                otherProduct = {"/tamales/pina"} /> } />

            <Route path = "/tamales/pina" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/tamales/pina"/>
              : <ContainerProducts 
                product = { tamales[3] } 
                prevProduct = { tamales[2].img }
                nextProduct = {tamales[4].img}
                piña = "opacity-1" 
                nombreC = "Bebidas"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {bebidas} 
                sabores = {saborGyT} 
                path = {pathTamales} 
                otherProduct = {"/tamales/pasas"} /> } />

            <Route path = "/tamales/pasas" element = { 
              localStorage.getItem("user") === null
              ? <FormLogin url="/tamales/pasas"/>
              : <ContainerProducts 
                product = { tamales[4] } 
                prevProduct = { tamales[3].img }
                nextProduct = ""
                pasas = "opacity-1" 
                nombreC = "Bebidas"
                textoC = "Selecciona la bebida que más te guste y difruta de tu desayuno" 
                moreProducts = {bebidas} 
                sabores = {saborGyT} 
                path = {pathTamales} 
                otherProduct = {""} /> } />

            <Route path="/carrito" element={
              localStorage.getItem("user") === null
              ? <FormLogin url="/carrito"/>
              : <ContainerCar setProduct={setProductCar} />} />

            <Route path="/exito" element={<Exito />} />

            <Route path="/cancelar" element={<Cancel />} />

            <Route path="/product" element={<ModalProduct product={productCar}/>} />
            <Route path="/registro" element={<FormRegistro />} />

            <Route path="/inicio-sesion" element={<FormLogin url="/"/>} />

            <Route path="/buscador" element={<SearcherMain />} />

        </Routes>
      
      </BrowserRouter>
      
    </Elements>

  )
}

export default ContainerRoutes

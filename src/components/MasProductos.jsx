import React from 'react'
import { Card, CheckBox, P1, P2, ProductName, ProductPrice, Products, ProductsContainer, ProductsRow1, ProductsRow2, ProductsRow3 } from '../styles/MasProductosStyles'

const MasProductos = (props) => {

  let moreP = props.moreProducts;  

  let none = "";

  if(moreP.length === 4) none = "none";

  const sumarCantidad = () => {

    props.setCantidadT(props.cantidadTotal + 1);

  }

  const restarCantidad = () => {

    props.setCantidadT(props.cantidadTotal - 1);

  }

  const addProduct = (product) => {

    props.setProductCar([
                            ...props.productCar,
                            {
                              name: product.name,
                              amount: 1,
                              price: product.price,
                              img: product.img,
                              idPrice: product.idPrice
                            }]
      )

  }

  const deleteProduct = (product) => props.productCar.splice(product,1);
 

  const handleCheck = ({target}) => {

    if(target.checked && target.name === moreP[0].name2){

      props.setTotal(props.total + moreP[0].price);

      sumarCantidad();

      addProduct(moreP[0]);

    }    

    if(target.checked && target.name === moreP[1].name2){

      props.setTotal(props.total + moreP[1].price);

      sumarCantidad();

      addProduct(moreP[1]);

    }

    if(target.checked && target.name === moreP[2].name2){

      props.setTotal(props.total + moreP[2].price);

      sumarCantidad();

      addProduct(moreP[2]);

    }

    if(target.checked && target.name === moreP[3].name2){

      props.setTotal(props.total + moreP[3].price);

      sumarCantidad();

      addProduct(moreP[3]);

    }

    if(!target.checked && target.name === moreP[0].name2){

      props.setTotal(props.total - moreP[0].price);

      restarCantidad();

      deleteProduct(moreP[0]);

    }

    if(!target.checked && target.name === moreP[1].name2){

      props.setTotal(props.total - moreP[1].price);

      restarCantidad();

      deleteProduct(moreP[1]);      

    }

    if(!target.checked && target.name === moreP[2].name2){

      props.setTotal(props.total - moreP[2].price);

      restarCantidad();

      deleteProduct(moreP[2]);      

    }

    if(!target.checked && target.name === moreP[3].name2){

      props.setTotal(props.total - moreP[3].price);

      restarCantidad();

      deleteProduct(moreP[3]);      

    }

    if(moreP.length === 5){

      if(target.checked && target.name === moreP[4].name2){
  
        props.setTotal(props.total + moreP[4].price);

        sumarCantidad();

        addProduct(moreP[4]);
  
      }

      if(!target.checked && target.name === moreP[4].name2){
  
        props.setTotal(props.total - moreP[4].price);

        restarCantidad();

        deleteProduct(moreP[4]);
  
      }

    }

  }  

  return (

    <ProductsContainer>

      <article>

        <P1>{props.nombreC}</P1>

        <P2>{props.textoC}</P2>

      </article>

      <Products>

        <ProductsRow1>

          <Card>

            <img src={moreP[0].img} alt="Champurrado" />

            <CheckBox type="checkbox" name={moreP[0].name2} onClick={handleCheck}/>

            <ProductName>{moreP[0].name2}</ProductName>

            <ProductPrice>+ ${moreP[0].price} MXN</ProductPrice>

          </Card>

          <Card>

            <img src={moreP[1].img} alt="Arroz con Leche" />

            <CheckBox type="checkbox" name={moreP[1].name2} onClick={handleCheck}/>

            <ProductName>{moreP[1].name2}</ProductName>

            <ProductPrice>+ ${moreP[1].price} MXN</ProductPrice>

          </Card>          

        </ProductsRow1>

        <ProductsRow2>

          <Card>

            <img src={moreP[2].img} alt="Chocolate Caliente" />

            <CheckBox type="checkbox" name={moreP[2].name2} onClick={handleCheck}/>

            <ProductName>{moreP[2].name2}</ProductName>

            <ProductPrice>+ ${moreP[2].price} MXN</ProductPrice>

          </Card>

          <Card>

            <img src={moreP[3].img} alt="Café Negro" />

            <CheckBox type="checkbox" name={moreP[3].name2} onClick={handleCheck}/>

            <ProductName>{moreP[3].name2}</ProductName>

            <ProductPrice>+ ${moreP[3].price} MXN</ProductPrice>

          </Card>

        </ProductsRow2>

        <ProductsRow3 style={{display: none}}>

          <Card>

            <img src={moreP.length === 5 
            ? moreP[4].img 
            : ""} alt="Chocolate Caliente" />

            <CheckBox type="checkbox" name={moreP.length === 5 
            ? moreP[4].name2
            : ""} onClick={handleCheck}/>

            <ProductName>{moreP.length === 5 
            ? moreP[4].name2
            : ""}</ProductName>

            <ProductPrice>+ ${moreP.length === 5 
            ? moreP[4].price
            : ""} MXN</ProductPrice>

          </Card>

        </ProductsRow3>

      </Products>

    </ProductsContainer>
  )

}

export default MasProductos

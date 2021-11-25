import React, { useEffect, useState } from "react";
import { Amount, AmountContainer, H2Text, Img2, Img3, ImgLess, ImgMore, ImgProduct, Price, ProductContainer } from "../styles/ProductStyles";

const Product = (props) => {
  
  const [cantidad, setCantidad] = useState(1);

  const [opacity, setOpacity] = useState("opacity-0");

  const addProduct = (product) => {

    props.setProductCar([
                          {
                            name: product.name,
                            price: product.price,
                            amount: cantidad + 1,
                            img: product.img,
                            idPrice: product.idPrice
                          }]);

  }

  const deleteProduct = (product) => {

    props.setProductCar([
                          {
                            name: product.name,
                            price: product.price,
                            amount: cantidad - 1,
                            img: product.img,
                            idPrice: product.idPrice
                          }]);

  }

  const handleSumar = () => {
    
    setCantidad(cantidad + 1);    

    if(cantidad === 1) setOpacity("opacity-1");

    props.setTotal(props.total + props.product.price);

    props.setCantidadT(props.cantidadTotal + 1);

    addProduct(props.product);

  };

  const handleRestar = () => {
    
    setCantidad(cantidad - 1);    

    if(cantidad === 2) {

      setOpacity("opacity-0");

      props.setTotal(props.total - props.product.price);

      props.setCantidadT(props.cantidadTotal - 1);

      deleteProduct(props.product);

    }else{

      setOpacity("opacity-1")

      if(cantidad !== 1){

        props.setTotal(props.total - props.product.price);

        props.setCantidadT(props.cantidadTotal - 1);

        deleteProduct(props.product);

      }
      
    }

    if(cantidad === 1) {

      setCantidad(1);

      setOpacity("opacity-0");

    };
  
  };

  let nonePrev = "";
  let noneNext = "";

  if(props.prevProduct === "") nonePrev = "none";

  if(props.nextProduct === "") noneNext = "none";  

  useEffect(() => {

    props.setTotal(props.product.price * cantidad);

    props.setCantidadT(cantidad);

    props.setProductCar([
                          {
                            name: props.product.name,
                            price: props.product.price,
                            amount: cantidad,
                            img: props.product.img,
                            idPrice: props.product.idPrice
                          }]);

  }, []) 

  return(   

    <ProductContainer>

      <ImgProduct src={props.product.img} alt="" />

      <Img2 src={props.nextProduct} alt="" className = {noneNext} />

      <Img3 src={props.prevProduct} alt="" className = {nonePrev} />
      
      <H2Text>
        {props.product.name}
      </H2Text>

      <Price>
        ${props.product.price} MXN
      </Price>

      <AmountContainer>

        <ImgLess src="https://i.imgur.com/gTS9HPN.png" alt="menos" 
          onClick={handleRestar} id={opacity}/>

        <Amount>
          {cantidad}
        </Amount>

        <ImgMore src="https://i.imgur.com/6iWZWW4.png" alt="mas" 
          onClick={handleSumar}/>

      </AmountContainer>     

    </ProductContainer>

  );

}

export default Product;
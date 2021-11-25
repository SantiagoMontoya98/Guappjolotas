import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Amount, AmountContainer, Button1, Button2, Button3, ButtonContainer, H2Text, ImgLess, ImgMore, ImgProduct, Price, ProductContainer } from '../styles/ModalProductStyles';
import url from '../helpers/url'

const ModalProduct = ({product}) => {

  const [cantidad, setCantidad] = useState(product.amount);

  const [opacity, setOpacity] = useState("opacity-0");

  const handleSumar = () => {
    
    setCantidad(cantidad + 1);    

    if(cantidad === 1) setOpacity("opacity-1");

  };

  const handleRestar = () => {
    
    setCantidad(cantidad - 1);    

    if(cantidad === 2) {

      setOpacity("opacity-0");      

    }else{

      setOpacity("opacity-1")
      
    }

    if(cantidad === 1) {

      setCantidad(1);

      setOpacity("opacity-0");

    };
  
  };

  useEffect(() => {

    if(cantidad > 1) setOpacity("opacity-1");
    
  }, [])

  const handleUpdate = async () => {

    const obj = {

      name: product.name,
      price: product.price,
      amount: cantidad,
      img: product.img,
      idPrice: product.idPrice

    }

    await fetch(`${url}/${product.id}`,{

      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    })    

  }

  const handleDelete = async () => {    

    await fetch(`${url}/${product.id}`,{

      method: "DELETE"      

    })    

  }

  return(

    <ProductContainer>      

      <ImgProduct src={product.img} alt={product.name} />

      <H2Text>
        {product.name}
      </H2Text>

      <Price>
        ${product.price} MXN
      </Price>

      <AmountContainer>

        <ImgLess src="https://i.imgur.com/gTS9HPN.png" alt="menos" 
          onClick={handleRestar} id={opacity} />

        <Amount>
          {cantidad}
        </Amount>

        <ImgMore src="https://i.imgur.com/6iWZWW4.png" alt="mas" 
          onClick={handleSumar} />

      </AmountContainer>

      <ButtonContainer>
                
        
        <Link to="/carrito" className="buttonsCar">
        
          <Button1 onClick={handleUpdate}>
            Actualizar
          </Button1>

        </Link>


        <Link to="/carrito" className="buttonsCar">
        
          <Button2 onClick={handleDelete}>
            Eliminar
          </Button2>

        </Link>       

        <Link to="/carrito" className="link">
        
          <Button3>
            Cerrar
          </Button3>
        
        </Link>

      </ButtonContainer>

    </ProductContainer>

  );

}

export default ModalProduct;
import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerImgyP, ImgProduct, Product, ProductAmount, ProductInfo, ProductName, ProductPrice, ProductsContainer, Total, TotalAmount, TotalText } from '../styles/ProductsCarStyles'


const ProductsCar = ({products, total, setProduct}) => {

  const handleClick = (el) => {

    setProduct({

      id: el.id,
      name: el.name,
      price: el.price,
      amount: el.amount,
      img: el.img,
      idPrice: el.idPrice

    })

  }

  return (

    <ProductsContainer>

      {

        products.map((el, i) => (

          <Link to="/product" className="products" onClick={() => handleClick(el)} key={i}>
          
            <Product className={el.img === "" ? "none": ""}>

            <ContainerImgyP>

              <ImgProduct src={el.img} alt={el.name} />

              <ProductInfo>
                <ProductName>{el.name}</ProductName>
                <ProductAmount>x{el.amount}</ProductAmount>
              </ProductInfo>

            </ContainerImgyP>

            <ProductPrice>${el.price * el.amount} MXN</ProductPrice>

          </Product>

          </Link>

          


        ))

      }      

      <Total>

        <TotalText>Total</TotalText>
        <TotalAmount>${total} MXN</TotalAmount>
        
      </Total>

    </ProductsContainer>

  )
}

export default ProductsCar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContainerMain, FormStyle, HeaderContainer, ImgLupa, LensContainer, PCancelar, PLens, PProducts, Product, ProductDescription, ProductName, ProductPrice, Products, ProductsContainer, SearcherStyle } from '../styles/SearcherMainStyles'
import { allProducts } from '../data/products'
import Logout from './Logout'

const SearcherMain = () => {  

  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");

  const [display1, setDisplay1] = useState("none");

  const [display2, setDisplay2] = useState("");

  const [p, setP] = useState("Realiza una búsqueda");

  const getProducts = (name) => {

    if(name !== undefined){

      name = name.toLowerCase();

      if(name === ""){

        setProducts([]);

        setTitle("");

        setDisplay1("none");

        setDisplay2("");

        setP("Realiza una búsqueda");

      }else{

        setDisplay2("none");

        setDisplay1("");

        if(name.includes("guaj")){

          setProducts(allProducts.filter(p => p.name.toLowerCase().includes(name)))          

        }else{

          setProducts(allProducts.filter(p => p.name2.toLowerCase().includes(name)))

        }

        if(products[0] !== undefined) setTitle(products[0].category);

        if(products.length === 0) {

          setTitle("");

          setDisplay1("none");

          setDisplay2("");

          setP("No hay resultados");

        }

      }

    }

  }
  

  const handleChange = ({target}) => getProducts(target.value);

  return (

    <ContainerMain>      

      <HeaderContainer>

        <FormStyle>

          <ImgLupa src="https://i.imgur.com/ooNjXdu.png" alt="Lupa" />
          <SearcherStyle 
            autoFocus 
            type="text"
            name="searchText"
            placeholder="Sabor de Guajolo..."            
            onChange={handleChange}/>
        
        </FormStyle>

        <Link to="/" className="cancel">
        
          <PCancelar>Cancelar</PCancelar>

        </Link>        

      </HeaderContainer>

      <ProductsContainer style={{display: display1}}>

        <PProducts>{title}</PProducts>

        <Products>

            {

              products.map(el => (

                <Link key={el.name+el.price} to={el.url} className="products">
                
                  <Product >
                    <img src={el.img} alt={el.name} />
                    <ProductDescription>
                      <ProductName>{el.name2}</ProductName>
                      <ProductPrice>${el.price} MXN</ProductPrice>
                    </ProductDescription>
                  </Product>

                </Link>

              ))

            }

        </Products>

      </ProductsContainer>

      <LensContainer style={{display: display2}}>

        <img src="https://i.imgur.com/tmDKG0o.png" alt="" />

        <PLens>{p}</PLens>

      </LensContainer>

      <Logout />

    </ContainerMain>

  )
}


export default SearcherMain

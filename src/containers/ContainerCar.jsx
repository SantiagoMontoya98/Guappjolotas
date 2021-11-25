import { useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import HeaderCar from '../components/HeaderCar'
import Logout from '../components/Logout'
import Pagar from '../components/Pagar'
import ProductsCar from '../components/ProductsCar'
import WithOutP from '../components/WithOutP'
import url from '../helpers/url'

const ContainerCar = ({setProduct}) => {

  const stripe = useStripe();

  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);  

  const getData = async () => {

    let resp = await fetch(url);

    let data = await resp.json();

    return data;

  }

  const clearCar = async (id) => {

    await fetch(`${url}/${id}`,{
      method: "DELETE"
    })

  }

  useEffect(() => {

    getData()
    .then(products => setProducts(products));

    let total = 0;

    products.forEach(el => total += el.price * el.amount);

    setTotal(total);    

  }, [products]);
  

  const checkout = () => {

    let dataItem = [];

    for (let el = 1; el < products.length; el++) clearCar(products[el].id);
    
    for (let el = 1; el < products.length; el++) {

      const obj = {

        price: products[el].idPrice,
        quantity: products[el].amount

      }

      dataItem.push(obj);

    }

    stripe
    .redirectToCheckout({

      lineItems: [...dataItem],
      mode: "payment",
      successUrl: "https://guappjolotas.herokuapp.com/exito",
      cancelUrl: "https://guappjolotas.herokuapp.com/cancelar"

    })
    .then(resp => {

      console.log(resp);

      if(resp.error){

        console.log("error Stripe");
      }

    })

  }

  return (
    <div>     

      <HeaderCar />

        {products.length === 1 ? <WithOutP /> : <ProductsCar 
          products={products}
          total={total}
          setProduct={setProduct}/>}
          
        {products.length === 1 ? <Pagar noProducts={"no-products"}/> : <Pagar click={checkout}/>}

        <Logout />
           
    </div>
  )
}

export default ContainerCar

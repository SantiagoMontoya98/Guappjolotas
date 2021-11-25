import { Button, ButtonContainer } from '../styles/AgregarCarritoStyles'

const AgregarCarrito = (props) => {  
  
  return (

    <ButtonContainer>

      <Button>
        <p>Agregar {props.cantidad} al carrito</p>
        <p>${props.total}.00</p>
      </Button>

    </ButtonContainer>

  )
}

export default AgregarCarrito

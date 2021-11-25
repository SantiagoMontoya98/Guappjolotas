import React from 'react'
import { Button, ButtonContainer } from '../styles/PagarStyles'

const Pagar = ({click, noProducts}) => {  

  return (

    <ButtonContainer onClick={click}>

      <Button id={noProducts}>
        <p>Pagar</p>        
      </Button>

    </ButtonContainer>

  )
}

export default Pagar

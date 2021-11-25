import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root{    
    --color-negro: #0D0D0D;
    --color-naranjado: #FA4A0C;
    --color-gris: #E7E7E7;
    --color-gris-oscuro: #9A9A9D;
    --color-blanco: #FFF;    
  }

  html{
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    overflow-x: hidden;
    background-color: #F2F2F2;
  }

  .link {
    font-size: 17px;
    font-family: "Inter Regular", sans-serif;
    text-decoration-line: none;
    color: var(--color-gris-oscuro);
    position: relative;
  }

  .current::after{
    content: " ";
    width: 100%;
    height: 3px;
    background-color: #FA4A0C;
    position: absolute;
    top: 29px;    
    left: 0;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(196, 63, 21, 0.1);
  }

  .products/* :-webkit-any-link */ {
    color: var(----color-blanco);
    cursor: pointer;
    text-decoration-line: none;
    width: 100%;
  }

  .text-carrito,
  .text-regresar{
    text-decoration-line: none;    
  }  

  .none{
    display: none;
  }

  #opacity-0 {
    cursor: default;    
  }  

  #opacity-1 {
    opacity: 1;    
  }

  #no-products{
    opacity: 0.5;
    cursor: default;
  }

  #no-products:hover{
    transform: scale(1);
  }

  .link{
    text-decoration-line: none;
  }

  .buttonsCar{
    width: 100%;
    height: 35%;
    text-decoration-line: none;
  }

  .margin{
    margin-right: 20px;
  }  

  .boton{
    background-color: var(--color-naranjado);
    border-color: var(--color-naranjado);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .boton:hover{
    background-color: var(--color-naranjado);
    border-color: var(--color-naranjado);
    opacity: 0.9;    
  }

  .inputFocus:focus{
    box-shadow: 0px 0px 4px 3px var(--color-naranjado);
    color: var(--color-naranjado);    
  }

  .input{
    color: var(--color-naranjado);
    font-family: "Inter Regular", sans-serif;
  }  
  
  p{
    margin-top: 1rem;
  }

  a:hover{
    color: var(--color-negro);
  }

  .logout{
    color: var(--color-gris-oscuro);
    transition: color 300ms ease;
  }

  .logout:hover{
    color: #FA4A0C;
  }

  .cancel{
    color: var(---color-negro);
    text-decoration-line: none;
  }
  
`;

export default GlobalStyles;
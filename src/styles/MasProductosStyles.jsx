import styled from "styled-components";

export const ProductsContainer = styled.section`

  /* background-color: red; */
  width: 312px;  
  margin-top: 30px;
  margin-right: auto;
  margin-bottom: 40px;
  margin-left: auto;  

`;

export const P1 = styled.p`

  /* background-color: green; */
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-size: 20px;

`;

export const P2 = styled.p`

  /* background-color: yellow; */
  margin-top: 5px;
  margin-bottom: 25px;
  font-family: "Inter Regular", sans-serif;
  font-size: 15px;
  color: var(--color-gris-oscuro);

`;

export const Products = styled.section`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: aquamarine; */

`;

export const ProductsRow1 = styled.section`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: coral; */
  width: 100%;
  height: 147px;

`;

export const ProductsRow2 = styled.section`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: lightgreen; */
  width: 100%;
  height: 147px;

`;

export const ProductsRow3 = styled.section`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* background-color: black; */
  width: 100%;  

`;

export const Card = styled.article`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  width: 152px;
  height: 138px;
  background: var(--color-blanco);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  position: relative;

`;

export const CheckBox = styled.input`

  position: absolute;
  top: 20px;
  right: 20px;
  width: 18px;
  height: 18px;
  outline: 2px solid black;
  cursor: pointer;

`;

export const ProductName = styled.p`

  margin: 5px 0;
  font-family: "Inter", sans-serif;
  font-size: 12px;  

`;

export const ProductPrice = styled.p`

  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  color: var(--color-naranjado)

`;
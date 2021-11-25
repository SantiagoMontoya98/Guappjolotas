import styled from "styled-components";

export const ProductsContainer = styled.section`

  width: 312px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  height: 70vh;

`;

export const Product = styled.article`

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */

`;

export const ContainerImgyP = styled.section`

  /* background-color: blue; */
  display: flex;
  align-items: center;  
  width: 224px;

`;

export const ImgProduct = styled.img`

  width: 56px;
  height: 56px;

`;

export const ProductInfo = styled.section`

  display: flex;
  flex-direction: column;
  /* background-color: lightblue; */
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  height: 68px;

`;

export const ProductName = styled.p`

  margin:0;
  font-family: "Inter Regular", sans-serif;
  font-size: 12px;
  font-weight: 500;

`;

export const ProductAmount = styled.p`

  margin: 0;
  margin-top: 1px;
  font-family: "Inter Regular", sans-serif;  
  font-size: 12px;
  font-weight: 500;
  color: var(--color-naranjado);  

`;

export const ProductPrice = styled.p`

  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: var(--color-naranjado);

`;

export const Total = styled.article`

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aquamarine; */
  margin-top: 5px;
  background-color: var(--color-blanco);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

`;

export const TotalText = styled.p`

  font-family: "Inter", sans-serif;
  font-size: 17px;
  margin-left: 15px;

`;

export const TotalAmount = styled.p`

  font-family: "Inter", sans-serif;
  font-size: 17px;
  color: var(--color-naranjado);
  margin-right: 15px;

`;
import styled from "styled-components";

export const ContainerMain = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

`;

export const HeaderContainer = styled.section`

  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  width: 312px;
  margin-left: auto;
  margin-right: auto;

`;

export const FormStyle = styled.form`

  width: 220px;  
  position: relative;

`;

export const SearcherStyle = styled.input`

    width: 100%;
    height: 60px;
    border-radius: 30px;
    outline-width: 0;
    background-color: var(--color-gris);
    border-width: 0;
    font-family: "Inter Regular", sans-serif;
    font-size: 17px;
    padding-left: 50px;

`;

export const ImgLupa = styled.img`

  position: absolute;  
  top: 20px;
  left: 25px;

`;

export const ProductsContainer = styled.section`

  /* background-color: green; */
  display: flex;
  flex-direction: column;
  width: 312px;
  margin-left: auto;
  margin-right: auto;

`;

export const PCancelar = styled.p`

  cursor: pointer;
  font-family: "Inter";
  font-size: 17px;

`;

export const PProducts = styled.p`

  cursor: pointer;
  font-family: "Inter";
  font-size: 20px;  
  margin-bottom: -5px;
  margin-top: 30px;

`;

export const Products = styled.section`

  width: 312px;
  height: 592px;
  margin-left: auto;
  margin-right: auto;
  /* background-color: green; */
  margin-bottom: 120px;
  margin-top: 20px;

`;

export const Product = styled.article`

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 112px;
  background-color: var(--color-blanco);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  margin-bottom: 10px;

`;

export const ProductDescription = styled.article`

  width: 184px;
  height: 46px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const ProductName = styled.p`

  font-family: "Inter";
  /* font-weight: 600; */
  font-size: 17px;
  margin: 0;

`;

export const ProductPrice = styled.p`

  font-family: "Inter";
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  color: var(--color-naranjado);

`;

export const LensContainer = styled.section`

  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const PLens = styled.p`

  font-family: "Inter", sans-serif;
  font-size: 17px;
  margin-top: 25px;

`;



import styled from "styled-components";

export const ProductContainer = styled.section`

  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 312px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -90px;

`;

export const ImgProduct = styled.img`

  width: 150px;
  height: 150px;  

`;

export const Img2 = styled.img`

  width: 70px;
  height: 70px;
  /* transform: translate(172px, -80px); */
  position: absolute;
  top: 60px;
  right: -30px;

`;

export const Img3 = styled.img`

  width: 70px;
  height: 70px;
  /* transform: translate(172px, -80px); */
  position: absolute;
  top: 60px;
  left: -30px;
  border-width: 0;

`;

export const H2Text = styled.h2`

  /* background-color: green; */
  font-family: "Inter Regular", sans-serif;
  font-weight: 600;
  width: 200px;
  text-align: center;
  font-size: 28px;
  margin-bottom: 0;

`;

export const Price = styled.p`

  font-family: "Inter Regular", sans-serif;
  font-weight: 600;
  color: var(--color-naranjado);
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 15px;
  /* background-color: black; */

`;

export const AmountContainer = styled.article`
 
  width: 190px;
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: var(--color-blanco);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);

`;

export const Amount = styled.p`

  font-family: "Inter Regular";
  font-weight: 600;
  font-size: 22px;  

`;

export const ImgLess = styled.img`

  opacity: 0.2;
  cursor: pointer;

`;

export const ImgMore = styled.img`
  
  cursor: pointer;

`;
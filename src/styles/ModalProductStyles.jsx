import styled from "styled-components";

export const ProductContainer = styled.section`

  width: 312px;  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 24px 0;
  margin-top: 25px;
  margin-bottom: 25px;
  /* background-color: red; */
  border-radius: 20px;
  box-shadow: 0px 0px 20px 2px black;

`;

export const ImgProduct = styled.img`

  width: 80px;
  height: 80px;  

`;

export const H2Text = styled.h2`

  /* background-color: green; */
  font-family: "Inter Regular", sans-serif;
  font-weight: 600;
  width: 200px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 0;

`;

export const Price = styled.p`

  font-family: "Inter Regular", sans-serif;
  font-weight: 600;
  color: var(--color-naranjado);
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* background-color: black; */

`;

export const ButtonContainer = styled.section`

  width: 270px;
  height: 180px;
  /* background-color: green; */
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;  
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

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

export const Button1 = styled.button`

  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-naranjado);
  border-width: 0;
  border-radius: 40px;
  font-family: "Inter Regular", sans-serif;  
  font-size: 17px;
  color: #F6F6F9;
  cursor: pointer;
  transition: transform 500ms ease;

  &:hover {    
    transform: scale(0.98);
  }

`;

export const Button2 = styled.button`

  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-naranjado);
  border-width: 0;
  border-radius: 40px;
  margin-bottom: 20px;
  font-family: "Inter Regular", sans-serif;  
  font-size: 17px;
  color: #F6F6F9;
  cursor: pointer;
  transition: transform 500ms ease;

  &:hover {    
    transform: scale(0.98);
  }

`;

export const Button3 = styled.button`

  width: 100%;
  height: 35%; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  border-width: 0;  
  border-radius: 40px;  
  font-family: "Inter", sans-serif;  
  font-size: 17px;
  color: var(--color-naranjado);
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {    
    font-size: 16px;
  }

`;
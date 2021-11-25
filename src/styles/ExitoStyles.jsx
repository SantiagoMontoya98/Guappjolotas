import styled from "styled-components";

export const ContainerMain = styled.section`

  width: 312px;
  margin-left: auto;
  margin-right: auto;

`;

export const Header = styled.header`

  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0 20px;
  width: 100%;

`;

export const ImgLogo = styled.img`
  
  height: 64px;
  cursor: pointer;

`;

export const TextContainer = styled.section`

  display: flex;
  flex-direction: column;  
  /* background-color: green; */
  justify-content: flex-start;
  align-items: center;

`;

export const H1Text = styled.h1`

  font-family: "Inter", sans-serif;
  font-size: 28px;
  margin-top: 25px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

`;

export const H2Text = styled.h2`

  font-family: "Inter", sans-serif;
  font-size: 22px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 20px;

`;

export const Inicio = styled.span`

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: violet; */
  font-family: "Inter Regular", sans-serif;
  color: var(--color-negro);
  margin-left: 30px;

`;
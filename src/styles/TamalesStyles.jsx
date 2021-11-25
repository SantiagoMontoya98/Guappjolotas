import styled from "styled-components";

export const TamalesContainer = styled.section`

  width: 312px;
  height: 592px;
  margin-left: auto;
  margin-right: auto;
  /* background-color: green; */
  margin-bottom: 120px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;

`;

export const Tamal = styled.article`

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 112px;
  background-color: var(--color-blanco);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

`;

export const TamalDescription = styled.article`

  width: 184px;
  height: 46px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const TamalName = styled.p`

  font-family: "Inter";
  /* font-weight: 600; */
  font-size: 17px;
  margin: 0;

`;

export const TamalPrice = styled.p`

  font-family: "Inter";
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  color: var(--color-naranjado);

`;

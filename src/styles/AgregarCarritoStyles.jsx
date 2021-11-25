import styled from "styled-components";

export const ButtonContainer = styled.section`

  width: 312px;
  height: 69px;
  /* background-color: red; */
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;  
  margin-bottom: 20px;

`;

export const Button = styled.button`

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
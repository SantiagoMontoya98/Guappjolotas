import React from 'react';
import { Link } from 'react-router-dom';
import { FormStyle, ImgLupa, SearcherStyle } from '../styles/SearcherStyles';

const Searcher = () => {
  return (
    
    <FormStyle>      

      <Link to="/buscador">
      
        <ImgLupa src="https://i.imgur.com/ooNjXdu.png" alt="Lupa" />
        <SearcherStyle type="text" placeholder="Sabor de Guajolota, bebida..." />
      
      </Link>

    </FormStyle>


  )
}

export default Searcher;

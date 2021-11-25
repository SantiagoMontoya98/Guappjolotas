import React, {useEffect, useState} from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ButtonContainer, FormContainer, H1Text, ImgRow, NotFound } from '../styles/FormLoginStyles'
import {users} from '../helpers/url'

const FormLogin = ({url}) => {

  const [user, setUser] = useState({
    
    email: "",
    password: ""

  });

  const [none, setNone] = useState("none")

  const [dataUsers, setDataUsers] = useState([])

  const getData = async () => {

    let resp = await fetch(users);

    let data = await resp.json();

    setDataUsers(data);

  }

  useEffect(() => {
    
    getData();

  }, [])

  const handleChange = ({target}) => {

    setUser({

      ...user,

      [target.name]: target.value

    })

  }

  const handleClick = () => {

    let {name, email, password} = dataUsers.find(el => el.email.toLowerCase() === user.email.toLowerCase());

    if(password === user.password) {

      setNone("none")
      
      localStorage.setItem("user", JSON.stringify({

        name,
        email,
        password

      }));

      setTimeout(() => {

        window.location.reload();

        console.log("reload");
      
      }, 300);

    }else{

      setNone("")

    }

  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
  
  }
  
  return (

    <FormContainer onSubmit={handleSubmit}>

      <Link to="/">
      
        <ImgRow src="https://i.imgur.com/08IQPBc.png" alt="" />

      </Link>      

      <H1Text>Iniciar Sesión</H1Text>

      <FloatingLabel
        controlId="floatingInput"
        label="Correo electronico"
        className="mb-3">

        <Form.Control 
          type="text" 
          placeholder="Correo electronico"   
          className="inputFocus input"
          name="email"
          onChange={handleChange}
          required/>

      </FloatingLabel>     

      <FloatingLabel 
        controlId="floatingPassword" 
        label="Contraseña">

        <Form.Control 
          type="password" 
          placeholder="Contraseña" 
          className="inputFocus input"
          name="password"
          onChange={handleChange}
          required/>

      </FloatingLabel>

      <ButtonContainer>

        <Link to={url}>
        
          <Button 
            variant="success" 
            type="submit" 
            className="margin"
            onClick={handleClick}>
            Ingresar
          </Button>
        
        </Link>


        <Link to="/registro">
        
          <Button as="input" type="button" value="Registrarse" className="boton"/>

        </Link>

      </ButtonContainer>

      <NotFound className={none}>Datos incorrectos</NotFound>

      
    </FormContainer>

  )
}

export default FormLogin

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBarContainer } from '../styles/NavBarStyles'

export default class NavBar extends Component {

  constructor(props){

    super(props);

    this.state = {

      guajolotas: this.props.gColor,

      bebidas: this.props.bColor,

      tamales: this.props.tColor,

      gCurrent: this.props.gCurrent,

      bCurrent: this.props.bCurrent,

      tCurrent: this.props.tCurrent

    }

  }

  changeStyle = (e) =>{

    if(e.target.matches("#guajolotas")){

      this.setState({

        guajolotas: "var(--color-naranjado)",

        bebidas: "",

        tamales: "",

        gCurrent: "current",

        bCurrent: "",

        tCurrent: ""

      })

    }

    if(e.target.matches("#drinks")){

      this.setState({

        guajolotas: "",

        bebidas: "var(--color-naranjado)",

        tamales: "",

        gCurrent: "",

        bCurrent: "current",

        tCurrent: ""

      })

    }

    if(e.target.matches("#tamales")){

      this.setState({

        guajolotas: "",

        bebidas: "",

        tamales: "var(--color-naranjado)",

        gCurrent: "",

        bCurrent: "",

        tCurrent: "current"
        

      })

    }    

  }

  render(){

    return (

      <NavBarContainer>

        <Link to="/guajolotas" style={{color: this.state.guajolotas}} className = {`link ${this.state.gCurrent}`} id="guajolotas" onClick={this.changeStyle}>
          Guajolotas
        </Link>

        <Link to="/bebidas" style={{color: this.state.bebidas}} className={`link ${this.state.bCurrent}`} id="drinks"  onClick={this.changeStyle}>
          Bebidas      
        </Link>

        <Link to="/tamales" style={{color: this.state.tamales}} className={`link ${this.state.tCurrent}`} id="tamales" onClick = {this.changeStyle}>        
          Tamales
        </Link>

      </NavBarContainer>

    )

  }

}

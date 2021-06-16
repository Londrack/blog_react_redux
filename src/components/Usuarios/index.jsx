import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as usuariosActions from '../../actions/usuariosActions'

import Loader from '../General/Loader'
import Fatal from '../General/Fatal'
import Tabla from './Tabla'

import '../../css/iconos.css'

class Usuarios extends Component {

  componentDidMount(){
    if(!this.props.usuarios.length){
      this.props.traerTodos();
    }
  }

  ponerContenido = () => {
    if(this.props.cargando){
      return <Loader />
    }

    if(this.props.error){
      return <Fatal mensaje={this.props.error} />
    }

    return <Tabla />
  }

  render () {
    return (
      <div>
        <h1>Usuarios</h1>
        { this.ponerContenido() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
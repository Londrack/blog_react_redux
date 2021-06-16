import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu'
import Usuarios from './Usuarios'
import Publicaciones from './Publicaciones'
import Tareas from './Tareas'
import TareasGuardar from './Tareas/Guardar'


const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="contenedor">
      <Route exact path='/blog_react_redux/' component={ Usuarios } />
      <Route exact path='/blog_react_redux/tareas' component={ Tareas } />
      <Route exact path='/blog_react_redux/publicaciones/:key' component={ Publicaciones} />
      <Route exact path='/blog_react_redux/tareas/guardar' component={ TareasGuardar } />
      <Route exact path='/blog_react_redux/tareas/guardar/:usu_id/:tar_id' component={ TareasGuardar } />
    </div>
  </BrowserRouter>
)

export default App
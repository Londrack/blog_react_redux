import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => (
    <nav id='menu'>
        <Link to='/blog_react_redux/'>Usuarios</Link>
        <Link to='/blog_react_redux/tareas'>Tareas</Link>
    </nav>
)

export default Menu

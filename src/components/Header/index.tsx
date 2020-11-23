import React from 'react'
import { Link, animateScroll } from 'react-scroll'
// import { Link } from 'react-router-dom'

import {
  Header as HeaderContainer,
  Logo
} from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer data-menu>
      <Logo onClick={animateScroll.scrollToTop} to="/">Nature</Logo>
      <nav>
        <ul>
          <li><Link smooth={true} offset={-10} to="animais" data-menu="animais">Animais</Link></li>
          <li><Link smooth={true} offset={-10} to="florestas" data-menu="florestas">Florestas</Link></li>
          <li><Link smooth={true} offset={-10} to="montanhas" data-menu="montanhas">Montanhas</Link></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header
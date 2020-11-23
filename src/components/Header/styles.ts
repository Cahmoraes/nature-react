import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: #56CC9D;
  top: 0;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr auto;

  nav ul {
    display: flex;
    li {
      padding: 1.5rem 2rem;
      text-decoration: none;
      font-family: monospace;
      text-transform: uppercase;
      font-size: 2rem;
      letter-spacing: 2px;
      a {
        color: white;
        transition: .3s;
        cursor: pointer;
        &::after {
          content: '';
          display: block;
          background: white;
          height: 2px;
          width: 0;
          transition: .3s;
        }
        &:hover::after, &.active::after {
          width: 100%;
        }
      }
    }
  }
`

export const Logo = styled(Link)`
    color: white;
    font-family: 'Playfair Display';
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 3.2rem;
    cursor: pointer;
`
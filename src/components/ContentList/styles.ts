import styled, { css } from 'styled-components'

interface IItemProps {
  op: 'vertical' | 'horizontal'
}

export const Container = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 0;

  h1 {
    font-size: 4rem;
    text-align: center;
    color: #3B3B3B;
  }
`

export const TabMenu = styled.ul`
  text-align: center;
  margin: 20px 0 40px 0;
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, -30px, 0);
  transition: .3s ease-in;


  &.active {
    opacity: 1;
    transform: initial;
  }


  li {
    display: inline-block;
    a {
      display: inline-block;
      color: #56CC9D;
      border: 4px solid;
      padding: 10px 0px;
      width: 200px;
      margin: 20px;
      text-decoration: none;
      font-family: 'Playfair Display';
      text-transform: uppercase;
      letter-spacing: 2px;
      &.active {
        background: #56CC9D;
        color: white;
        border-color: #56CC9D;
      }
    }
  }
`

export const Item = styled.div<IItemProps>`
  overflow: hidden;

  &[data-target] {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-50px,0,0);
    position: absolute;
    top: 0;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transition: .3s;
    position: relative;
    top: auto;
    transform: translate3d(0px,0,0);
  }
  .item-img {
    position: relative;
    ${({ op }) => op === 'horizontal' ? (
    css`
        width: 100%;
        text-align: center;
        margin-bottom: -8px;
        padding: 0px;
      `
  ) : (
      css`
        width: 50%;
        float: left;
        text-align: right;
        padding-right: 40px;
      `
    )}

    img {
      display: block;
      max-width: 100%;
      float: right;
    }
    
    h2 {
      display: inline-block;
      padding: 0 20px 6px 20px;
      min-width: 200px;
      text-align: center;
      font-size: 2em;
      text-transform: uppercase;
      position: relative;
      background: #FF4338;
      color: white;
      letter-spacing: 5px;

      ${({ op }) => op === 'horizontal' ?
    (
      css`
          top: -25px;
          right: auto;
        `
    ) : (
      css`
      top: -120px;
      right: -10px;
        `
    )}
    }
  }

  .item-info {
    float: left;
    ${({ op }) => op === 'horizontal' ? (
    css`
        width: 100%;
      `
  ) : (
      css`
        width: 50%;
      `
    )}

    & > div {
      width: 50%;
      float: left;
    }

    h3 {
      font-size: 1.4em;
      letter-spacing: 1px;
      color: #56CC9D;
    }
    p {
      font-family: monospace;
      font-size: 1.5em;
      line-height: 1.4;
      color: rgba(0,0,0,.7);
      margin-bottom: 40px;
    }
  }
`
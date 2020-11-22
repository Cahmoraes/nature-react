import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  & > * {
    width: 100%;
  	position: absolute;
  	opacity: 0;
  	transition: 2s;
  }
  .active {
    position: relative;
	  opacity: 1;
  }

  h2 {
    color: white;
    text-align: center;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: -2em;
    margin-bottom: 2em;
    line-height: 0;
  }
`
import React from 'react'
import Home from '../pages/Home'
import Route from './route'

const Routes: React.FC = () => {
  return (
    <Route path="/" component={Home} exact />
  )
}

export default Routes
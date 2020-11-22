import React from 'react'
import {
  Route as RouteDOM,
  RouteProps as RoutePropsDOM,
  Redirect
} from 'react-router-dom'

interface RouteProps extends RoutePropsDOM {
  isPrivate?: boolean,
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  return (
    <RouteDOM
      {...rest}
      render={({ location }) => isPrivate ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      ) : (
          <Component />
        )}
    />
  )
}

export default Route
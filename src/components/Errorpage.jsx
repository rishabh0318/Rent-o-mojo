import React from 'react'
import { NavLink,useRouteError } from 'react-router-dom'

const Errorpage = () => {
    const error=useRouteError();
  return (
    <div>
        <h1>Opps ! An error occured.</h1>
        {error&& <p>{error.data}</p>}
        <NavLink to="/">
        <button>GO Home</button>
        </NavLink>
    </div>
  )
}

export default Errorpage
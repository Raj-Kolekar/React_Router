import React from 'react'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
    <Home />
    <Outlet />
    </div>
  )
}

export default Layout

import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = React.memo(({ navItems }) => {
  const totalCartCount = useSelector((state) => state.cart.items.length)

  return (
    <nav className="navbar">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {label}
          {to === '/cart' ? ` (${totalCartCount})` : ''}
        </NavLink>
      ))}
    </nav>
  )
})

export default Navbar

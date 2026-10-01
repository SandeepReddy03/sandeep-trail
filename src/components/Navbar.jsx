import { NavLink } from 'react-router-dom'

export default function Navbar({ navItems, cartCount }) {
  return (
    <nav className="navbar">
      {navItems.map(({ to, label }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
          {label}
          {to === '/cart' ? ` (${cartCount})` : ''}
        </NavLink>
      ))}
    </nav>
  )
}

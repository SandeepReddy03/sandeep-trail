import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import { navItems } from '../constants/appConfig'

export default function CartPage() {
  const cart = []
  const total = 0

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} cartCount={cart.length} />

      <section className="page-section">
        <SectionTitle title="Cart" description="Your selected items." />
        <div className="empty-state">Your cart is empty.</div>
        <div className="cart-total">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </section>
    </div>
  )
}

import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import FooterSection from '../components/FooterSection'
import { navItems } from '../constants/appConfig'
import { updateCartItemQuantity, removeFromCart } from '../store/cartSlice'

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const decreaseQuantity = (id, quantity) => {
    const nextQuantity = Math.max(1, quantity - 1)
    dispatch(updateCartItemQuantity({ id, quantity: nextQuantity }))
  }

  const increaseQuantity = (id, quantity) => {
    dispatch(updateCartItemQuantity({ id, quantity: quantity + 1 }))
  }

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} />

      <section className="page-section">
        <SectionTitle title="Cart" description="Your selected items." />

        {cart.length === 0 ? (
          <div className="empty-state">Your cart is empty.</div>
        ) : (
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                </div>

                <div className="quantity-controls">
                  <button type="button" onClick={() => decreaseQuantity(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => increaseQuantity(item.id, item.quantity)}>+</button>
                </div>

                <button type="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

export default CartPage

import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import useFetchData from '../hooks/useFetchData'
import useQuantity from '../hooks/useQuantity'
import { API_URLS, navItems } from '../constants/appConfig'
import { addToCart } from '../store/cartSlice'

const PostDetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items, loading, error } = useFetchData(`${API_URLS.posts}/${id}`, null)
  const { quantity, decrementQuantity, incrementQuantity } = useQuantity(1)
  const cartItems = useSelector((state) => state.cart.items)

  const post = items ?? {}
  const isInCart = cartItems.some((item) => item.id === Number(id))

  const handleAddToCart = () => {
    if (!post?.id) return

    dispatch(
      addToCart({
        id: Number(post.id),
        title: post.title ?? 'Untitled post',
        body: post.body ?? 'No description available',
        price: 49.99,
        quantity,
      }),
    )
  }

  if (loading) return <SectionTitle title="Post Details" description="Loading post..." />
  if (error) return <SectionTitle title="Post Details" description={`Failed to load post: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} />

      <section className="page-section">
        <Link to="/posts" className="back-link">← Back to posts</Link>

        <SectionTitle title={post?.title ?? 'Post detail'} description="Detailed view of the selected post." />

        <div className="card">
          <span className="card-badge">Post #{post?.id ?? id}</span>
          <h3>{post?.title ?? 'Untitled post'}</h3>
          <p>{post?.body ?? 'No description available'}</p>

          <div className="quantity-controls">
            <button type="button" onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={incrementQuantity}>+</button>
          </div>

          <button type="button" className="add-cart-button" onClick={handleAddToCart} disabled={isInCart}>
            {isInCart ? 'Added to cart' : 'Add to cart'}
          </button>
        </div>
      </section>
    </div>
  )
}

export default PostDetailPage

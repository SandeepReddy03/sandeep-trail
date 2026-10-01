import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostsPage from './pages/PostsPage'
import UsersPage from './pages/UsersPage'
import CommentsPage from './pages/CommentsPage'
import CartPage from './pages/CartPage'
import AlbumsPage from './pages/AlbumsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const PostsPage = lazy(() => import('./pages/PostsPage'))
const PostDetailPage = lazy(() => import('./pages/PostDetailPage'))
const UsersPage = lazy(() => import('./pages/UsersPage'))
const CommentsPage = lazy(() => import('./pages/CommentsPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const AlbumsPage = lazy(() => import('./pages/AlbumsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

import './App.css'

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="loading-state">Loading page...</div>}>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default App

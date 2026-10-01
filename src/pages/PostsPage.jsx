import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import FooterSection from '../components/FooterSection'
import useFetchData from '../hooks/useFetchData'
import { API_URLS, navItems } from '../constants/appConfig'

const PostsPage = () => {
  const navigate = useNavigate()
  const { items, loading, error } = useFetchData(API_URLS.posts)

  const visiblePosts = useMemo(() => items?.slice(0, 6) ?? [], [items])

  const handleCardClick = useCallback(
    (postId) => {
      navigate(`/posts/${postId}`)
    },
    [navigate],
  )

  if (loading) return <SectionTitle title="Posts" description="Loading posts..." />
  if (error) return <SectionTitle title="Posts" description={`Failed to load posts: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} />

      <section className="page-section">
        <SectionTitle title="Posts" description="Recent posts from JSONPlaceholder." />
        <div className="card-grid">
          {visiblePosts.map((post, index) => (
            <DataCard
              key={post?.id ?? `post-${index}`}
              badge={`Post #${post?.id ?? ''}`}
              title={post?.title ?? 'Untitled post'}
              description={post?.body ?? 'No description available'}
              onClick={() => handleCardClick(post?.id)}
            >
            </DataCard>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

export default PostsPage

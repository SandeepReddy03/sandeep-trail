import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import useFetchData from '../hooks/useFetchData'
import { API_URLS, navItems } from '../constants/appConfig'

export default function PostsPage() {
  const { items, loading, error } = useFetchData(API_URLS.posts)

  if (loading) return <SectionTitle title="Posts" description="Loading posts..." />
  if (error) return <SectionTitle title="Posts" description={`Failed to load posts: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} cartCount={0} />

      <section className="page-section">
        <SectionTitle title="Posts" description="Recent posts from JSONPlaceholder." />
        <div className="card-grid">
          {items?.slice(0, 12).map((post) => (
            <DataCard key={post?.id} badge={`Post #${post?.id}`} title={post?.title} description={post?.body}>
              <button type="button">Add to cart</button>
            </DataCard>
          ))}
        </div>
      </section>
    </div>
  )
}

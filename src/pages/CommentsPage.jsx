import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import useFetchData from '../hooks/useFetchData'
import { API_URLS, navItems } from '../constants/appConfig'

export default function CommentsPage() {
  const { items, loading, error } = useFetchData(API_URLS.comments)

  if (loading) return <SectionTitle title="Comments" description="Loading comments..." />
  if (error) return <SectionTitle title="Comments" description={`Failed to load comments: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} cartCount={0} />

      <section className="page-section">
        <SectionTitle title="Comments" description="Recent comments from JSONPlaceholder." />
        <div className="card-grid">
          {items?.slice(0, 12).map((comment) => (
            <DataCard
              key={comment?.id}
              badge={`Comment #${comment?.id}`}
              title={comment?.name}
              subtitle={comment?.email}
              description={comment?.body}
              accent="gray"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

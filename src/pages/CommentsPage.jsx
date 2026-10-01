import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import FooterSection from '../components/FooterSection'
import useFetchData from '../hooks/useFetchData'
import { API_URLS, navItems } from '../constants/appConfig'

const CommentsPage = () => {
  const { items, loading, error } = useFetchData(API_URLS.comments)

  if (loading) return <SectionTitle title="Comments" description="Loading comments..." />
  if (error) return <SectionTitle title="Comments" description={`Failed to load comments: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} />

      <section className="page-section">
        <SectionTitle title="Comments" description="Recent comments from JSONPlaceholder." />
        <div className="card-grid">
          {items?.slice(0, 12).map((comment) => (
            <DataCard
              key={comment?.id ?? Math.random()}
              badge={`Comment #${comment?.id ?? ''}`}
              title={comment?.name ?? 'Untitled comment'}
              subtitle={comment?.email ?? 'No email'}
              description={comment?.body ?? 'No comments available'}
              accent="gray"
            />
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

export default CommentsPage

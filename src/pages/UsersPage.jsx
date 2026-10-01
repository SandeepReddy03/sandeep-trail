import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import FooterSection from '../components/FooterSection'
import useFetchData from '../hooks/useFetchData'
import { API_URLS, navItems } from '../constants/appConfig'

const UsersPage = () => {
  const { items, loading, error } = useFetchData(API_URLS.users)

  if (loading) return <SectionTitle title="Users" description="Loading users..." />
  if (error) return <SectionTitle title="Users" description={`Failed to load users: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} />

      <section className="page-section">
        <SectionTitle title="Users" description="People available in the sample dataset." />
        <div className="card-grid">
          {items?.map((user) => (
            <DataCard
              key={user?.id ?? Math.random()}
              badge={`User #${user?.id ?? ''}`}
              title={user?.name ?? 'Unknown user'}
              subtitle={user?.username ?? 'No username'}
              description={`${user?.email ?? 'N/A'} • ${user?.company?.name ?? 'N/A'} • ${user?.address?.city ?? 'N/A'}`}
              accent="green"
            />
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

export default UsersPage

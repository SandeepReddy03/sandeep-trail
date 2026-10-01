import NavBar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import useFetchData from '../hooks/useFetchData'
import { API_URLS, navItems } from '../constants/appConfig'

export default function UsersPage() {
  const { items, loading, error } = useFetchData(API_URLS.users)

  if (loading) return <SectionTitle title="Users" description="Loading users..." />
  if (error) return <SectionTitle title="Users" description={`Failed to load users: ${error}`} />

  return (
    <div className="app-shell">
      <NavBar navItems={navItems} cartCount={0} />

      <section className="page-section">
        <SectionTitle title="Users" description="People available in the sample dataset." />
        <div className="card-grid">
          {items?.map((user) => (
            <DataCard
              key={user?.id}
              badge={`User #${user?.id}`}
              title={user?.name}
              subtitle={user?.username}
              description={`${user?.email ?? 'N/A'} • ${user?.company?.name ?? 'N/A'} • ${user?.address?.city ?? 'N/A'}`}
              accent="green"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

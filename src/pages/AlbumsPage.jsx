import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import DataCard from '../components/DataCard'
import FooterSection from '../components/FooterSection'
import { navItems } from '../constants/appConfig'
import { fetchAlbums } from '../store/albumsSlice'

const AlbumsPage = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.albums)

  const loadAlbums = useCallback(() => {
    dispatch(fetchAlbums())
  }, [dispatch])

  useEffect(() => {
    loadAlbums()
  }, [loadAlbums])

  if (loading) return <SectionTitle title="Albums" description="Loading albums..." />
  if (error) return <SectionTitle title="Albums" description={`Failed to load albums: ${error}`} />

  return (
    <div className="app-shell">
      <Navbar navItems={navItems} />

      <section className="page-section">
        <SectionTitle title="Albums" description=" Albums stored in Redux from JSONPlaceholder." />
        <div className="card-grid">
          {items?.slice(0, 12).map((album) => (
            <DataCard
              key={album?.id ?? Math.random()}
              badge={`Album #${album?.id ?? ''}`}
              title={album?.title ?? 'Untitled album'}
              accent="green"
            />
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

export default AlbumsPage

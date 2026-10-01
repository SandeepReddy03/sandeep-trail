import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import FooterSection from '../components/FooterSection'
import { navItems } from '../constants/appConfig'

const NotFoundPage = () => (
  <div className="app-shell">
    <Navbar navItems={navItems} />

    <section className="page-section">
      <SectionTitle title="404 - Page Not Found" description="The page you are looking for does not exist or has been moved." />

      <div className="card empty-state" style={{ textAlign: 'center', padding: '2rem' }}>
        <h3>Oops! We could not find that route.</h3>
        <p>Please go back to the dashboard or visit one of the available pages.</p>
        <Link to="/posts" className="back-link">Go to Posts</Link>
      </div>
    </section>

    <FooterSection />
  </div>
)

export default NotFoundPage

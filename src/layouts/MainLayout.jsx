import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import ScrollToTop from '../components/common/ScrollToTop'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default MainLayout
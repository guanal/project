import Hero from '../components/home/Hero'
import MissionSection from '../components/home/MissionSection'
import RecentActivities from '../components/home/RecentActivities'
import ImpactStats from '../components/home/ImpactStats'
import JoinCTA from '../components/home/JoinCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <MissionSection />
      <ImpactStats />
      <RecentActivities />
      <JoinCTA />
    </>
  )
}

export default Home
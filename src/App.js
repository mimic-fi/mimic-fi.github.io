import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Security from './sections/Security'
import TrackActivity from './sections/TrackActivity'
import Footer from './sections/Footer'
import LearnMore from './sections/LearnMore'
import SmartVaults from './sections/SmartVaults'
import WorkSmarter from './sections/WorkSmarter'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SmartVaults />
      <Security />
      <WorkSmarter />
      <TrackActivity />
      <LearnMore />
      <Footer />
    </div>
  )
}

export default App

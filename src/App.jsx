import React from 'react'
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Package,
  Stats,
  Testimonials,
} from './components'
import styles from './style'
import Expert from './components/Expert'
import Token from './components/Token'


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Token />
          <CardDeal />
          <Testimonials />
          {/* <Clients /> */}
          <CTA />
          <Package />
          <Expert />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
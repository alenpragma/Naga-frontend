import React from 'react'
import {
  Billing,
  Business,
  CardDeal,
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
import Faq from './components/Faq'


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
          <CTA />
          <Package />
          <Expert />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
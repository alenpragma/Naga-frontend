import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-0' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' />we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We will also provide you with advanced investment strategies including brokerage services and investment assistance in several profitable areas such as forex market trading, cryptocurrency, and stock market trading.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our mission is to facilitate investors to achieve sustainable profits through the most advanced investment tools and dynamic strategies. We are committed to achieving maximum returns for investors.
        </p>
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}>
          <a href="https://my.nagatrade.info/register?_ga=2.168619688.846724718.1691733495-1123424949.1689999412&_gl=1*9fyafx*_ga*MTEyMzQyNDk0OS4xNjg5OTk5NDEy*_ga_NDS0GXZLWB*MTY5MTczMzQ5NS4xNC4xLjE2OTE3MzQ1MDQuMC4wLjA.*_ga_36F2K585WP*MTY5MTczMzQ5NS4xNC4xLjE2OTE3MzQ1MDQuMC4wLjA." target="_blank">Get Started</a>
        </button>

      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business

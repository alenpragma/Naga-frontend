import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import { Helmet } from 'react-helmet-async'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <Helmet>
        <title>Nagatrade | Billing</title>
      </Helmet>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.title}>About cryptoads</h2>
        <h2 className={`${styles.heading2} ss:leading-[60px]`}>Best Cryptocurrency Advertising and PR Agency</h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          CryptoAds (CADS) is a vast ecosystem of interconnected Web 3.0 blockchain solutions created with a clear mission: to introduce millions of people to the world of cryptocurrencies by making crypto as accessible and easy-to-use as possible. By doing that, CryptoAds (CADS) is aiming to greatly accelerate global blockchain adoption, and make blockchain and crypto as popular and as common as mainstream social media platforms.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-5 mt-3 gap-10'>
          {/* <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          /> */}
          <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}>
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Billing

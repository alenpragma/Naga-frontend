import React from 'react'
import { packageFeature } from '../constants'
import styles from '../style'

const Package = () => {
    return (
        <section id='package' className='my-20'>
            <div className='flex-1 flex flex-col'>
                <h2 className={styles.heading3}>Let's try our service now!</h2>
                <p className={`${styles.paragraph3} mt-5`}>
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 my-10'>
                {
                    packageFeature.map(data => <div>
                        <div class="w-full text-white rounded-lg box-shadow package-card card-style" key={data.id}>
                            <div className='flex justify-center items-center'>
                                <img class="p-10 rounded-t-lg w-64" src={data.img} alt="product image" />
                            </div>
                            <div class="px-5 pb-5 text-center">
                                <p class="text-[40px] font-semibold tracking-tight pb-8">${data.price}</p>
                                <div className='space-y-3'>
                                    <p class="text-[30px] font-semibold tracking-tight">{data.package_name}</p>
                                    <p>Package Price ${data.price}</p>
                                    <p>Daily Return {data.daily_return}$</p>
                                    <p>Total Return {data.total_return} Days</p>
                                    <p>{data.charge}</p>
                                    {/* <Button styles='mt-10 w-full' /> */}
                                    <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-slate-500 outline-none ${styles} rounded-[10px] w-full button-style`}>
                                        <a href="https://my.nagatrade.info/" target="_blank">View Package</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Package;
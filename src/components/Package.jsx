import React from 'react'
import { packageFeature } from '../constants'
import Button from './Button'
import styles from '../style'

const Package = () => {
    return (
        <section className='my-20'>
            <div className='text-center'>
                <h2 className={styles.heading2}>Our Business Package</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                CHOOSE ONE TO GET DAILY PROFIT
                </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 my-10'>
                {
                    packageFeature.map(data => <div>
                        <div class="w-full text-white rounded-lg box-shadow package-card" key={data.id}>
                            <div className='flex justify-center items-center'>
                                <img class="p-10 rounded-t-lg w-64" src={data.img} alt="product image" />
                            </div>
                            <div class="px-5 pb-5 text-center">
                                <div className='space-y-3'>
                                    <p class="text-xl font-semibold tracking-tight">{data.package_name}</p>
                                    <p>Package Price ${data.price}</p>
                                    <p>Daily Return {data.daily_return}$</p>
                                    <p>Total Return {data.total_return} Days</p>
                                    <p>{data.charge}</p>
                                    <Button styles='mt-10 w-full' />
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
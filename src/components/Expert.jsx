import React from 'react';
import { expert } from '../constants'
import styles from '../style';

const Expert = () => {

    return (
        <section>
            <div className='flex-1 flex flex-col'>
                <h2 className={styles.heading3}>Our Experts</h2>
                <p className={`${styles.paragraph3} mt-5 uppercase`}>
                    Qualified Professional consultants
                </p>
            </div>
            <div className='grid lg:grid-cols-5 gap-3 my-10'>
                {
                    expert.map(data => <div className="card glass text-white expert-card shadow-sm shadow-gray-800" key={data.id}>
                        <figure><img className='w-full' src={data.img} alt="" /></figure>
                        <div className="card-body text-center my-5">
                            <h2 className={styles.expertName}>{data.name}</h2>
                            <p className='opacity-50 uppercase'>{data.title}</p>
                            <p>{data.descipttion}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Expert;
import { aboutUs } from "../assets";
import { features, ourProjectData } from "../constants";
import styles from "../style";


const About = () => {
    return (
        <section className="text-white">
            <div className="lg:flex justify-center items-center my-20">
                <div className="lg:w-1/2">
                    <img className="w-full p-10" src={aboutUs} alt="" />
                </div>
                <div className="lg:w-1/2 space-y-5">
                    <h2 className="font-bold">About Us Title</h2>
                    <p>From technology to healthcare, Asia to Europe, NagaTrade empowers traders with real-time access to stocks from top exchanges worldwide.</p>
                    <div>
                        <h2 className="font-semibold"> Nagatrade Upcoming Projects:</h2>
                        <ul>
                            <li>1. Naga Hospital</li>
                            <li>2. Naga Real Estate</li>
                            <li>3. Naga Car Factory</li>
                            <li>4. Naga Agricultural Farm</li>
                            <li>5. Naga Crypto and Forex</li>
                            <li>6. Naga Hotel and Restaurant</li>
                            <li>7. Naga Technologies</li>
                            <li> 8. Naga Trading (Export & Import)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex-1 flex flex-col'>
                    <h2 className={styles.heading3}>Our Project</h2>
                    <p className={`${styles.paragraph3} mt-5`}>
                        Check On Our Project
                    </p>
                </div>
                <div className="lg:grid grid-cols-3 gap-10">
                    {
                        ourProjectData.map(data => <div className="bg-slate-200 rounded h-[500px] shadow-xl" key={data.id}>
                            <img className="w-full p-5" src={aboutUs} alt="" />
                            <div className="card-body">
                                <h2 className="card-title text-black">{data.title}</h2>
                                <p className="text-black">{data.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <div className='flex-1 flex flex-col'>
                    <h2 className={styles.heading3}>Why Choose Us</h2>
                    <p className={`${styles.paragraph3} mt-5`}>
                        Check On Our Project
                    </p>
                </div>

                <div className="lg:grid grid-cols-3 gap-10">
                    {
                        features.map(data => <div className="rounded-md h-auto shadow-xl lg:mt-0 mt-5" key={data.id}>
                            <div className="relative">
                                <div className="flex rounded-t-md justify-center items-center h-[100px] bg-red-300">

                                </div>
                                <div className="card-body rounded-b-md h-[200px] bg-green-300 py-20">
                                    <h2 className="card-title text-black">{data.title}</h2>
                                    <p className="text-black">{data.content}</p>
                                </div>
                                <div className="top-10 left-[160px] absolute">
                                    <img className="w-28 p-3 border-4 border-white rounded-full bg-white" src={data.icon} alt="" />
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default About;
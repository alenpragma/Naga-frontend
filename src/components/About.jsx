import { crypto } from "../assets";
import { features, ourProjectData } from "../constants";
import Heading from "../shared/Heading";
import styles from "../style";
import { TiTick } from "react-icons/ti";


const About = () => {
    return (
        <section className="text-white">
            <div>
                <Heading heading="About Us" title="Nagatrade About Us" />
            </div>
            <div className="lg:flex justify-center items-center my-20 max-w-7xl mx-auto">
                <div className="lg:w-1/2">
                    <img className="w-full p-10" src={crypto} alt="" />
                </div>
                <div className="lg:w-1/2 space-y-5">
                    <h2 className="font-bold">About Us Title</h2>
                    <p>From technology to healthcare, Asia to Europe, NagaTrade empowers traders with real-time access to stocks from top exchanges worldwide.</p>
                    <div>
                        <h2 className="font-semibold"> Nagatrade Upcoming Projects:</h2>
                        <ul>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Hospital</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Real Estate</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Car Factory</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Agricultural Farm</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Crypto and Forex</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Hotel and Restaurant</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Technologies</li>
                            <li className="flex items-center"><TiTick className="mr-3" /> Naga Trading (Export & Import)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className='flex-1 flex flex-col'>
                    <h2 className={styles.heading3}>Our Project</h2>
                    <p className={`${styles.paragraph3} mt-5 mb-5`}>
                        Check On Our Project
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-3  gap-5">
                    {
                        ourProjectData.map(data => <div className="bg-slate-200 rounded h-[400px] shadow-xl" key={data.id}>
                            <div className="flex justify-center items-center">
                                <img className="w-full p-5" src={data.img} alt="" />
                            </div>
                            <div className="p-5">
                                <h2 className="font-bold text-[18px] text-black">{data.title}</h2>
                                <p className="text-black">{data.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="mt-20 max-w-7xl mx-auto">
                <div className='flex-1 flex flex-col'>
                    <h2 className={styles.heading3}>Why Choose Us</h2>
                    <p className={`${styles.paragraph3} mt-5 mb-5`}>
                        Check On Our Project
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 ">
                    {
                        features.map(data => <div className="rounded-md h-auto shadow-xl lg:mt-0 mt-5" key={data.id}>
                            <div className="relative">
                                <div className="flex rounded-t-md justify-center items-center h-[100px] bg-[#643666]">

                                </div>
                                <div className="card-body rounded-b-md h-[250px] bg-[#1E2038] py-20 text-center">
                                    <h2 className="text-[18px] font-bold">{data.title}</h2>
                                    <p className="">{data.content}</p>
                                </div>
                                <div className="absolute top-10 left-0 right-0 w-28 mx-auto">
                                    <img className="p-3 border-4 border-white rounded-full bg-white" src={data.icon} alt="" />
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




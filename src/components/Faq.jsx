import React, { useState } from 'react';
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import styles from '../style';
import { FaBitcoin } from "react-icons/fa";

const accordionData = [
    {
        title: "What is NagaTrade's Mission?",
        content: "NagaTrade Mission is to facilitate investors’ access to sustainable profits with the most advanced investment tools and dynamic techniques."
    },
    {
        title: "How many package are there in Nagatrade?",
        content: "Here are six package types at NagaTrade."
    },
    {
        title: "How many bonuses are there in Nagatrade Package?",
        content: "Here are six types of bonuses in the NagaTrade package."
    },
    {
        title: "How many Projects are there in Nagatrade Projects?",
        content: "Here are Eight Projects in NagaTrade – 1. Naga Hospital, 2. Naga Real Estate, 3. Naga Car Factory 4. Naga Agricultural Farm, 5. Naga Crypto and Forex, 6. Naga Hotel and Restaurant, 7. Naga Technologies, 8. Naga Trading [Export/Import] You can contribute to us for upcoming projects."
    },
    {
        title: "Do you any partnership with any crypto?",
        content: "NagaTrade has a partnership with a crypto company called CryptoAds Token (CADS)."
    },
];

const Faq = () => {

    const [isOpen, setIsOpen] = useState(Array(accordionData.length).fill(false));

    const toggleAccordion = (index) => {
        setIsOpen((prevOpenState) => {
            const updatedState = prevOpenState.map((item, idx) => (idx === index ? !item : false));
            return updatedState;
        });
    };

    return (
        <section>
            <div className='flex-1 flex flex-col'>
                <h2 className={styles.heading3}>Why? Choose Us</h2>
                <p className={`${styles.paragraph3} mt-5 uppercase`}>
                    We Work For Your Success
                </p>
            </div>
            <div className='my-20 text-white lg:flex gap-10 align-baselin lg:h-[400px]'>
                <div className='lg:w-1/2 p-3 space-y-5'>
                    <div>
                        <h2 className='text-2xl font-bold mb-3'>Cryptocurrency</h2>
                        <p>A cryptocurrency is a digital currency, an alternative method of payment made using encryption algorithms. The use of encryption technology means that cryptocurrencies act both as currency and as a virtual accounting system. To use cryptocurrency, you need a cryptocurrency wallet These wallets can be software that is stored on a cloud-based service or on your computer, or on your mobile device. A wallet is a tool through which you store your encryption keys that confirm your identity and link to your cryptocurrency.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold mb-3'>Most Popular Cryptocurrencies:</h2>
                        <ul>
                            <li className='flex items-center gap-3'><FaBitcoin className='text-[#F05A2B]'/>Bitcoin (BTC)</li>
                            <li className='flex items-center gap-3'><FaBitcoin className='text-[#F05A2B]'/>Ethereum (ETH)</li>
                            <li className='flex items-center gap-3'><FaBitcoin className='text-[#F05A2B]'/>Tether (USDT)</li>
                            <li className='flex items-center gap-3'><FaBitcoin className='text-[#F05A2B]'/>BNB (BNB)</li>
                            <li className='flex items-center gap-3'><FaBitcoin className='text-[#F05A2B]'/>Binance USD (BUSD)</li>
                        </ul>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    {accordionData.map((data, index) => (
                        <div key={index} className="rounded-md">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-5 px-4 flex items-center justify-between text-white focus:outline-none"
                            >
                                <span className="font-medium">{data.title}</span>
                                <span className={`ml-2 transition-transform ${isOpen[index]}`}>
                                    {isOpen[index] ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                                </span>
                            </button>
                            {isOpen[index] && (
                                <div className="p-4">
                                    <p className='text-slate-400'>{data.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

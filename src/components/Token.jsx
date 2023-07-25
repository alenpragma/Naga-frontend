import styles from "../style";
import Marquee from "react-fast-marquee";
import {
    tokenOne,
    tokenTwo,
    tokenThree,
    tokenFour,
    tokenFive,
    tokenSix,
    tokenSeven,
    tokenEight,
    tokenNine,
    tokenTen
} from "../assets";
import { useState } from "react";

const Token = () => {
    const [isMarqueePaused, setMarqueePaused] = useState(false);

    const handleItemFocus = () => {
        setMarqueePaused(true);
    };

    const handleItemBlur = () => {
        setMarqueePaused(false);
    };
    return (
        <section id='package' className='my-20'>
            <div className='flex-1 flex flex-col'>
                <h2 className={styles.heading3}>Buy Card's Token</h2>
                <p className={`${styles.paragraph3} mt-5`}>
                    BUY ON DECENTRALIZED EXCHANGE
                </p>
            </div>
            <div className="text-white">
                <Marquee className="token-item" pauseOnHover={!isMarqueePaused} speed={70}>
                    <a href="https://coindiscovery.app/coin/cryptoads-token/overview">
                        <img
                            className="w-28 margin-right"
                            src={tokenOne}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://coinranking.com/coin/EaLS9RflA+cryptoadstoken-cads">
                        <img
                            className="w-28 margin-right"
                            src={tokenTwo}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://coinmooner.com/coin/cryptoads-token-cads">
                        <img
                            className="w-28 margin-right"
                            src={tokenThree}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://coinsniper.net/coin/33069">
                        <img
                            className="w-28 margin-right"
                            src={tokenFour}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://charts.bogged.finance/?c=bsc&t=0xd0e63612480F09aBdA78bA04E8b64c5590c83796">
                        <img
                            className="w-28 margin-right"
                            src={tokenFive}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://www.geckoterminal.com/bsc/pools/0x39bbc7129e2d7d5e045ae16212a0659767136710">
                        <img
                            className="w-28 margin-right"
                            src={tokenSix}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://poocoin.app/tokens/0xd0e63612480f09abda78ba04e8b64c5590c83796">
                        <img
                            className="w-28 margin-right"
                            src={tokenSeven}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://coinbrain.com/coins/bnb-0xd0e63612480f09abda78ba04e8b64c5590c83796">
                        <img
                            className="w-28 margin-right"
                            src={tokenEight}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://www.mindchainswap.com/swap">
                        <img
                            className="w-28 margin-right"
                            src={tokenNine}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                    <a href="https://pancakeswap.finance/swap">
                        <img
                            className="w-28 margin-right"
                            src={tokenTen}
                            alt=""
                            onFocus={handleItemFocus}
                            onBlur={handleItemBlur}
                        />
                    </a>
                </Marquee>
            </div>
        </section>
    );
};

export default Token;
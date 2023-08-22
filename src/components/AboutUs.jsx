import styles from "../style";
import About from "./About";

const AboutUs = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <About />
        </div>
      </div>
    );
};

export default AboutUs;
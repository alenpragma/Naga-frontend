import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import styles from "../style";

const Main = () => {
    return (
        <div>
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <Outlet />
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;
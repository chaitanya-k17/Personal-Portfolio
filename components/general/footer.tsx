import { NextPage } from "next";
import styles from "../../styles/components/Footer.module.css"


const Footer: NextPage = () => {

    return (
        <>
            <footer id={styles.footer}>
                <div className={styles.footer_top}>
                    <a href="#"
                        className={styles.resumo_fn_totop}>
                        <span></span>
                    </a>
                </div>
                <div className={styles.footer_content}>
                    <div className={styles.container}>
                        <p>Copyright ©
                            2022
                            All rights reserved. <br />Developed by&nbsp; 
                            <a className={styles.fn__link} href="#" target="_blank"
                                rel="noreferrer">Chaitanya Khiratkar</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
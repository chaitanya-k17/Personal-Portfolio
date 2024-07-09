import { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/components/Footer.module.css"


export const Footer: NextPage = () => {

    return (
        <>
            <footer id={styles.footer}>
                <div className={styles.footer_top}>
                    <Link href="#"
                        className={styles.resumo_fn_totop}>
                        <span></span>
                    </Link>
                </div>
                <div className={styles.footer_content}>
                    <div className={styles.container}>
                        <p>Copyright ©
                            2022
                            All rights reserved. <br />Developed by&nbsp;
                            <Link className={styles.fn__link} href="#" target="_blank"
                                rel="noreferrer">Chaitanya Khiratkar</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
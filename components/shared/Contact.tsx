import { NextPage } from "next";
import styles from "../../styles/components/Contact.module.css"


export const Contact: NextPage = () => {

    return (
        <section id="contact">
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.resumo_fn_contact}>
                        <div className={styles.resumo_fn_main_title}>
                            <h3 className={styles.subtitle}>Contact</h3>
                            <h3 className={styles.title}>Get In Touch</h3>
                        </div>
                        <div className={styles.resumo_fn_contact_info}>
                            <p>Address</p>
                            <h3>Yavatmal Maharashtra </h3>
                            <p>Phone</p>
                            <h3><a href="tel:+7068980751">(+706) 898-0751</a></h3>
                            <p>Email</p>
                            <h3><a href="mailto:trendycoder.com@gmail.com">trendycoder.com@gmail.com</a></h3>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
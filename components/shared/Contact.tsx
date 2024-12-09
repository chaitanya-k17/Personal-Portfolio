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
              <h3><a href="tel:+7057868697">(+91)7057868697</a></h3>
              <p>Email</p>
              <h3><a href="mailto:chaitanyak.iitkgp@gmail.com">chaitanyak.iitkgp@gmail.com</a></h3>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
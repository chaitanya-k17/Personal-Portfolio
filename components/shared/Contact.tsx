import { NextPage } from "next";
import styles from "../../styles/components/Contact.module.css"


const Contact: NextPage = () => {

    return (
        <section id="contact">
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.resumo_fn_contact}>
                        <div className={styles.resumo_fn_main_title}>
                            <h3 className={styles.subtitle}>Contact</h3>
                            <h3 className={styles.title}>Get In Touch</h3>
                            <p className={styles.desc}>If you have any suggestion, project or even you want to say “hello”, please fill out
                                the form below and I will reply you shortly.</p>
                        </div>
                        <form className={styles.contact_form}>
                            <div className={styles.success} data-success="Your message has been received, we will contact you soon.">
                                <span className="contact_success">Your message has been received, we will contact
                                    you soon.
                                </span>
                            </div>
                            <div className={styles.empty_notice}><span>Please Fill Required Fields!</span></div>
                            <div className={styles.items_wrap}>
                                <div className={styles.items}>
                                    <div className={styles.item + " " + styles.half}>
                                        <div className={styles.input_wrapper}>
                                            <input type="text" value="" name="name" id="name" />
                                            <span className={styles.moving_placeholder}>
                                                Name *
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.item + " " + styles.half}>
                                        <div className={styles.input_wrapper}>
                                            <input type="email" value="" name="email" id="email" />
                                            <span className={styles.moving_placeholder}>Email *</span>
                                        </div>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.input_wrapper}>
                                            <input type="text" id="phone" value="" name="phone" />
                                            <span className={styles.moving_placeholder}>Phone</span>
                                        </div>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.input_wrapper}>
                                            <textarea name="msg" id="message"></textarea>
                                            <span className={styles.moving_placeholder}>Message</span>
                                        </div>
                                    </div>
                                    <div className={styles.item}><input type="submit" className="a" id="send_message" value="Send Message" /></div>
                                </div>
                            </div>
                        </form>
                        <div className={styles.resumo_fn_contact_info}>
                            <p>Address</p>
                            <h3>69 Queen St, London, United Kingdom</h3>
                            <p>Phone</p>
                            <h3><a href="tel:+7068980751">(+706) 898-0751</a></h3>
                            <p><a className={styles.fn__link} href="mailto:trendycoder.com@gmail.com">trendycoder.com@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contact
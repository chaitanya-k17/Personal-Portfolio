import { NextPage } from "next";


import styles from "../../styles/shared/Intro.module.css"

const Intro: NextPage = () => {

    return (
        <>
            <section id={styles.home}>
                <div className={styles.container}>
                <div className={styles.roww}>
                    <div className={styles.main_title}>
                        <h3 className={styles.subtitle}>Introduction</h3>
                        <h3 className={styles.title}>Software Developer </h3>
                        <p className={styles.desc}>

                            I’m a Software Developer, and I specialize in efficient React, React-Native ,
                            Node apps  with AWS Cloud Computing and HTML/CSS that just work across all platforms and browsers.
                        </p>
                        <div className={styles.signiture}>
                            Chaitanya Khiratkar
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Intro;
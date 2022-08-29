import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/general/footer'
import AboutMe from '../components/shared/aboutMe'
import Intro from '../components/shared/intro'
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {

  const iam = [
    "Software Developer",
    "Chaitanya Khiratkar",
    "Programmer",
    "Kgpian",

  ]


  const pages = [
    {
      name: "Home",
      page: "/#",
    },
    {
      name: "About",
      page: "/#about",
    },
    {
      name: "Contact",
      page: "/#contact",
    }

  ]

  const [isNavOpen, setNavOpen] = useState(false)

  const openNav = () => {
    setNavOpen(true);
  }

  const closeNav = () => {
    setNavOpen(false)
  }

  const router = useRouter();

  useEffect(() => {
    closeNav()
  }, [router.asPath])


  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 10
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })


  return (
    < div className={(isNavOpen ? styles.navOpen : "") + "  " + (scroll ? styles.scrolled : "")} >
      <div className={styles.right} >
        <button className={styles.menu_buttom} onClick={openNav} >
          <span className={styles.menu_icon} >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={styles.inside}>
          <div className={styles.top}>
            <div className={styles.border1}></div>
            <div className={styles.border2}></div>
            <div className={styles.img_holder}>
              <img
                src="/images/profile.jpeg"
                alt="image"
              />
              <div className={styles.absolute_img} data-bg-img="img/right.jpg" ></div>
            </div>
            <div className={styles.title}>
              <h5>Heyy there ! I am</h5>
              <p className="h3">
                <span className={styles.animated_title}>Chaitanya Khiratkar</span>
              </p>
            </div>
          </div>
          <div className={styles.right_bottom}>
            <Link href="/#contact">
              <>
                <span className={styles.circle}>
                </span >
                <span className={styles.text}>Need a Software Developer ! Hire me
                </span>
              </>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.left} >
        <div className={styles.page}>
          <Intro />
          <AboutMe />
          <Footer />
        </div>

      </div>
      <div className={styles.overlay} onClick={closeNav}>
      </div>
      <div className={styles.navigation}>
        <div onClick={closeNav} className={styles.closer}>
        </div>
        <div className={styles.nav_in}>
          <nav id={styles.nav}>
            <ul>
              {
                pages.map((item, index) => {
                  return (
                    < li
                      key={index}
                      className={router.asPath === item.page ? styles.active : ""}
                    >
                      <Link
                        key={index}
                        href={item.page}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })

              }
            </ul>
          </nav>
        </div>
      </div>


    </div >
  )
}

export default Home

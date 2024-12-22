import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from "../styles/Home.module.css"
import { AboutMe, Contact, Footer, Intro } from '../components'

const Home: NextPage = () => {

  const pages = [
    {
      name: "Home",
      page: "#",
    },
    {
      name: "About",
      page: "#about",
    },
    {
      name: "Resume",
      page: "docs/resume.pdf",
    },
    // {
    //   name: "Contact",
    //   page: "#contact ",
    // }
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
              <Image
                src="/images/profile.jpeg"
                alt="chaitanya khiratkar"
                layout='responsive'
                height={400}
                width={400}
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
                <span className={styles.text}>Need a Software Developer ! <br></br> Hire me
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
          {/* <Contact /> */}
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

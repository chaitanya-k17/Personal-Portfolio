import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>
          Chaitanya Khiratkar
        </title>
        <link rel="apple-touch-icon" href="/Images/profile.jpeg"></link>
        <meta name="description" content="Heyy, I am Chaitanya Khiratkar, a Final-year undergraduate student at the Indian Institute of Technology, Kharagpur, one of the top universities in India"/>
        {/*Other Addtional Data  */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="google-site-verification" content="TtFDsGL1rsGC-ETYdYFFFD0MJXiBi1Tl1l_lTBP3mNk" />
        {/* Adding up the Meta Tags For Better SEO Optimizations */}
        <meta property="og:title" content="Chaitanya Khiratkar" />
        <meta property="og:url" content="https://chaitanyak.info" />
        <meta property="og:description" content="Heyy, I am Chaitanya Khiratkar, a Final-year undergraduate student at the Indian Institute of Technology, Kharagpur, one of the top universities in India" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/Images/profile.jpeg" />
      </Head>
      <div className={'GlobalDiv '}>

          {/* Page Data */}
          <div className='Content'>
            <Component {...pageProps} />

          </div>

      </div>


    </>
  )
}

export default MyApp

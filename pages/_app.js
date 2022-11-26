import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import "@fontsource/vt323"

const MyApp = ({ Component, pageProps }) => {
  return( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

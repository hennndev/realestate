import '../styles/globals.css'
import Layout from '../components/UI/Layout'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: '#F78812',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp

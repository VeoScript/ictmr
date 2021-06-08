import '~/styles/tailwind.css'
import NextNProgress from '~/lib/nprogress'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

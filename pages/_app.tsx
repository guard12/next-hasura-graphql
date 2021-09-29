import type { AppProps } from 'next/app'
import '../styles/antdstyles.less'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp

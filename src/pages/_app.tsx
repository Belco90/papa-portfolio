import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { DefaultSeoConfig } from '~/pages/next-seo.config'
import '~/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...DefaultSeoConfig} />
    <Component {...pageProps} />
  </>
)

export default MyApp

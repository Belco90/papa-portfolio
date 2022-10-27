import type { AppProps } from 'next/app'
import type { DefaultToastOptions } from 'react-hot-toast'
import { DefaultSeo } from 'next-seo'
import { Toaster } from 'react-hot-toast'

import { DEFAULT_SEO_CONFIG } from '~/next-seo.config'
import '~/styles/globals.css'
import VercelAnalytics from '~/components/VercelAnalytics'

const DEFAULT_TOASTER_OPTIONS: DefaultToastOptions = {
	position: 'bottom-center',
	success: {
		duration: 3000,
	},
	error: {
		duration: 5000,
	},
}

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<VercelAnalytics />
		<DefaultSeo {...DEFAULT_SEO_CONFIG} />
		<Toaster toastOptions={DEFAULT_TOASTER_OPTIONS} />
		<Component {...pageProps} />
	</>
)

export default MyApp

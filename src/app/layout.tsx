import { FC, ReactNode } from 'react'
import { Lato } from '@next/font/google'
import VercelAnalytics from '~/components/VercelAnalytics'
import { DefaultSeo } from 'next-seo'
import { DEFAULT_SEO_CONFIG } from '~/next-seo.config'
import { DefaultToastOptions, Toaster } from 'react-hot-toast'

const lato400 = Lato({ weight: '400', variable: '--lato400-font' })
const lato700 = Lato({ weight: '700', variable: '--lato700-font' })

const DEFAULT_TOASTER_OPTIONS: DefaultToastOptions = {
	position: 'bottom-center',
	success: {
		duration: 3000,
	},
	error: {
		duration: 5000,
	},
}

interface IRootLayoutProps {
	children: ReactNode
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
	return (
		<html
			lang="es"
			className={`scroll-pt-12 lg:scroll-pt-6 ${lato400.className} ${lato700.className}`}
		>
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<VercelAnalytics />
				<DefaultSeo {...DEFAULT_SEO_CONFIG} />
				<Toaster toastOptions={DEFAULT_TOASTER_OPTIONS} />
				{children}
			</body>
		</html>
	)
}

export default RootLayout

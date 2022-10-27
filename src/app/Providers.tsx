'use client'

import { FC, ReactNode } from 'react'
import { DefaultToastOptions, Toaster } from 'react-hot-toast'
import { DefaultSeo } from 'next-seo'
import VercelAnalytics from '~/components/VercelAnalytics'
import { DEFAULT_SEO_CONFIG } from '~/next-seo.config'

const DEFAULT_TOASTER_OPTIONS: DefaultToastOptions = {
	position: 'bottom-center',
	success: {
		duration: 3000,
	},
	error: {
		duration: 5000,
	},
}

interface IProvidersProps {
	children: ReactNode
}

const Providers: FC<IProvidersProps> = ({ children }) => {
	return (
		<>
			{/*TODO:<VercelAnalytics />*/}
			<DefaultSeo {...DEFAULT_SEO_CONFIG} />
			<Toaster toastOptions={DEFAULT_TOASTER_OPTIONS} />
			{children}
		</>
	)
}

export default Providers

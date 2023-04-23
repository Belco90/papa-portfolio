'use client'

import { FC, ReactNode } from 'react'
import { DefaultToastOptions, Toaster } from 'react-hot-toast'

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
			<Toaster toastOptions={DEFAULT_TOASTER_OPTIONS} />
			{children}
		</>
	)
}

export default Providers

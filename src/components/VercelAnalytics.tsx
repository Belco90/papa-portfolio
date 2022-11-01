'use client'
import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

const VA_DISABLE_KEY = 'va-disable'
const VA_TOGGLE_HASH = '#va-toggle'

function logToggleVercelAnalyticsAction(action: 'disabled' | 'enabled') {
	console.log(`Vercel Analytics has been ${action} for this browser`)
}

const NoopAnalytics = (): null => {
	useEffect(() => {
		console.warn(
			'Vercel Analytics is set up, but detected a non-Vercel production env. Please note that no analytics events will be sent.'
		)
	}, [])

	return null
}

const VercelAnalytics = () => {
	const { replace } = useRouter()
	const isHashToggled = useRef<boolean>(false)

	useEffect(() => {
		const url = new URL(document.URL)
		const shouldToggleVercelAnalytics = url.hash === VA_TOGGLE_HASH

		if (shouldToggleVercelAnalytics && !isHashToggled.current) {
			const isVercelAnalyticsDisabled = !!localStorage.getItem(VA_DISABLE_KEY)

			if (isVercelAnalyticsDisabled) {
				localStorage.removeItem(VA_DISABLE_KEY)
				logToggleVercelAnalyticsAction('enabled')
			} else {
				localStorage.setItem(VA_DISABLE_KEY, '1')
				logToggleVercelAnalyticsAction('disabled')
			}

			// Remove the hash from the URL
			isHashToggled.current = true
			const newPathname = url.pathname
			void replace(newPathname)
		}
	}, [replace])

	if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
		return <NoopAnalytics />
	}

	return (
		<Analytics
			beforeSend={(event) => {
				const url = new URL(event.url)

				if (url.searchParams.get(VA_DISABLE_KEY)) {
					return null
				}

				if (localStorage.getItem(VA_DISABLE_KEY)) {
					return null
				}

				return event
			}}
		/>
	)
}

export default VercelAnalytics

'use client'
import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

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
	const { isReady, replace, asPath } = useRouter()

	useEffect(() => {
		const url = new URL(document.URL)
		const shouldToggleVercelAnalytics = url.hash === VA_TOGGLE_HASH

		if (isReady && shouldToggleVercelAnalytics) {
			const newUrl = asPath.replace(VA_TOGGLE_HASH, '')
			const isVercelAnalyticsDisabled = !!localStorage.getItem(VA_DISABLE_KEY)

			if (isVercelAnalyticsDisabled) {
				localStorage.removeItem(VA_DISABLE_KEY)
				logToggleVercelAnalyticsAction('enabled')
			} else {
				localStorage.setItem(VA_DISABLE_KEY, '1')
				logToggleVercelAnalyticsAction('disabled')
			}
			void replace(newUrl, undefined, { shallow: true })
		}
	}, [replace, isReady, asPath])

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

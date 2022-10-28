import { FC, ReactNode } from 'react'
import { Lato } from '@next/font/google'
import Providers from '~/app/Providers'
import UILayout from '~/components/UILayout'
import '~/styles/globals.css'

const lato = Lato({
	variable: '--lato-font',
	weight: '400', // FIXME: set multiple weights when this PR gets released https://github.com/vercel/next.js/pull/42008
	subsets: ['latin'],
})

interface IRootLayoutProps {
	children: ReactNode
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
	return (
		<html lang="es" className={`scroll-pt-12 lg:scroll-pt-6 ${lato.variable}`}>
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<Providers>
					<UILayout>{children}</UILayout>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout

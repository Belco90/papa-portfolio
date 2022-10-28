import { FC, ReactNode } from 'react'
import Providers from '~/app/Providers'
import UILayout from '~/components/UILayout'
import '~/styles/globals.css'

interface IRootLayoutProps {
	children: ReactNode
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
	return (
		<html lang="es" className={`scroll-pt-12 lg:scroll-pt-6`}>
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

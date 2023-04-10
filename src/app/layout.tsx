import { FC, ReactNode } from 'react'
import { Lato } from 'next/font/google'
import Providers from '~/app/Providers'
import UILayout from '~/components/UILayout'
import '~/styles/globals.css'
import { openGraphCommon } from '~/app/shared-metadata'

const lato = Lato({
	variable: '--lato-font',
	weight: ['400', '700'],
	subsets: ['latin'],
})

interface IRootLayoutProps {
	children: ReactNode
}

export const metadata = {
	title: {
		template: '%s | Cristóbal Beltrán',
		default: 'Cristóbal Beltrán',
		absolute: 'Cristóbal Beltrán',
	},
	description: 'Animación turística y hostelería',
	openGraph: openGraphCommon,
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
	return (
		<html lang="es" className={`scroll-pt-12 lg:scroll-pt-6 ${lato.variable}`}>
			<body>
				<Providers>
					<UILayout>{children}</UILayout>
				</Providers>
			</body>
		</html>
	)
}

export default RootLayout

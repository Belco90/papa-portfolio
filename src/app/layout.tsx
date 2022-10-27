import { FC, ReactNode } from 'react'

interface IRootLayoutProps {
	children: ReactNode
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
	return (
		// TODO load font through next/font
		<html lang="es" className="scroll-pt-12 lg:scroll-pt-6">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout

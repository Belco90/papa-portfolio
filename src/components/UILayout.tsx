import type { FC, ReactNode } from 'react'

import Sidenav from '~/components/Sidenav'
import LayoutTopBanner from './LayoutTopBanner'

interface UILayoutProps {
	children: ReactNode
}

const UILayout: FC<UILayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col lg:flex-row">
			<div className="mt-10 flex w-screen flex-col lg:mt-0 lg:w-fit">
				<LayoutTopBanner />
				<main className="container mx-auto px-5 py-10 text-lg text-gray-700 lg:px-10">
					{children}
				</main>
			</div>
			<Sidenav />
		</div>
	)
}

export default UILayout

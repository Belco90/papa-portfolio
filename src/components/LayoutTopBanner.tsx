'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import banner from '@app-public/images/banner.jpeg'
import { NextImageLayoutResponsiveCss } from '~/common'

const LayoutTopBanner = () => {
	const pathname = usePathname()
	const shouldDisplayBanner = pathname === '/'

	return (
		<>
			{shouldDisplayBanner ? (
				<div>
					<Image
						src={banner}
						alt="Playa de Fuengirola al amanecer"
						placeholder="blur"
						quality={100}
						sizes="100vw"
						style={NextImageLayoutResponsiveCss}
					/>
				</div>
			) : (
				<div className="bg-black lg:h-4" />
			)}
		</>
	)
}

export default LayoutTopBanner

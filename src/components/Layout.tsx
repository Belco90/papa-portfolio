import type { ReactNode } from 'react'
import Image from 'next/image'

import banner from '@app-public/images/banner.jpeg'

interface LayoutProps {
  children: ReactNode
  shouldDisplayBanner?: boolean
}

const Layout = ({ children, shouldDisplayBanner = false }: LayoutProps) => {
  return (
    <div>
      {shouldDisplayBanner ? (
        <Image
          src={banner}
          alt="Playa de Fuengirola al amanecer"
          priority
          placeholder="blur"
          quality={100}
        />
      ) : (
        <div className="lg:h-4 bg-black" />
      )}
      <main className="container mx-auto px-5 py-10 text-gray-700 text-lg">
        {children}
      </main>
    </div>
  )
}

export default Layout

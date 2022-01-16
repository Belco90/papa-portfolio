import type { ReactNode } from 'react'
import Image from 'next/image'

import Sidenav from '~/components/Sidenav'
import banner from '@app-public/images/banner.jpeg'

interface LayoutProps {
  children: ReactNode
  shouldDisplayBanner?: boolean
}

const Layout = ({ children, shouldDisplayBanner = false }: LayoutProps) => {
  return (
    <div className="flex flex-row min-h-screen ">
      <div className="flex flex-col w-screen md:w-fit">
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
        <main className="container mx-auto px-5 lg:px-10 py-10 text-gray-700 text-lg">
          {children}
        </main>
      </div>
      <Sidenav />
    </div>
  )
}

export default Layout

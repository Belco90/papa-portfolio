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
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="mt-10 flex w-screen flex-col lg:mt-0 lg:w-fit">
        {shouldDisplayBanner ? (
          <div>
            <Image
              src={banner}
              alt="Playa de Fuengirola al amanecer"
              layout="responsive"
              placeholder="blur"
              quality={100}
            />
          </div>
        ) : (
          <div className="bg-black lg:h-4" />
        )}
        <main className="container mx-auto px-5 py-10 text-lg text-gray-700 lg:px-10">
          {children}
        </main>
      </div>
      <Sidenav />
    </div>
  )
}

export default Layout

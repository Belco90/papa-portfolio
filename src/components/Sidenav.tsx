import type { ReactNode } from 'react'
import Image from 'next/image'
import { FaRegEnvelopeOpen, FaRegFilePdf } from 'react-icons/fa'

import avatar from '@app-public/images/avatar.jpeg'

const NAV_ITEMS_COLLECTION: Array<{ title: string; link: string }> = [
  { title: 'Sobre mí', link: 'about' },
  { title: 'Habilidades', link: 'skills' },
  { title: 'Publicaciones', link: 'posts' },
  { title: 'Destacados', link: 'highlights' },
  { title: 'Contact', link: 'contact' },
]

interface NavItemProps {
  children: ReactNode
  href: string
}

const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <li className="border-b border-white last:border-0 hover:bg-brand-500 transition-colors">
      <a href={href} className="block w-full py-3">
        {children}
      </a>
    </li>
  )
}

const Sidenav = () => {
  return (
    <>
      {/*<a*/}
      {/*  href="#sidenav-open"*/}
      {/*  title="Open Menu"*/}
      {/*  aria-label="Open Menu"*/}
      {/*  className=""*/}
      {/*>*/}
      {/*  <svg*/}
      {/*    viewBox="0 0 50 40"*/}
      {/*    role="presentation"*/}
      {/*    focusable="false"*/}
      {/*    aria-label="trigram for heaven symbol"*/}
      {/*  />*/}
      {/*</a>*/}
      <aside className="w-full lg:w-[30em] lg:shadow transform -translate-x-full lg:translate-x-0 transition-transform duration-150 ease-in bg-brand-400 sticky hidden lg:block top-0 max-h-screen">
        <div className="h-full flex flex-col justify-between items-center text-center text-white py-10">
          <header className="w-full px-4 space-y-4 hidden lg:block">
            <div className="px-20">
              <Image
                src={avatar}
                alt="Foto de Cristóbal"
                layout="responsive"
                priority
                quality={100}
                className="rounded-full"
              />
            </div>

            <h2 className="font-bold text-2xl">Cristóbal Beltrán</h2>
          </header>
          <nav className="w-full text-lg">
            <ul>
              {NAV_ITEMS_COLLECTION.map(({ title, link }) => (
                <NavItem key={title} href={link}>
                  {title}
                </NavItem>
              ))}
            </ul>
          </nav>

          <footer>
            <ul className="flex gap-4">
              <li>
                <a href="mailto:cbs.m61@gmail.com" title="Correo electrónico">
                  <FaRegEnvelopeOpen size="24" title="Correo electrónico" />
                </a>
              </li>
              <li>
                <a
                  href="/documents/curriculo-cristobal-beltran.pdf"
                  title="Currículo"
                >
                  <FaRegFilePdf size="24" title="Currículo" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </aside>
    </>
  )
}

export default Sidenav

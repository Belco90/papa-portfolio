import type { ReactNode } from 'react'
import cx from 'classnames'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  FaRegEnvelopeOpen,
  FaRegFilePdf,
  FaArrowLeft,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

import avatar from '@app-public/images/avatar.jpeg'

const NAV_ITEMS_COLLECTION: Array<{ title: string; link: string }> = [
  { title: 'Sobre mí', link: '#about' },
  { title: 'Habilidades', link: '#skills' },
  { title: 'Publicaciones', link: '#posts' },
  { title: 'Destacados', link: '#highlights' },
  { title: 'Contacto', link: '#contact' },
]

const OPEN_ACTION_TITLE = 'Abrir menú'
const CLOSE_ACTION_TITLE = 'Cerrar menú'

interface NavItemProps {
  children: ReactNode
  href: string
  onClick: () => void
}

const NavItem = ({ children, href, onClick }: NavItemProps) => {
  return (
    <li className="border-b border-white last:border-0 hover:bg-brand-500 transition-colors">
      <a href={href} className="block w-full py-3" onClick={onClick}>
        {children}
      </a>
    </li>
  )
}

interface MobileBarProps {
  isOpen: boolean
  toggleSidenav: () => void
}

const MobileBar = ({ isOpen, toggleSidenav }: MobileBarProps) => {
  const actionTitle = isOpen ? CLOSE_ACTION_TITLE : OPEN_ACTION_TITLE

  const handleToggleSidenav = () => {
    toggleSidenav()
  }

  return (
    <div className="fixed top-0 h-10 bg-black text-white w-full flex items-center justify-between lg:hidden">
      <h2 className="pl-4">Cristóbal Beltrán</h2>
      <div className="w-10 h-full bg-brand-400 flex items-center justify-center">
        <a
          title={actionTitle}
          aria-label={actionTitle}
          onClick={handleToggleSidenav}
        >
          {isOpen ? (
            <FaTimes size="24" role="presentation" />
          ) : (
            <FaBars size="24" role="presentation" />
          )}
        </a>
      </div>
    </div>
  )
}

const Sidenav = () => {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Block scrolling while sidenav overlay is open
    document.body.classList.toggle('overflow-y-hidden', isOpen)
  }, [isOpen])

  const isHomePage = pathname === '/'
  const toggleSidenav = () => setIsOpen((prevValue) => !prevValue)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <MobileBar isOpen={isOpen} toggleSidenav={toggleSidenav} />
      <aside
        id="sidenav"
        className={cx(
          'w-full transform translate-x-full transition-transform duration-150 ease-in bg-brand-400 fixed top-10 bottom-0 max-h-screen lg:top-0 lg:w-[30em] lg:sticky lg:shadow lg:translate-x-0',
          { 'translate-x-0': isOpen }
        )}
      >
        <div className="h-full flex flex-col justify-between items-center text-center text-white py-10">
          <header className="w-full px-4 space-y-4">
            <div>
              <Image
                src={avatar}
                alt="Foto de Cristóbal"
                layout="fixed"
                width={100}
                height={100}
                priority
                quality={100}
                className="rounded-full"
              />
            </div>

            <h2 className="font-bold text-2xl">Cristóbal Beltrán</h2>
          </header>
          <nav className="w-full text-lg">
            <ul>
              {isHomePage ? (
                NAV_ITEMS_COLLECTION.map(({ title, link }) => (
                  <NavItem key={title} href={link} onClick={handleClose}>
                    {title}
                  </NavItem>
                ))
              ) : (
                <NextLink href="/">
                  <a className="block w-full py-3" onClick={handleClose}>
                    <span className="flex items-center justify-center gap-2 hover:underline">
                      <FaArrowLeft focusable={false} />
                      Volver a inicio
                    </span>
                  </a>
                </NextLink>
              )}
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

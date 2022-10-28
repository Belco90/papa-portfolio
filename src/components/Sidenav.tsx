'use client'

import type { ReactNode } from 'react'
import cx from 'classnames'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
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
		<li className="border-b border-teal-100 transition-colors last:border-0 hover:bg-gradient-to-tr hover:from-green-300 hover:to-brand-400">
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
		<div className="fixed top-0 flex h-10 w-full items-center justify-between bg-black text-white lg:hidden">
			<h2 className="pl-4">Cristóbal Beltrán</h2>
			<div className="flex h-full w-10 items-center justify-center bg-brand-300 text-brand-900">
				<button
					type="button"
					aria-label={actionTitle}
					onClick={handleToggleSidenav}
				>
					{isOpen ? (
						<FaTimes size="24" role="presentation" aria-hidden={true} />
					) : (
						<FaBars size="24" role="presentation" aria-hidden={true} />
					)}
				</button>
			</div>
		</div>
	)
}

const Sidenav = () => {
	const pathname = usePathname()
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
					'fixed top-10 bottom-0 max-h-screen w-full translate-x-full transform bg-gradient-to-tr from-green-200 to-brand-300 bg-blend-multiply transition-transform duration-150 ease-in lg:sticky lg:top-0 lg:w-[30em] lg:translate-x-0 lg:shadow',
					{ 'translate-x-0': isOpen }
				)}
			>
				<div className="flex h-full flex-col items-center justify-between py-10 text-center text-brand-900">
					<header className="w-full space-y-4 px-4">
						<Image
							src={avatar}
							alt="Foto de Cristóbal"
							width={100}
							height={100}
							quality={100}
							placeholder="blur"
							className="rounded-full mx-auto"
						/>

						<h2 className="text-2xl font-bold">Cristóbal Beltrán</h2>
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
								<NextLink
									href="/"
									className="block w-full py-3"
									onClick={handleClose}
								>
									<span className="flex items-center justify-center gap-2 hover:underline">
										<FaArrowLeft focusable={false} />
										Volver a inicio
									</span>
								</NextLink>
							)}
						</ul>
					</nav>

					<footer>
						<ul className="flex gap-4">
							<li>
								<a href="mailto:cbs.m61@gmail.com" title="Correo electrónico">
									<FaRegEnvelopeOpen size="24" aria-hidden={true} />
								</a>
							</li>
							<li>
								<a
									href="/documents/curriculo-cristobal-beltran.pdf"
									title="Currículo (PDF)"
								>
									<FaRegFilePdf size="24" aria-hidden={true} />
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

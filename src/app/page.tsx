import type { ReactNode } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

import {
	FaStar,
	FaBed,
	FaBell,
	FaBirthdayCake,
	FaMusic,
	FaComment,
} from 'react-icons/fa'

import ContactForm from '~/components/ContactForm'
import UILayout from '~/components/UILayout'

import pictureWorkshop from '@app-public/images/picture-workshop.jpeg'
import pictureWestSideStory from '@app-public/images/picture-west-side-story.jpeg'
import pictureCabaretCadiz from '@app-public/images/picture-cabaret-cadiz.jpeg'
import pictureCabaretMalaga from '@app-public/images/picture-cabaret-malaga.jpeg'
import pictureChef from '@app-public/images/picture-chef.jpeg'
import MainHeader from '~/components/MainHeader'
import Link from '~/components/Link'

const SKILLS_COLLECTION: Array<{ icon: ReactNode; title: string }> = [
	{ icon: <FaStar focusable={false} />, title: 'Animación' },
	{ icon: <FaBed focusable={false} />, title: 'Hostelería' },
	{ icon: <FaBell focusable={false} />, title: 'Recepción' },
	{
		icon: <FaBirthdayCake focusable={false} />,
		title: 'Organización de actividades',
	},
	{ icon: <FaMusic focusable={false} />, title: 'Música de baile' },
	{ icon: <FaComment focusable={false} />, title: 'Don de gentes' },
]

const HomePage = () => {
	return (
		<UILayout shouldDisplayBanner>
			<MainHeader subtitle="Animación turística y hostelería">
				Cristóbal Beltrán
			</MainHeader>

			<section id="about" className="space-y-5 text-justify">
				<p>
					Hola, navegante. Soy Cristóbal y quiero hablarte un poco sobre mí y mi
					trayectoria.
				</p>

				<p>
					Mi largo recorrido como animador turístico me ha permitido adquirir
					conocimientos del sector en general y de las relaciones públicas en
					particular.
				</p>

				<p>
					Tengo experiencia a la hora de confeccionar programas de animación,
					actividades deportivas, infantiles, tercera edad, y conocimientos y
					ejecución de todo tipo de música de baile.
				</p>

				<p>
					Al mismo tiempo he desarrollado el trabajo de facturación/restaurante,
					que me ha permitido ampliar mis conocimientos sobre este departamento
					e igualmente sobre otros, como por ejemplo recepción. Esto me ha
					posibilitado ejercer como recepcionista en unos apartamentos
					vacacionales durante los últimos meses.
				</p>

				<p>
					Tengo dotes para el dibujo y la pintura, actividades que considero mi
					hobby, e indudablemente un suplemento para mi trabajo. Además tengo
					buenas ideas para cualquier tipo de decoración.
				</p>

				<p>
					Aparte de estos conocimientos, me gustaría resaltar la base principal
					de mi trabajo: las relaciones públicas, el llamado “don de gentes”. La
					relación diaria con los clientes es algo que me sigue entusiasmando.
				</p>
			</section>
			<hr className="my-8 border-2" />
			<section id="skills">
				<h2 className="mb-6 text-3xl font-bold">Habilidades</h2>

				<ul className="grid gap-4 md:grid-cols-2">
					{SKILLS_COLLECTION.map(({ title, icon }) => (
						<li key={title} className="flex items-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-800">
								{icon}
							</div>
							{title}
						</li>
					))}
				</ul>
			</section>

			<hr className="my-8 border-2" />

			<section id="posts">
				<h2 className="mb-6 text-3xl font-bold">Publicaciones</h2>
				<ul className="list-inside list-disc">
					<li>
						<NextLink
							href="/publicaciones/entrevista-don-de-gentes"
							passHref
							legacyBehavior
						>
							<Link>Entrevista: &quot;Don de Gentes&quot;</Link>
						</NextLink>
					</li>
				</ul>
			</section>

			<hr className="my-8 border-2" />

			<section id="highlights">
				<h2 className="mb-6 text-3xl font-bold">Destacados</h2>

				<figure>
					<Image
						src={pictureWorkshop}
						alt="Cristóbal de joven en el taller de decoración"
						placeholder="blur"
						className="rounded-md"
					/>
					<figcaption className="italic">
						En el taller, dónde aprendí diferentes técnicas de pintura y
						decoración.
					</figcaption>
				</figure>
				<hr className="border-1 my-4" />
				<figure>
					<div className="mb-1 grid items-center gap-3 md:grid-cols-2">
						<Image
							src={pictureWestSideStory}
							alt="Cristóbal con su compañero en 'West Side Story'"
							placeholder="blur"
							className="rounded-md"
						/>
						<Image
							src={pictureCabaretCadiz}
							alt="Cristóbal caracterizado para 'Cabaret Español'"
							placeholder="blur"
							className="rounded-md"
						/>
					</div>
					<figcaption className="italic">
						Representando cabarets en hotel Atlanterra Sol, Zahara de los Atunes
						(Cádiz)
					</figcaption>
				</figure>
				<hr className="border-1 my-4" />
				<figure>
					<Image
						src={pictureCabaretMalaga}
						alt="Cristóbal junto a su compañera caracterizados para el cabaret"
						placeholder="blur"
						className="rounded-md"
					/>
					<figcaption className="italic">
						Cabaret 2 Pax. Transhotel Puerto S.A. Fuengirola (Málaga)
					</figcaption>
				</figure>
				<hr className="border-1 my-4" />
				<figure>
					<Image
						src={pictureChef}
						alt="Cristóbal junto al jefe de cocina, con los maîtres a ambos lados"
						placeholder="blur"
						className="rounded-md"
					/>
					<figcaption className="italic">
						Con el Jefe de cocina y los Maitres de Transhotel Puerto S.A.
						Fuengirola (Málaga)
					</figcaption>
				</figure>
			</section>

			<hr className="my-8 border-2" />

			<section id="contact">
				<h2 className="mb-6 text-3xl font-bold">Contacto</h2>

				<p className="mb-4">
					Contactarme solo te llevará un par de minutos rellenando el siguiente
					formulario:
				</p>

				<ContactForm />
			</section>
		</UILayout>
	)
}

export default HomePage

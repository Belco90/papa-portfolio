import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  FaStar,
  FaBed,
  FaBell,
  FaBirthdayCake,
  FaMusic,
  FaComment,
} from 'react-icons/fa'

import banner from '@app-public/images/banner.jpeg'
import pictureWorkshop from '@app-public/images/picture-workshop.jpeg'
import pictureWestSideStory from '@app-public/images/picture-west-side-story.jpeg'
import pictureCabaretCadiz from '@app-public/images/picture-cabaret-cadiz.jpeg'
import pictureCabaretMalaga from '@app-public/images/picture-cabaret-malaga.jpeg'
import pictureChef from '@app-public/images/picture-chef.jpeg'

const SKILLS_COLLECTION: Array<{ icon: ReactNode; title: string }> = [
  { icon: <FaStar />, title: 'Animación' },
  { icon: <FaBed />, title: 'Hostelería' },
  { icon: <FaBell />, title: 'Recepción' },
  { icon: <FaBirthdayCake />, title: 'Organización de actividades' },
  { icon: <FaMusic />, title: 'Música de baile' },
  { icon: <FaComment />, title: 'Don de gentes' },
]

const HomePage = () => {
  return (
    <div>
      <Image
        src={banner}
        alt="Playa de Fuengirola al amanecer"
        priority
        placeholder="blur"
      />

      <main className="container mx-auto px-5 py-10 text-gray-700 text-lg">
        <div className="my-6">
          <h1 className="text-brand-500 text-5xl font-bold mb-1">
            Cristóbal Beltrán
          </h1>
          <p className="text-3xl font-bold">Animación turística y hostelería</p>
        </div>
        <section id="about" className="space-y-5">
          {/* TODO: show profilePic when sidebar is hidden */}
          <p>
            Hola, navegante. Soy Cristóbal y quiero hablarte un poco sobre mí y
            mi trayectoria.
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
            Al mismo tiempo he desarrollado el trabajo de
            facturación/restaurante, que me ha permitido ampliar mis
            conocimientos sobre este departamento e igualmente sobre otros, como
            por ejemplo recepción. Esto me ha posibilitado ejercer como
            recepcionista en unos apartamentos vacacionales durante los últimos
            meses.
          </p>

          <p>
            Tengo dotes para el dibujo y la pintura, actividades que considero
            mi hobby, e indudablemente un suplemento para mi trabajo. Además
            tengo buenas ideas para cualquier tipo de decoración.
          </p>

          <p>
            Aparte de estos conocimientos, me gustaría resaltar la base
            principal de mi trabajo: las relaciones públicas, el llamado “don de
            gentes”. La relación diaria con los clientes es algo que me sigue
            entusiasmando.
          </p>
        </section>
        <hr className="my-8 border-2" />
        <section id="skills">
          <h2 className="text-3xl font-bold mb-6">Habilidades</h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {SKILLS_COLLECTION.map(({ title, icon }) => (
              <li key={title} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center">
                  {icon}
                </div>
                {title}
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-8 border-2" />

        <section id="posts">
          <h2 className="text-3xl font-bold mb-6">Publicaciones</h2>
          <ul className="list-disc list-inside">
            <li>
              <Link href="/publicaciones/entrevista-don-de-gentes">
                <a className="underline underline-offset-1 hover:text-brand-500 visited: text-brand-800">
                  Entrevista: &quot;Don de Gentes&quot;
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <hr className="my-8 border-2" />

        <section id="highlights">
          <h2 className="text-3xl font-bold mb-6">Destacados</h2>

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
          <hr className="my-4 border-1" />
          <figure>
            <div className="grid md:grid-cols-2 gap-3 items-center mb-1">
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
              Representando cabarets en hotel Atlanterra Sol, Zahara de los
              Atunes (Cádiz)
            </figcaption>
          </figure>
          <hr className="my-4 border-1" />
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
          <hr className="my-4 border-1" />
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
      </main>
    </div>
  )
}

export default HomePage

import type { ReactNode } from 'react'
import {
  FaStar,
  FaBed,
  FaBell,
  FaBirthdayCake,
  FaMusic,
  FaComment,
} from 'react-icons/fa'

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
      <div className="py-10 italic text-center bg-amber-200">
        header bg will be placed here
      </div>

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
      </main>
    </div>
  )
}

export default HomePage

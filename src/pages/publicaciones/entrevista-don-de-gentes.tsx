import type { ReactNode } from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import Link from '~/components/Link'
import MainHeader from '~/components/MainHeader'
import pictureInterview from '@app-public/images/entrevista-don-de-gentes.png'

interface InterviewElementProps {
  children: ReactNode
}

const Question = ({ children }: InterviewElementProps) => {
  return (
    <h2 className="font-bold text-2xl pt-6 pb-2 text-neutral-600">
      {children}
    </h2>
  )
}

const Answer = ({ children }: InterviewElementProps) => {
  return <p className="mb-4 text-justify indent-8">{children}</p>
}

const EntrevistaDonDeGentesPage = () => {
  return (
    <Layout>
      <NextSeo
        title='Entrevista: "Don de Gentes"'
        description="Cristóbal Beltrán"
        openGraph={{
          title: 'Entrevista: "Don de Gentes"',
          site_name: 'Cristóbal Beltrán',
        }}
      />
      <MainHeader subtitle="Entrevista de Paola Pacifici, Periodista y Presidenta de la Asociación Nacional Italiana en España.">
        &quot;Don de Gentes&quot;
      </MainHeader>

      <div className="pt-6 md:w-1/2 md:float-right md:pl-4">
        <Image
          src={pictureInterview}
          alt="Cristóbal sentado haciendo la facturación"
          layout="responsive"
          placeholder="blur"
          className="rounded-md"
        />
      </div>

      <Question>
        Cristóbal, ¿son muchas tus experiencias de trabajo en tu CV?
      </Question>
      <Answer>
        Sí, ya en mi época de estudiante pintaba cuadros de paisajes por encargo
        en la trastienda del negocio de mis padres, donde también colaboraba
        atendiendo a los clientes uno por uno detrás del mostrador, como se
        hacía antes.
      </Answer>

      <Answer>
        Esta experiencia me fue muy útil para mi futuro trabajo, aunque antes de
        mi larga trayectoria como animador turístico también trabaje en una
        fábrica de quesos, tanto en la administración, recepción, como en las
        cubas y prensas donde se elaboraba el queso, después en la
        administración de un gran supermercado desde donde di el paso a la
        hostelería.
      </Answer>

      <Answer>
        Gracias a mis conocimientos de dibujo y pintura empecé a trabajar en un
        taller de decoración de una cadena hotelera, en el cual se
        confeccionaban los fondos de escenario y todo tipo de atrezos para las
        fiestas, shows, noches temáticas, concursos, etc., que más tarde
        utilizarían los equipos de animación de los distintos hoteles.
      </Answer>

      <Answer>
        A partir de aquí fui adquiriendo conocimientos del departamento de
        animación, que verdaderamente era lo que me llamaba la atención y poco a
        poco fui dando pasos hasta convertirme en un animador turístico en la
        que fue mi etapa más larga.
      </Answer>

      <Answer>
        Más tarde trabajé en el departamento de intervención, realizando la
        facturación del restaurante, aunque nunca dejé de colaborar con la
        animación. Tanto es así que años más tarde volví al departamento en una
        etapa más corta, hasta llegar a mi último trabajo de recepcionista en
        unos apartamentos turísticos.
      </Answer>

      <Question>¿Cuál te gusta más?</Question>
      <Answer>
        La pintura es algo que me ha gustado desde pequeño y que he realizado
        durante toda mi vida, pero la verdad es que soy poco constante y
        realmente es muy difícil vivir de ello.
      </Answer>
      <Answer>
        Como decía anteriormente: mi verdadera vocación es la animación. El
        contacto diario con el cliente es algo que me sigue entusiasmando, por
        tanto diré que las relaciones publicas, aunque no sea el trabajo más
        fácil.
      </Answer>

      <Question>¿Quién y cómo es un animador turístico?</Question>

      <Answer>
        El animador turístico es la persona que se responsabiliza de la
        confección, organización y ejecución de las actividades deportivas,
        recreativas, socioculturales, etc. en las instalaciones turísticas.
      </Answer>
      <Answer>
        Tiene que ser una persona con unas facultades especiales, trabajar en
        grupo, habilidad para los deportes, conocimientos de música y baile,
        comunicador y capaz de motivar a la participación de los clientes de
        distintas edades y nacionalidades. Por tanto muy importante los idiomas,
        amplios conocimientos culturales, pero sobre todo tiene que ser una
        persona amable, cordial y respetuosa.
      </Answer>

      <Question>
        Experiencia en confeccionar programas de animación, actividades
        deportivas, infantiles y tercera edad. Diferentes edades, ¿pero hay algo
        que todas tengan en común?
      </Question>

      <Answer>
        Dependiendo de la edad hay que programar actividades diferentes, por
        supuesto, pero todas ellas tienen la misma función en común y no es otra
        que entretener a los clientes en su tiempo libre. Es muy importante que
        se vayan conociendo a través de estas actividades y se encuentren lo más
        a gusto posible durante su estancia en el establecimiento, para que una
        vez que terminen sus vacaciones tengan ganas de volver al mismo.
      </Answer>
      <Answer>
        Entre los grupos de edades hay uno muy importante y al que hay que
        prestar mucha atención: el infantil. Normalmente se reúnen niños entre 5
        y 10 años para hacer sus actividades en el Mini-club. Hay que tener en
        cuenta que un niño contento significa unos padres contentos.
      </Answer>

      <Question>
        Te gustan mucho las relaciones públicas, entonces tienes{' '}
        <em>don de gentes</em>. ¿Qué es?
      </Question>

      <Answer>
        Esta es una buena pregunta que deberían responder los clientes con los
        cuáles he trabajado, pero como no es posible trataré de responderla con
        toda la humildad.
      </Answer>
      <Answer>
        Entiendo que a una persona con <em>don de gentes</em> no la hace su
        aspecto físico, sino más bien la forma de relacionarse con los demás.
        Tampoco creo que tenga nada que ver con la edad, pues siempre se puede
        hacer la vida más agradable a los demás.
      </Answer>
      <Answer>
        En general creo que hay que ser una persona sobre todo respetuosa,
        cordial y que pueda relacionarse con cualquiera y en cualquier
        circunstancia, aportando la capacidad para conversar de cualquier tema.
      </Answer>

      <Question>
        ¿Cómo ha cambiado el modo de divertirse? ¿Qué quiere hoy la gente para
        pasarlo bien?
      </Question>

      <Answer>
        Si, ha cambiado totalmente, en gran parte como consecuencia de la
        saturación que tenemos con los concursos de televisión. Está todo visto.
        Antes se podía hacer en los salones de animación una elección de miss
        simpatía, de míster fantástico o un concurso de pareja ideal sin
        problemas, había concursantes de sobra. Hoy en día es prácticamente
        imposible.
      </Answer>
      <Answer>
        Otra consecuencia del cambio es la tecnología. Cuando no había teléfonos
        móviles, se podían hacer quiz -concurso de preguntas- muy interesantes
        entre todo el público, con preguntas audaces, como por ejemplo
        &quot;¿cuál es la capital de Australia?&quot; (cosa que no todo el mundo
        sabía). Pero claro, hoy con solo echar un vistazo al móvil tenemos la
        respuesta.
      </Answer>
      <Answer>
        La animación infantil también ha sufrido grandes cambios. Antes a los
        niños les hacía ilusión cualquier juego de gincana; hoy la mayoría solo
        quieren jugar con las consolas. Aunque también hay que ser realista: la
        seguridad es mucho mayor ahora, por ejemplo podemos contar con el número
        de móvil de los padres para cualquier problema.
      </Answer>
      <Answer>
        Claro que ahora está todo mucho mejor, pero a mí particularmente me
        gustaba más la forma o el modo de divertirse que tenían los clientes
        antiguamente.
      </Answer>

      <Question>
        Sobre tu trabajo en la recepción: ¿Cuáles eran los clientes más
        difíciles? ¿Has encontrado muchos personajes famosos? ¿Cuál es el más
        simpático?
      </Question>

      <Answer>
        En cualquier establecimiento turístico el recepcionista es la primera
        persona que encuentra el cliente, por lo tanto, por aquello de las
        primeras impresiones, es un trabajo altamente complicado. A veces hay
        que ejercer un poco de psicólogo para entender al cliente y darle lo que
        quiere, de esta manera quedará contento.
      </Answer>

      <Answer>
        Sin duda el cliente más difícil es aquel que tienes día tras día
        quejándose, a veces por cosas incoherentes, pero también debe ser un
        reto el saber reconducirlo y que al final quede contento.
      </Answer>

      <Answer>
        Por otra parte, el mejor cliente es aquel que ves por primera vez el día
        del check-in y no vuelves a ver hasta el día del check-out. Eso quiere
        decir que todo ha ido bien, pero estos son minoría.
      </Answer>
      <Answer>
        En mis dos temporadas de trabajo en Zahara de los Atunes (Cádiz) -rincón
        perfecto para las escapadas de algunos famosos- tuve la oportunidad de
        conocer alguno de ellos: sobre todo futbolistas de primer nivel,
        actores, cantantes y humoristas entre otros.
      </Answer>
      <Answer>
        Si tengo que elegir al más simpático me quedo con Millán Salcedo,
        componente del dúo humorístico “Martes y Trece”. Muy buen sentido del
        humor (claro, es su trabajo). Pero por su cercanía y humildad, con el
        malagueño Antonio Banderas, gran actor y mejor persona.
      </Answer>

      <Question>
        Otro de tus <em>hobbies</em> es la pintura. ¿Qué pintas? ¿Cuál es tu
        técnica? ¿Qué te inspira más?
      </Question>

      <Answer>
        El dibujo y la pintura han formado parte de mí durante toda mi vida,
        parte esencial de mi trabajo. Con diez años gane uno de los premios del
        concurso organizado por la DGT (Dirección General de Tráfico). En los
        años de la transición española colgaban del despacho del director de mi
        colegio dos cuadros, uno del antiguo jefe del Estado Español y otro del
        nuevo, pintados por mí. Más tarde tuve la oportunidad de exponer alguno
        de mis cuadros, siempre en exposiciones colectivas. He pintado
        prácticamente de todo, desde pintar el Altar de una Capilla a carteles
        publicitarios de carretera.
      </Answer>
      <Answer>
        Pero el estilo que realmente me gusta para mis cuadros es el
        surrealista, la obra del artista Salvador Dalí me ha llamado siempre la
        atención.
      </Answer>
      <Answer>
        En cuanto a las técnicas igual, lápiz, carboncillo, tinta china,
        acuarela, cera, pastel, óleo, acrílico, <em>rotring</em>. Pero la más
        utilizada últimamente la descubrí por casualidad al derramarse un bote
        de disolvente sobre unas revistas en el taller de trabajo: al retirarlas
        pude observar que la última página se había impregnado en la mesa. A
        partir de aquí fui haciendo composiciones de restos de revistas: las
        traspasaba a papel con la ayuda del disolvente y después con la técnica
        de puntillismo a <em>rotring</em> les daba las formas fruto de mi
        imaginación.
      </Answer>
      <Answer>
        Si tengo que elegir algo que me inspire diré que los árboles, quizás por
        las formas tan diferentes que adoptan sus troncos y ramas.
      </Answer>

      <Question>
        Hablamos de pesca. ¿Qué es para ti ir a pescar? ¿Cuál es la mejor playa
        para esta actividad?
      </Question>

      <Answer>
        Para mí ir a pesca es un momento de relajación. Se produce una lucha
        entre los peces que están al otro lado del sedal y yo, que intento
        engañarlos para que piquen y así poder capturarlos. Durante esos
        momentos te olvidas de todo y solo piensas en obtener alguna captura
        importante.
      </Answer>
      <Answer>
        Desde que mi padre me enseñó cuando era un niño, he pescado en agua
        dulce (ríos, pantanos). Sin embargo, desde que vivo en la costa, en agua
        salada, dónde tuve que adaptarme a sus variadas y diferentes técnicas.
      </Answer>
      <Answer>
        La modalidad que más me gusta y la que vengo utilizando últimamente en
        mis días de pesca es la llamada <em>spinning</em>: se trata de pescar
        con señuelos artificiales a los cuáles hay que darles el movimiento
        adecuado para engañar a los peces depredadores.
      </Answer>
      <Answer>
        Sobre cuál es la mejor playa para pescar: yo diría la que menor cantidad
        de peces tiene, pues así el reto es mucho mayor.
      </Answer>
      <Answer>
        Para practicar la pesca deportiva hay que saber ser respetuoso con el
        medio ambiente y dejar los lugares dónde pescaste igual que los
        encontraste. El contacto con la naturaleza es algo fantástico, pero
        debemos cuidarla para los que vengan después.
      </Answer>

      <Question>
        También haces teatro, ¿qué personaje has interpretado? ¿Cuál te gustaría
        interpretar? ¿Hay algo que todavía te gustaría ser?
      </Question>

      <Answer>
        En mi corta y relativamente sencilla relación con el teatro, representé
        el papel de recepcionista en un hotel donde, por distintas
        circunstancias, quedaron atrapados unos políticos corruptos.
      </Answer>
      <Answer>
        Este papel no dejaba de ser una extensión de mi trabajo, pero si tuviera
        que elegir un papel serio para representar en un teatro, elegiría, de la
        obra “Doce hombres sin piedad”, el miembro del jurado que en una
        decisión casi unánime de culpabilidad hacia el acusado por homicidio,
        vota “no culpable” y que a lo largo de la obra siembra la semilla de la
        duda razonable en el resto de jurados, que por la raza y origen del
        acusado ya habían decidido un veredicto de culpabilidad. Este papel es
        muy interesante, a mí siempre me encontrarán frente a las injusticias.
      </Answer>
      <Answer>
        Sobre lo que me gustaría ser... pues creo que millonario, a ver que se
        siente. ¡No, es broma! Defecto profesional, mi sentido del humor.
      </Answer>
      <Answer>
        En realidad me gustaría ser el protagonista de una buena exposición de
        pintura, lo que quiere decir que serían mis cuadros los expuestos. Pero
        nunca es tarde para cumplir un sueño, solo hace falta un poco de
        dedicación. Esperemos que mejoren las circunstancias adversas en las que
        se encuentra el mundo y que poco a poco volvamos a la normalidad. Bueno,
        por llamarlo de alguna manera: hoy en día se ven pocas cosas normales.
      </Answer>

      <div className="mt-12">
        <em>– Entrevista original: </em>
        <Link
          href="https://www.italianinspagna.org/art/cristobal-beltran-don-de-gente.html"
          isExternal
        >
          Associazione Italiani in Spagna
        </Link>
      </div>
    </Layout>
  )
}

export default EntrevistaDonDeGentesPage

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner.jpeg';
import avatar from '../assets/images/avatar.jpeg';

import pic1 from '../assets/images/picture-class.jpeg';
import pic2 from '../assets/images/picture-cabaret.jpeg';
import pic2_2 from '../assets/images/picture-west-side-story.jpeg';
import pic3 from '../assets/images/picture-chef.jpeg';
import pic4 from '../assets/images/picture-cabaret-2.jpeg';

const sections = [
  { id: 'about', name: 'Sobre mí' },
  { id: 'skills', name: 'Habilidades' },
  { id: 'moments', name: 'Momentos' },
  { id: 'contact', name: 'Contacto' },
];
const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            heading
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SideBar sections={sections} />
      <div id="wrapper">
        <div id="main">
          <section id="about">
            <div className="image main" data-position="center">
              <img src={banner} alt="Playa de Fuengirola al amanecer" />
            </div>
            <div className="container">
              <header className="major">
                <h2>{site.siteMetadata.author}</h2>
                <p>{site.siteMetadata.heading}</p>
              </header>
              <p>
                <div className="image left profile-picture">
                  <img src={avatar} alt="Foto de Cristóbal Beltrán" />
                </div>
                Hola, navegante. Soy Cristóbal y quiero hablarte un poco sobre
                mí y mi trayectoria.
              </p>

              <p>
                Mi largo recorrido como animador turístico me ha permitido
                adquirir conocimientos del sector en general y de las relaciones
                públicas en particular.
              </p>

              <p>
                Tengo experiencia a la hora de confeccionar programas de
                animación, actividades deportivas, infantiles, tercera edad, y
                conocimientos y ejecución de todo tipo de música de baile.
              </p>

              <p>
                Al mismo tiempo he desarrollado el trabajo de
                facturación/restaurante, que me ha permitido ampliar mis
                conocimientos sobre este departamento e igualmente sobre otros,
                como por ejemplo recepción. Esto me ha posibilitado ejercer como
                recepcionista en unos apartamentos vacacionales durante los
                últimos meses.
              </p>

              <p>
                Tengo dotes para el dibujo y la pintura, actividades que
                considero mi hobby, e indudablemente un suplemento para mi
                trabajo. Además tengo buenas ideas para cualquier tipo de
                decoración.
              </p>

              <p>
                Aparte de estos conocimientos, me gustaría resaltar la base
                principal de mi trabajo: las relaciones públicas, el llamado
                “don de gentes”. La relación diaria con los clientes es algo que
                me sigue entusiasmando.
              </p>
            </div>
          </section>

          <section id="skills">
            <div className="container">
              <h3>Habilidades</h3>
              <ul className="feature-icons">
                <li className="fa-star">Animación</li>
                <li className="fa-hotel">Hostelería</li>
                <li className="fa-bell">Recepción</li>
                <li className="fa-birthday-cake">
                  Organización de actividades
                </li>
                <li className="fa-music">Música de baile</li>
                <li className="fa-comment">Don de gentes</li>
              </ul>
            </div>
          </section>

          <section id="moments">
            <div className="container">
              <h3>Momentos</h3>
              <p>
                Algunos de mis momentos favoritos a lo largo de mi trayectoria:
              </p>
              <div className="features">
                <article>
                  <div className="image">
                    <img
                      src={pic1}
                      alt="Cristóbal de joven en el taller de decoración"
                    />
                  </div>
                  <div className="inner">
                    <p>
                      En el taller, dónde aprendí diferentes técnicas de pintura
                      y decoración.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="image">
                    <img
                      src={pic2_2}
                      alt="Cristóbal con su compañero en 'West Side Story'"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={pic2}
                      alt="Cristóbal caracterizado para 'Cabaret Español'"
                    />
                  </div>
                  <div className="footer">
                    <p>
                      Representando cabarets en hotel Atlanterra Sol, Zahara de
                      los Atunes (Cádiz)
                    </p>
                  </div>
                </article>
                <article>
                  <div className="image">
                    <img
                      src={pic4}
                      alt="Cristóbal junto a su compañera caracterizados para el cabaret"
                    />
                  </div>
                  <div className="inner">
                    <p>
                      Cabaret 2 Pax. Transhotel Puerto S.A. Fuengirola (Málaga)
                    </p>
                  </div>
                </article>
                <article>
                  <div className="image">
                    <img
                      src={pic3}
                      alt="Cristóbal junto al jefe de cocina, con los maîtres a ambos lados"
                    />
                  </div>
                  <div className="inner">
                    <p>
                      Con el Jefe de cocina y los Maitres de Transhotel Puerto
                      S.A. Fuengirola (Málaga)
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <h3>Contacto</h3>
              <p>
                Contactarme solo te llevará un par de minutos rellenando el
                siguiente formulario:
              </p>
              <form method="post" action="#" name="contact" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <div className="row gtr-uniform">
                  <div className="col-6 col-12-xsmall">
                    <label>
                      Nombre
                      <input type="text" name="name" id="name" />
                    </label>
                  </div>
                  <div className="col-6 col-12-xsmall">
                    <label>
                      Correo eletrónico
                      <input type="email" name="email" id="email" />
                    </label>
                  </div>
                  <div className="col-12">
                    <label>
                      Asunto
                      <input type="text" name="subject" id="subject" />
                    </label>
                  </div>
                  <div className="col-12">
                    <label>
                      Mensaje
                      <textarea
                        name="message"
                        id="message"
                        placeholder="¡Déjame aquí tu mensaje!"
                        rows="6"
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li>
                        <input
                          type="submit"
                          className="primary"
                          value="Enviar"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <section id="footer">
        <PageFooter />
      </section>
    </Layout>
  );
};

export default IndexPage;

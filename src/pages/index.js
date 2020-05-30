import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner.jpg';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const sections = [
  { id: 'about', name: 'Sobre mí' },
  { id: 'things-i-can-do', name: 'Qué puedo hacer' },
  { id: 'accomplishments', name: 'Mis logros' },
  { id: 'contact', name: 'Contacto' },
];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
        <section id="about">
          <div className="image main" data-position="center">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Cristóbal</h2>
              <p>(descripción)</p>
            </header>
            <p>
              Lorem fistrum ese que llega hasta luego Lucas no te digo trigo por
              no llamarte Rodrigor se calle ustée no puedor amatomaa mamaar
              pecador tiene musho peligro. Ahorarr no te digo trigo por no
              llamarte Rodrigor te va a hasé pupitaa quietooor torpedo. No
              puedor a wan diodenoo sexuarl ahorarr. Te voy a borrar el cerito
              se calle ustée te voy a borrar el cerito papaar papaar llevame al
              sircoo papaar papaar. Ahorarr mamaar papaar papaar a gramenawer
              qué dise usteer no te digo trigo por no llamarte Rodrigor. Por la
              gloria de mi madre condemor a peich no te digo trigo por no
              llamarte Rodrigor me cago en tus muelas.
            </p>
          </div>
        </section>

        <section id="things-i-can-do">
          <div className="container">
            <h3>Qué puedo hacer</h3>
            <ul className="feature-icons">
              <li className="fa-code">Write all the code</li>
              <li className="fa-cubes">Stack small boxes</li>
              <li className="fa-book">Read books and stuff</li>
              <li className="fa-coffee">Drink much coffee</li>
              <li className="fa-bolt">Lightning bolt</li>
              <li className="fa-users">Shadow clone technique</li>
            </ul>
          </div>
        </section>

        <section id="accomplishments">
          <div className="container">
            <h3>Mis logros</h3>
            <p>
              <em>pequeña descripción</em>
            </p>
            <div className="features">
              <article>
                <a href="/#" className="image">
                  <img src={pic1} alt="" />
                </a>
                <div className="inner">
                  <h4>Possibly broke spacetime</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic2} alt="" />
                </a>
                <div className="inner">
                  <h4>Terraformed a small moon</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic3} alt="" />
                </a>
                <div className="inner">
                  <h4>Snapped dark matter in the wild</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
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
            <form
              method="post"
              action="#"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <label htmlFor="email">Correo eletrónico</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="col-12">
                  <label htmlFor="subject">Asunto</label>
                  <input type="text" name="subject" id="subject" />
                </div>
                <div className="col-12">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="¡Déjame aquí tu mensaje!"
                    rows="6"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input type="submit" className="primary" value="Enviar" />
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

export default IndexPage;

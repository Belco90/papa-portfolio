import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../../config';
const pic = require('../../assets/images/avatar.jpeg');

const SOCIAL_LINKS = [
  {
    icon: 'fa-envelope-o',
    name: 'Email',
    url: 'mailto:cbs.m61@gmail.com',
  },
  {
    icon: 'fa-file-pdf-o',
    name: 'Currículo',
    url: '/curriculo-cristobal-beltran.pdf',
  },
];

export default function SideBar({ sections = [] }) {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleHeader = () => setIsHeaderOpen(!isHeaderOpen);

  return (
    <div className={`${isHeaderOpen ? 'header-visible' : ' '}`}>
      <TopNav title={config.authorName} onMenuClick={toggleHeader} />
      <section id="header">
        <Header
          avatar={pic}
          title={config.authorName}
          heading={config.heading}
        />
        <Nav sections={sections} onSectionClick={toggleHeader} />
        <Footer socialLinks={SOCIAL_LINKS} />
      </section>
    </div>
  );
}

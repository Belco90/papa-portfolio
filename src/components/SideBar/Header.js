import React from 'react';

export default function Header({ title, heading, avatar }) {
  return (
    <header>
      <span className="image avatar">
        <img src={avatar} alt="Foto de Cristóbal Beltrán" />
      </span>
      <h1 id="logo">
        <a href="/#">{title}</a>
      </h1>
      <p>{heading}</p>
    </header>
  );
}

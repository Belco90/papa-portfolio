import React from 'react'

export default function Header({ title, avatar }) {
  return (
    <header>
      <span className="image avatar">
        <img src={avatar} alt="Foto de Cristóbal Beltrán" />
      </span>
      <h1 id="logo">{title}</h1>
    </header>
  )
}

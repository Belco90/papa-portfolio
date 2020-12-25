import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

export default function Nav({ sections = [], onSectionClick }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map((s) => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map((s) => {
            return (
              <li
                key={s.id}
                onClick={onSectionClick}
                onKeyDown={onSectionClick}
                role="presentation"
              >
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`}>{s.name}</a>
                </Scroll>
              </li>
            )
          })}
        </Scrollspy>
      </ul>
    </nav>
  )
}

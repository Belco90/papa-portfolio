import type { ReactNode } from 'react'

interface MainHeaderProps {
  children: ReactNode
  subtitle?: ReactNode
}

const MainHeader = ({ children, subtitle }: MainHeaderProps) => {
  return (
    <header className="my-10 text-center">
      <h1 className="text-brand-500 text-3xl md:text-5xl font-bold mb-1">
        {children}
      </h1>
      {!!subtitle && (
        <div
          role="doc-subtitle"
          className="text-xl md:text-3xl border-neutral-300 border-t-2 mx-4 md:mx-20 pt-1"
        >
          {subtitle}
        </div>
      )}
    </header>
  )
}

export default MainHeader

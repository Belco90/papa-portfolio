import type { ReactNode } from 'react'

interface MainHeaderProps {
  children: ReactNode
  subtitle?: ReactNode
}

const MainHeader = ({ children, subtitle }: MainHeaderProps) => {
  return (
    <header className="my-10 text-center">
      <h1 className="mb-1 text-3xl font-bold text-brand-600 md:text-5xl">
        {children}
      </h1>
      {!!subtitle && (
        <div
          role="doc-subtitle"
          className="mx-4 border-t-2 border-neutral-300 pt-1 text-xl md:mx-20 md:text-3xl"
        >
          {subtitle}
        </div>
      )}
    </header>
  )
}

export default MainHeader

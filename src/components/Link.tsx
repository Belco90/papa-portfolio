import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

interface CustomProps {
  isExternal?: boolean
}

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  CustomProps

const Link = ({
  children,
  href,
  isExternal = false,
  ...remainingProps
}: LinkProps) => {
  return (
    <a
      href={href}
      className="underline underline-offset-1 decoration-brand-500 hover:text-brand-500 visited:text-brand-800 transition-colors"
      {...remainingProps}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}

export default Link

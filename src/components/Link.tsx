import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { forwardRef } from 'react'

interface CustomProps {
  isExternal?: boolean
}

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  CustomProps

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, href, isExternal = false, ...remainingProps }, ref) => {
    return (
      <a
        href={href}
        className="underline underline-offset-1 decoration-brand-500 hover:text-brand-500 transition-colors"
        {...remainingProps}
        ref={ref}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link

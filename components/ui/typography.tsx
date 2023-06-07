import {HTMLAttributes, forwardRef} from 'react'
import {cn} from '@/lib/utils'

export const TypographyH1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({className, children, ...props}, ref) => (
  <h1
    ref={ref}
    className={cn(
      'lg:text-5x scroll-m-20 text-4xl font-extrabold tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h1>
))
TypographyH1.displayName = 'TypographyH1'

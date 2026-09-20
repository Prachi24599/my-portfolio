import type { ComponentPropsWithoutRef } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
}

function Button({
  children,
  variant = 'primary',
  type = 'button',
  className,
  ...buttonProps
}: ButtonProps) {
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

export type { ButtonProps, ButtonVariant }
export default Button
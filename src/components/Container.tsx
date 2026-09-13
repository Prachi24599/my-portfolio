import type { ComponentPropsWithoutRef } from 'react'

type ContainerProps = ComponentPropsWithoutRef<'div'>

function Container({ className, ...divProps }: ContainerProps) {
  const classes = ['container', className].filter(Boolean).join(' ')

  return <div className={classes} {...divProps} />
}

export type { ContainerProps }
export default Container
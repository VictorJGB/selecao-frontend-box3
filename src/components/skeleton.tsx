import type { ComponentProps } from 'react'
import { cn } from '../utils/tw-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('h-6 w-full animate-pulse rounded-md bg-neutral/30', className)}
      {...props}
    />
  )
}

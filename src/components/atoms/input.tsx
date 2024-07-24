import * as React from 'react'
import { cn } from '../../lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'flex rounded-md bg-primary px-3 py-2 text-sm text-white ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purpleMid transition-all duration-250 ease-in-out disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        md: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
      full: {
        true: 'w-full',
        false: 'w-auto',
      },
      error: {
        true: 'border border-red-600',
        false: 'border-input placeholder:text-muted-foreground',
      },
    },
    defaultVariants: {
      size: 'md',
      full: false,
      error: false,
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  size?: 'md' | 'sm' | 'lg'
  placeholder?: string
  full?: boolean
  error?: boolean
  disabled?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      placeholder,
      full = false,
      error = false,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type="text"
        className={cn(inputVariants({ size, full, error }), className)}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }

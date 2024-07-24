import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '../../lib/utils'

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  state?: 'checked' | 'unchecked'
  labelName?: string
  isLabelActive?: boolean
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      state = 'unchecked',
      className,
      disabled,
      onCheckedChange,
      labelName,
      isLabelActive = false,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState(
      state === 'checked'
    )

    React.useEffect(() => {
      setInternalState(state === 'checked')
    }, [state])

    const handleCheckedChange = (checked: boolean) => {
      if (!disabled) {
        setInternalState(checked)
        if (onCheckedChange) {
          onCheckedChange(checked)
        }
      }
    }

    return (
      <div className="flex items-center">
        <SwitchPrimitives.Root
          className={cn(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-purpleMid data-[state=unchecked]:bg-input',
            disabled && 'disabled:bg-disabled',
            className
          )}
          {...props}
          ref={ref}
          checked={internalState}
          onCheckedChange={handleCheckedChange}
          disabled={disabled}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              'pointer-events-none block h-5 w-5 rounded-full bg-primary shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
            )}
          />
        </SwitchPrimitives.Root>
        {labelName && isLabelActive && (
          <span className="ml-2 text-sm text-white">{labelName}</span>
        )}
      </div>
    )
  }
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

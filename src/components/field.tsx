import React from 'react'

import { Label } from '@/components/label'
import { cn } from '@/lib/utils'

export function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = React.useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ]

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (err, i) =>
            err?.message && <li key={i.toString()}>{err?.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      className={cn('text-sm font-normal text-red-500', className)}
      {...props}
    >
      {content}
    </div>
  )
}

export function FieldGroup({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'group/field-group w-full flex flex-col gap-1 data-[invalid=true]:text-red-500',
        className,
      )}
      {...props}
    />
  )
}

export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      className={cn(
        'group-data-[invalid=true]/field-group:text-red-500',
        className,
      )}
      {...props}
    />
  )
}

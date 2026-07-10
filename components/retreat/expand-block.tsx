'use client'

import { useState, type ReactNode } from 'react'
import { Minus, Plus } from 'lucide-react'

export function ExpandBlock({
  index,
  title,
  children,
}: {
  index: number
  title: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(index === 1)

  return (
    <div className="border-b border-forest/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-8 text-left"
      >
        <span className="flex items-baseline gap-5">
          <span className="font-serif text-xl text-forest-soft">
            {String(index).padStart(2, '0')}
          </span>
          <span className="font-serif text-2xl text-foreground lg:text-3xl">
            {title}
          </span>
        </span>
        <span className="shrink-0 text-forest">
          {open ? <Minus className="size-5" /> : <Plus className="size-5" />}
        </span>
      </button>

      {open && <div className="pb-12 pl-0 lg:pl-12">{children}</div>}
    </div>
  )
}

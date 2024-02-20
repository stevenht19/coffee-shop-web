'use client'

import React from 'react'
import { createPortal } from 'react-dom'

export function ReactPortal({ children }: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return mounted ? createPortal(<>{children}</>, document.body) : null
}
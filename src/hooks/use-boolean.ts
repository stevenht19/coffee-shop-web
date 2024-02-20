import { useState } from 'react'

export const useBoolean = () => {
  const [bool, setBool] = useState<boolean>(false)

  const setBoolean = {
    on: () => setBool(true),
    off: () => setBool(false),
    toggle: () => setBool(b => !b)
  }

  return [bool, setBoolean] as const
}
import { useEffect, useState } from 'react'

export const usePathname = () => {
  const [pathname, setPathname] = useState<string | undefined>(undefined)
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return {
    pathname,
  }
}

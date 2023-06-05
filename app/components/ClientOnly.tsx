"use client"

import React, { useState, useEffect } from "react"
// every page/component inside the app folder is a server component by default. This can cause hydration problems
// here we check whether we are server-side or client-side

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <>{children}</>
}

export default ClientOnly

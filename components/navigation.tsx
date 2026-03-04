"use client"

import { useEffect, useState } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <span className="text-sm font-semibold tracking-[0.3em] text-foreground uppercase">
          Dreiseitig Press
        </span>
        <a
          href="https://dreiseitig.press"
          className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          dreiseitig.press
        </a>
      </div>
    </nav>
  )
}

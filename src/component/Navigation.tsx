// src/components/Navigation.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About' },
  { href: '/resume',  label: 'Resume' },
  { href: '/connect', label: 'Connect' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-stone-50 border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/me.png"
              alt="Jacob Braswell"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-amber-200"
            />
            <span className="font-semibold text-xl text-stone-800">Jacob Braswell</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-amber-700 border-b-2 border-amber-600 pb-0.5'
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 w-6 bg-stone-600 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-stone-600 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-stone-600 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 space-y-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-1 text-sm font-medium rounded transition-colors ${
                  pathname === href
                    ? 'text-amber-700'
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

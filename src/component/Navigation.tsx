// src/components/Navigation.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/me.png"
              alt="Jacob Braswell"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-xl">Jacob Braswell</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/resume" className="text-gray-700 hover:text-blue-600">
              Resume
            </Link>
            <Link href="/connect" className="text-gray-700 hover:text-blue-600">
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger icon */}
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 mt-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 mt-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/resume" className="block py-2 text-gray-700 hover:text-blue-600">
              Resume
            </Link>
            <Link href="/connect" className="block py-2 text-gray-700 hover:text-blue-600">
              Connect
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
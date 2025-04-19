'use client'

import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement
        const sectionTop = htmlSection.offsetTop - 100
        const sectionHeight = htmlSection.offsetHeight
        const sectionId = htmlSection.getAttribute('id')
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ]
  
  const isActive = (href: string) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark bg-opacity-95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl flex items-center">
                <div className="w-8 h-8 rounded-md bg-primary text-white flex items-center justify-center mr-2 text-sm font-bold">VS</div>
                Vedant Sahai
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.href) 
                        ? 'text-white bg-primary' 
                        : 'text-gray-300 hover:text-white hover:bg-primary hover:bg-opacity-70'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-white ${
                isOpen ? 'bg-gray-dark' : 'bg-primary'
              } hover:bg-opacity-90 focus:outline-none transition-colors`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark shadow-lg rounded-b-lg border-t border-gray-800">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.href) 
                      ? 'text-white bg-primary' 
                      : 'text-gray-300 hover:text-white hover:bg-primary hover:bg-opacity-70'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}
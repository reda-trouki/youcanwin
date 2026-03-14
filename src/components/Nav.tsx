'use client'

import { ChevronRight, Trophy, X, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const links = [
    { href: '#solution',   label: 'Nos offres' },
    { href: '#catalog',    label: 'Nos jeux' },
    { href: '#pricing',    label: 'Album 2025' },
    { href: '#backoffice', label: 'À propos' },
  ]

  const handleLinkClick = () => setIsOpen(!isOpen)

  return (
    <>
      <nav>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-icon">
              <Trophy size={20} color="white" />
            </div>
            <span className="logo-text">
              <em>You</em>can<em className="text-green">win</em>
            </span>
            <span className="logo-tag">Games</span>
          </a>

          {/* Desktop links */}
          <ul>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#cta-banner" className="btn-green nav-cta">
                Demander une démo <ChevronRight size={16} />
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div className="nav-overlay" onClick={handleLinkClick} />
      )}

      {/* Mobile drawer */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        {/* Drawer header */}
        <div className="nav-drawer-header">
          <a href="#" className="logo" onClick={handleLinkClick}>
            <div className="logo-icon">
              <Trophy size={18} color="white" />
            </div>
            <span className="logo-text">
              <em className='text-red'>You</em>can<em className="text-green">win</em>
            </span>
          </a>
          <button
            className="nav-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <ul className="nav-drawer-links">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer CTA */}
        <div className="nav-drawer-cta">
          <a
            href="#cta-banner"
            className="btn-green w-full justify-center"
            onClick={handleLinkClick}
          >
            Demander une démo <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Nav
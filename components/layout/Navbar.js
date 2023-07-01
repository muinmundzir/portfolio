import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDarkMode } from '../theme/useDarkMode'
import lightBulb from '../../public/lightBulb.svg'
import darkMoon from '../../public/darkMoon.svg'
import menuIcon from '../../public/menuIcon.svg'
import menuClose from '../../public/menuClose.svg'

const NAVMENU = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode()
  const [isActive, setIsActive] = useState(false)

  const toggleHandler = () => {
    setIsActive(!isActive)
  }

  const toggleThemeHandler = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="nav">
        <div className="container flex items-center justify-center h-16 md:h-20">
          {/* <h1 className="relative z-30 font-semibold text-2xl">
            Mu&apos;in Mundzir
          </h1> */}
          <div className="flex items-center flex-row-reverse md:flex-row gap-3 md:gap-12">
            {/* Menu List */}
            <ul
              id="menu"
              className={`nav-menus ${
                isActive ? '' : 'translate-y-[-200%]'
              } md:translate-y-0`}
            >
              {NAVMENU.map((menu) => {
                return (
                  <Link href={menu.href} key={menu.href}>
                    <a onClick={toggleHandler} className="nav-link">
                      {menu.label}
                    </a>
                  </Link>
                )
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              id="toggle-menu"
              className="relative z-30 p-2 md:hidden dark:invert"
            >
              <Image
                onClick={toggleHandler}
                src={isActive ? menuClose : menuIcon}
                alt="menu-icon"
              />
            </button>

            {/* Toggle Theme */}
            <button
              onClick={toggleThemeHandler}
              id="toggle-theme"
              className="relative z-30 dark:invert"
            >
              <Image
                className="md:opacity-70 w-7 md:-mt-1"
                src={isDark ? lightBulb : darkMoon}
                alt="toggle-theme"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

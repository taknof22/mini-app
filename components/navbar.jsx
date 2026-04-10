'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/cart', label: 'Cart' },
  { href: '/favourites', label: 'Favourites' },
  { href: '/profile', label: 'Profile' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav-shell">
      <nav className="nav">
        <Link href="/" className="logo">VERDE</Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

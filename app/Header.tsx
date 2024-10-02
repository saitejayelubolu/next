// Update components/Header.tsx
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/notes/create" className="text-white">
              Create Note
            </Link>
          </li>
          <li>
            <Link href="/notes/show" className="text-white">
              Show Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

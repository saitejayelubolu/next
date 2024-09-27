// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
  );
};

export default Footer;

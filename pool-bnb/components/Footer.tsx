import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-[#d7d2c6] bg-[#173347] py-8 text-white">
      <div className="content-wrap flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
        <p className="text-white/80">© {year} PoolBnB. Built for stress-free pool booking.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/contact" className="hover:text-[#bee9e8]">
            Contact
          </Link>
          <a href="#" className="hover:text-[#bee9e8]">
            Privacy
          </a>
          <a href="#" className="hover:text-[#bee9e8]">
            Terms
          </a>
          <a href="https://instagram.com" className="hover:text-[#bee9e8]">
            Instagram
          </a>
          <a href="https://facebook.com" className="hover:text-[#bee9e8]">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

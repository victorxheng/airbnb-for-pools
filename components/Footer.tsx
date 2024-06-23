import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>Contact Us | About Us | Privacy Policy</p>
        <div className="mt-2">
          <a href="https://facebook.com" className="mx-2">Facebook</a>
          <a href="https://twitter.com" className="mx-2">Twitter</a>
          <a href="https://instagram.com" className="mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

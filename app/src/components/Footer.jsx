import React from 'react';

const Footer = () => {
  return (
    <footer className='px-5 py-10 mt-40 font-["Poppins"] text-white bg-slate-900'>
      <div className='max-w-7xl mx-auto'>
        {/* Logo Section */}
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold'>Flow UI</h1>
        </div>

        {/* Footer Links */}
        <div className='flex justify-center gap-10 mb-8'>
          <a href='#' className='hover:underline'>Terms of Service</a>
          <a href='#' className='hover:underline'>Privacy Policy</a>
          <a href='#' className='hover:underline'>Security</a>
          <a href='#' className='hover:underline'>Sitemap</a>
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center gap-6 mb-8'>
          <a href='#' aria-label='Twitter'>
            <i className='fa-brands fa-twitter'></i>
          </a>
          <a href='#' aria-label='GitHub'>
            <i className='fa-brands fa-github'></i>
          </a>
          <a href='#' aria-label='Facebook'>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href='#' aria-label='Instagram'>
            <i className='fa-brands fa-instagram'></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className='flex justify-between items-center'>
          <div>
            <select className='bg-slate-900 text-white border border-white p-2'>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <p className='text-sm'>&copy; 2020 Flow UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

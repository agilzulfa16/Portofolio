const Footer = () => {
  return (
    <footer className='bottom-0 text-center flex flex-col md:flex-row h-20 mb-0 justify-between items-center px-6 md:px-10 py-4 w-full border-t border-[#333333]'>
      <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mb-2 md:mb-0'>
      <a href="https://github.com/agilzulfa16"><li>Github</li></a>
        <a href="https://linkedin.com/in/agilzulfa"><li className="opacity-50">LinkedIn</li></a>
        <a href="https://instagram.com/agilzulfa_"><li className="opacity-50">Instagram</li></a>
      </ul>
      <p className='text-center md:ml-auto'>©2024 Agil Zulfa</p>
    </footer>
  );
};

export default Footer;

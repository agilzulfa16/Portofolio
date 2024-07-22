const Footer = () => {
  return (
      <footer className='bottom-0 flex text-center flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 w-full border-t border-[#333333]'>
        <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mb-2 md:mb-0'>
          <li>Github</li>
          <li className="opacity-50">LinkedIn</li>
          <li className="opacity-50">Instagram</li>
        </ul>
        <p className='text-center md:ml-auto'>©2024 Agil Zulfa</p>
      </footer>
  );
};

export default Footer;

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  
  return (
    <>
      <footer className='relative bottom-0 left-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
        <section className='text-lg'>
          Copyright {year} | All rights reserved
        </section>
        <section className='flex items-center justify-center gap-5 text-2xl text-white'>
          <a href="#" className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
            <BsFacebook />
          </a>
          
          <a href="#" className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
            <BsInstagram />
          </a>

          <a href="#" className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
            <BsLinkedin />
          </a>

          <a href="#" className='transition-all duration-300 ease-in-out hover:text-yellow-500'>
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;

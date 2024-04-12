import logo from '../assets/llavero-logo-2.svg';

export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='w-11/12 mx-auto' />

      <section className='container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
        <div className='col-span-full xl:col-span-2'>
          <a href='/' className='text-xl flex gap-2 items-center'>
            <img src={logo} alt='Llavero logo' className='h-10' />
            <p>
              <strong>Llavero</strong> Wallet
            </p>
          </a>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Follow Us</h3>
          <div>
            <a href='https://github.com/elranu/llavero' className='opacity-60 hover:opacity-100'>
              Github
            </a>
          </div>
        </div>
        {/* 
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Platforms</h3>
          <div>
            <a href='#' className='opacity-60 hover:opacity-100'>
              Web
            </a>
          </div>

          <div>
            <a href='#' className='opacity-60 hover:opacity-100'>
              Mobile
            </a>
          </div>

          <div>
            <a href='#' className='opacity-60 hover:opacity-100'>
              Desktop
            </a>
          </div>
        </div> */}

        {/* <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>About</h3>
          <div>
            <a href='#' className='opacity-60 hover:opacity-100'>
              Features
            </a>
          </div>

          <div>
            <a href='#' className='opacity-60 hover:opacity-100'>
              Pricing
            </a>
          </div>

          <div>
            <a href='#' className='opacity-60 hover:opacity-100'>
              FAQ
            </a>
          </div>
        </div> */}

        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-lg'>Community</h3>
          <div>
            <a href='https://forms.gle/EffWGrBUdc4wPBSD8' className='opacity-60 hover:opacity-100'>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className='container pb-14 text-center'>
        <h3>
          &copy; 2024 <strong>Llavero</strong> Wallet{' '}
        </h3>
      </section>
    </footer>
  );
};

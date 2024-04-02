import { Statistics } from './Statistics';
import logo from '../assets/llavero-logo-2.svg';

export const About = () => {
  return (
    <section id='about' className='container py-24 sm:py-32'>
      <div className='bg-muted/50 border rounded-lg py-12'>
        <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
          <img src={logo} alt='' className='w-[300px] object-contain rounded-lg' />
          <div className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
                  <strong>Llavero</strong>
                </span>{' '}
                Wallet
              </h2>
              <p className='text-xl text-muted-foreground mt-4'>
                <strong>Llavero</strong> Wallets uses KMS to secure your keys and secrets. Key
                Management Service (KMS) is like your personal bank vault. It like your Ledger /
                Trezor but on your personal AWS clloud stack. Making
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

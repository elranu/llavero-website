import logo from '../assets/llavero-logo-2.svg';

export const Cta = () => {
  return (
    <section id='cta' className='bg-muted/50 py-24'>
      <div className='container lg:grid lg:grid-cols-2 place-items-center gap-10'>
        <div className='text-center hidden lg:block'>
          <img
            src={logo}
            alt='llavero logo'
            className='h-[300px] object-contain rounded-lg mx-auto'
          />
        </div>

        <div className='space-y-4 lg:col-start-2'>
          <h2 className='text-3xl md:text-4xl font-bold '>
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              <strong>Llavero</strong>{' '}
            </span>
            Wallet
          </h2>
          <p className='text-muted-foreground text-xl mt-4 mb-8 lg:mb-0'>
            <strong>Llavero</strong> Wallet uses AWS KMS to secure your keys and secrets. Key
            Management Service (KMS) is like your Ledger / Trezor but on your personal AWS cloud
            stack.
          </p>

          <p className='text-muted-foreground text-xl mt-4 mb-8 lg:mb-0'>
            Lead security Companies as OpenZeppelin use AWS KMS to secure their keys and secrets for
            their blockchain customers. Now you can use this technology to secure your keys and
            secrets.
          </p>
          <p className='text-muted-foreground text-xl mt-4 mb-8 lg:mb-0'>
            On more step in decentralizing, with <strong>Llavero</strong> you avoid SaaS companies
            or custodial wallets to secure your keys and secrets.
          </p>
        </div>
      </div>
    </section>
  );
};

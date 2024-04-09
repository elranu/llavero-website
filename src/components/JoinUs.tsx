import { Button } from './ui/button';

export const JoinUs = () => {
  return (
    <section id='join-us' className='container flex flex-col items-center justify-center py-24'>
      <p className='max-w-xl text-4xl font-bold text-center'>
        Want to join the Llavero Wallet community? <span className='text-primary'>Join us.</span>
      </p>
      <Button size='lg' className='w-auto mt-8 text-2xl shadow-2xl'>
        Join us
      </Button>
    </section>
  );
};

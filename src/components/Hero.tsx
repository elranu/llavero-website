import { Button } from './ui/button';
import astronaut from '../assets/astronout-play.svg';
import intro from '../assets/v3.mp4';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

interface DialogProps {
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

export function DialogDemo(props: DialogProps): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>();

  useEffect(() => {
    setOpen(props.open || false);
  }, [props.open]);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    props.onOpenChange?.(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger />
      <DialogContent className='sm:max-w-[650px]'>
        <DialogHeader>
          <DialogTitle>What is Llavero Wallet?</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <video controls className='w-full' autoPlay={isOpen}>
            <source src={intro} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}

export const Hero = () => {
  const [isOpen, setOpen] = useState<boolean>();

  return (
    <>
      <section className='container grid justify-center gap-10 px-6 py-28 lg:grid-cols-2 place-items-center md:px-12 lg:px-20'>
        <div className='space-y-6 text-center lg:text-start'>
          <main className='text-5xl font-bold md:text-6xl'>
            <h1>My </h1>
            <h1 className='inline'>
              <span className='inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text'>
                Hardware Wallet
              </span>{' '}
            </h1>
            <h1>as </h1>
            <h2 className='inline'>
              <span className='inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text'>
                MY
              </span>{' '}
              Service
            </h2>
          </main>

          <div>
            <h2 className='text-2xl md:text-2xl'>Don't loose your keys anymore.</h2>
          </div>

          <div className='flex flex-col gap-x-8 gap-y-4'>
            <div className='flex flex-col items-center gap-2 lg:flex-row'>
              <Button className='w-auto text-xl' size='lg' onClick={() => setOpen(true)}>
                Watch 1 min intro video
              </Button>
              <div className='text-primary'>and</div>
              <Button className='w-auto text-xl' size='lg' variant='secondary' asChild>
                <a href='#howItWorks'> Get Started </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className='relative z-10 flex-row flex-wrap hidden gap-8 lg:flex'>
          <div className=''>
            <img
              src={astronaut}
              alt='astronaut'
              onClick={() => setOpen(true)}
              className='play-video h-[400px] w-auto'
            />
          </div>
        </div>

        {/* Shadow effect */}
        <div className='shadow'></div>
      </section>
      <DialogDemo open={isOpen} onOpenChange={setOpen} />
    </>
  );
};

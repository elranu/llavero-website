import { Button } from './ui/button';
//import { buttonVariants } from "./ui/button";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";
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
      <section className='container grid lg:grid-cols-2 place-items-center py-10 gap-10 px-6 md:px-12 lg:px-20 justify-center'>
        <div className='text-center lg:text-start space-y-6'>
          <main className='text-5xl md:text-6xl font-bold'>
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
            <p className='text-muted-foreground'>
              Secure Your Crypto with <strong>Llavero</strong> - Start Safeguarding Your Assets Now!
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <p>
              Discover the Power of <strong>Llavero</strong>:
            </p>
            <div className='flex gap-2 justify-center lg:justify-start'>
              <Button className='w-auto' asChild>
                <a href='#howItWorks'> Get Started Now!</a>
              </Button>
              <Button variant='secondary' className='w-auto' onClick={() => setOpen(true)}>
                Watch Now
              </Button>
            </div>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className='z-10 hidden lg:flex flex-row flex-wrap gap-8 relative'>
          <div className=' '>
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

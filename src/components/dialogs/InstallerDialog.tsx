import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './../ui/dialog';
import { Button } from '../ui/button';
import WindowsIcon from '@/assets/icons/WindowsIcon';
import MacIcon from '@/assets/icons/MacIcon';
import LinuxIcon from '@/assets/icons/LinuxIcon';

export function InstallerDialog(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onOpenChange = () => setOpen(!isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className='mx-auto w-fit'>Choose OS</Button>
      </DialogTrigger>
      <DialogContent className={'lg:max-w-screen-lg overflow-y-auto max-h-[90vh]'}>
        <DialogHeader>
          <DialogTitle>Choose your OS</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div>
          <div className='flex flex-col flex-wrap lg:flex-row'>
            <div className='items-center justify-center flex-1 bg-muted hover:bg-primary'>
              <a href='#' target='_blank' download>
                <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary group hover:text-primary-foreground'>
                  <WindowsIcon className='w-12 h-12' />
                  <div>Windows Installer</div>
                  <div className='mb-4 text-xs'>v.preview</div>
                  <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis
                    quo velit expedita.
                  </div>
                </div>
              </a>
            </div>
            <div className='items-center justify-center flex-1 bg-muted hover:bg-primary'>
              <a href='#' target='_blank' download>
                <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary group hover:text-primary-foreground'>
                  <MacIcon className='w-12 h-12' />
                  <div>MacOS Installer</div>
                  <div className='mb-4 text-xs'>v.preview</div>
                  <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis
                    quo velit expedita.
                  </div>
                </div>
              </a>
            </div>
            <div className='items-center justify-center flex-1 bg-muted hover:bg-primary'>
              <a href='#' target='_blank' download>
                <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary group hover:text-primary-foreground'>
                  <LinuxIcon className='w-12 h-12' />
                  <div>Linux Installer</div>
                  <div className='mb-4 text-xs'>v.preview</div>
                  <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis
                    quo velit expedita.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum sunt animi enim
          asperiores voluptates saepe eum officiis sed alias! Ipsum expedita quaerat saepe
          repudiandae, deleniti dignissimos cumque optio! Consectetur!
        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}

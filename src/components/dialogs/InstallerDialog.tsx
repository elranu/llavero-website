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
import desk1 from '../../assets/desktop/desktop-1.png';
import desk2 from '../../assets/desktop/desktop-2.png';
import desk3 from '../../assets/desktop/desktop-3.png';
import desk4 from '../../assets/desktop/desktop-4.png';

export function InstallerDialog({
  setOpenAwsCredentialsDialog,
}: {
  setOpenAwsCredentialsDialog: (value: boolean) => void;
}): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setOpen(!isOpen);
  };

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
        <div className='mb-4'>
          <div className='flex flex-col flex-wrap gap-1 lg:flex-row'>
            <div className='flex items-center justify-center flex-1 bg-muted group'>
              <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary'>
                <WindowsIcon className='w-12 h-12' />
                <div className='mb-4 text-secondary-foreground'>Windows Installer</div>
                <div className='mb-4 text-xs'>
                  <a
                    href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/llavero-0.1.0.Setup.exe'
                    className='underline hover:no-underline'
                  >
                    Llavero-0.1.0-preview.exe
                  </a>
                </div>
                <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'> Not signed, but Windows users can bypass Windows alert</div>
              </div>
            </div>

            <div className='flex items-center justify-center flex-1 bg-muted group'>
              <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary'>
                <LinuxIcon className='w-12 h-12' />
                <div className='mb-4 text-secondary-foreground'>Linux Installer</div>
                <div className='flex flex-col gap-2 mb-4 text-xs '>
                  <a
                    href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/llavero_0.1.0_amd64.deb'
                    className='underline hover:no-underline'
                  >
                    Llavero-0.1.0-preview.deb
                  </a>
                  <a
                    href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/Llavero-0.1.0-1.x86_64.rpm'
                    className='underline hover:no-underline'
                  >
                    Llavero-0.1.0-preview.rpm
                  </a>
                </div>
                {/* <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'></div> */}
              </div>
            </div>

            <div className='flex items-center justify-center flex-1 bg-muted group'>
              <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary'>
                <MacIcon className='w-12 h-12' />
                <div className='mb-4 text-secondary-foreground'>MacOS Installer</div>
                <div className='mb-4 text-xs'>
                  <s><a
                    href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/Llavero.dmg'
                    className='underline hover:no-underline'
                  >
                    Llavero-0.1.0-preview.dmg
                  </a></s>
                </div>
                <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                DMG not signed. Waiting for Apple Dev program approval
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr className='mb-4' />

        <div className='flex flex-col gap-8'>
          <h2 className='text-lg text-primary'># Desktop installation</h2>

          <div>
            <h3 className='font-bold'>
              1. Create your AWS Credentials:{' '}
              <span
                className='cursor-pointer text-primary'
                onClick={() => setOpenAwsCredentialsDialog(true)}
              >
                Guide
              </span>
            </h3>
          </div>
          <hr />
          <div>
            <h3 className='font-bold'>2. Download Installer </h3>
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              3.Run and Login with the credentials on the desktop installer
            </h3>

            <img className='mx-auto border-2 rounded border-primary' width='600' src={desk1} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              4. Complete your email and select how many keys you wanna create
            </h3>

            <img className='mx-auto border-2 rounded border-primary' width='600' src={desk2} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>5. Click install and wait</h3>

            <img className='mx-auto border-2 rounded border-primary' width='600' src={desk3} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              6. Check your email in the next 20 min to get your URL and your temporary password
            </h3>

            <img className='mx-auto border-2 rounded border-primary' width='600' src={desk4} />
          </div>
        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}

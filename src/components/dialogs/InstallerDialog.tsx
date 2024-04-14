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
import desk1 from "../../assets/desktop/desktop-1.png";
import desk2 from "../../assets/desktop/desktop-2.png";
import desk3 from "../../assets/desktop/desktop-3.png";
import desk4 from "../../assets/desktop/desktop-4.png";

export function InstallerDialog(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onOpenChange = () => setOpen(!isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className='mx-auto w-fit'>Download</Button>
      </DialogTrigger>
      <DialogContent className={'lg:max-w-screen-lg overflow-y-auto max-h-[90vh]'}>
        <DialogHeader>
          <DialogTitle>Download Installer</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div>
          <div className='flex'>
            <div className='items-center justify-center flex-1 bg-muted hover:bg-primary'>
              <a href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/llavero-0.1.0.Setup.exe' target='_blank'>
                <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary group hover:text-primary-foreground'>
                  <WindowsIcon className='w-12 h-12' />
                  <div>Windows Installer</div>
                  <div className='mb-4 text-xs'><a href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/llavero-0.1.0.Setup.exe' 
                  className='underline hover:no-underline' >Llavero-0.1.0-preview.exe</a></div>
                  <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                    
                  </div>
                </div>
              </a>
            </div>
            <div className='items-center justify-center flex-1 bg-muted hover:bg-primary'>
              <a href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/Llavero.dmg' target='_blank'>
                <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary group hover:text-primary-foreground'>
                  <MacIcon className='w-12 h-12' />
                  <div>MacOS Installer</div>
                  <div className='mb-4 text-xs'>
                  <a href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/Llavero.dmg' 
                  className='underline hover:no-underline' >Llavero-0.1.0-preview.dmg</a>
                  </div>
                  <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                    
                  </div>
                </div>
              </a>
            </div>
            <div className='items-center justify-center flex-1 bg-muted hover:bg-primary'>
              <a href='#' target='_blank'>
                <div className='flex flex-col items-center justify-center gap-2 p-8 text-primary group hover:text-primary-foreground'>
                  <LinuxIcon className='w-12 h-12' />
                  <div>Linux Installer</div>
                  <div className='mb-4 text-xs'>
                  <a href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/llavero_0.1.0_amd64.deb' 
                  className='underline hover:no-underline' >Llavero-0.1.0-preview.deb</a>
                  <br /><br />
                  <a href='https://github.com/llaverowallet/llavero/releases/download/v0.1.0/Llavero-0.1.0-1.x86_64.rpm' 
                  className='underline hover:no-underline' >Llavero-0.1.0-preview.rpm</a>
                  </div>
                  <div className='text-sm text-muted-foreground group-hover:text-secondary-foreground'>
                    
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div>
        <h1>Desktop installation</h1>

        <h3> 1. Create your AWS Credentials: <a href='' target='_blank'>Guide</a></h3>

        <h3>2. Download </h3>

        <h3>3.Run and Login with the credentials on the desktop installer</h3>

        <img src={desk1} width="500" />

        <h3>4. Complete your email and select how many keys you wanna create</h3>

        <img src={desk2} width="500" />

        <h3>5. Click install and wait</h3>

        <img src={desk3} width="500" />

        <h3>6. Check your email in the next 20 min to get your URL and your temporary password</h3>

        <img src={desk4} width="500" />
        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}

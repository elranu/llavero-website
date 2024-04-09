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

import vidcred from '../../assets/aws-credentials/0.mp4';
import onePic from '../../assets/aws-credentials/1.png';
import twoPic from '../../assets/aws-credentials/2.png';
import threePic from '../../assets/aws-credentials/3.png';
import fourPic from '../../assets/aws-credentials/4.png';
import fivePic from '../../assets/aws-credentials/5.png';
import sixPic from '../../assets/aws-credentials/6.png';
import sevenPic from '../../assets/aws-credentials/7.png';
import eightPic from '../../assets/aws-credentials/8.png';
import ninePic from '../../assets/aws-credentials/9.png';
import tenPic from '../../assets/aws-credentials/10.png';
import elevenPic from '../../assets/aws-credentials/11.png';
import twelvePic from '../../assets/aws-credentials/12.png';
import thirteenPic from '../../assets/aws-credentials/13.png';
import fourteenPic from '../../assets/aws-credentials/14.png';
import fifteenPic from '../../assets/aws-credentials/15.png';
import sixteenPic from '../../assets/aws-credentials/16.png';
import seventeenPic from '../../assets/aws-credentials/17.png';
import eighteenPic from '../../assets/aws-credentials/18.png';
import nineteenPic from '../../assets/aws-credentials/19.png';

export function AwsCredentialsDialog(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onOpenChange = () => setOpen(!isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className='mx-auto w-fit'>Guide</Button>
      </DialogTrigger>
      <DialogContent className={'lg:max-w-screen-lg overflow-y-auto max-h-[90vh]'}>
        <DialogHeader>
          <DialogTitle>Create AWS Credentials</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className='flex flex-col gap-8'>
          <video controls>
            <source src={vidcred} type='video/mp4' width='600' />
          </video>

          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/console/home?nc2=h_ct&amp;src=header-signin&amp;region=us-east-1'
              >
                1. Go to Console Home | Console Home | us-east-1
              </a>
            </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={onePic} />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/console/home?nc2=h_ct&amp;src=header-signin&amp;region=us-east-1'
              >
                2. Search on AWS Console
              </a>
            </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={twoPic} />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/console/home?nc2=h_ct&amp;src=header-signin&amp;region=us-east-1'
              >
                3. Type iam
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={threePic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/console/home?nc2=h_ct&amp;src=header-signin&amp;region=us-east-1'
              >
                4. Click on Users
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={fourPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users'
              >
                5. Click on Create user
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={fivePic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                6. Type the name of the user
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={sixPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                7. Click on Next
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={sevenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                8. Click on Attach policies directly
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={eightPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                9. Search AdministratorAccess
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={ninePic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                10. Select AdministratorAccess{' '}
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={tenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                11. Click on Next
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={elevenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create'
              >
                12. Click on Create user
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={twelvePic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users'
              >
                13. Click on View user
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={thirteenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/details/llavero-installer?section=permissions'
              >
                14. Click on Security credentials
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={fourteenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/details/llavero-installer?section=security_credentials'
              >
                15. Click on Create access key
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={fifteenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/details/llavero-installer/create-access-key'
              >
                16. Click on Other
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={sixteenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/details/llavero-installer/create-access-key'
              >
                17. Click on Next
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={seventeenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/details/llavero-installer/create-access-key'
              >
                18. Click on Create access key
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={eighteenPic}
            />{' '}
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/details/llavero-installer/create-access-key'
              >
                19. Copy the credentials to use them with the Llavero Wallet installer
              </a>
            </h3>
            <p></p>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={nineteenPic}
            />{' '}
          </div>
        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}

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

import zeroPic from '../../assets/fork/0.png';
import onePic from '../../assets/fork/1.png';
import twoPic from '../../assets/fork/2.png';
import threePic from '../../assets/fork/3.png';
import fourPic from '../../assets/fork/4.png';
import fivePic from '../../assets/fork/5.png';
import sixPic from '../../assets/fork/6.png';
import sevenPic from '../../assets/fork/7.png';
import eightPic from '../../assets/fork/8.png';
// import ninePic from '../../assets/fork/9.png';
// import tenPic from '../../assets/fork/10.png';
// import elevenPic from '../../assets/fork/11.png';
// import twelvePic from '../../assets/fork/12.png';
// import thirteenPic from '../../assets/fork/13.png';
// import fourteenPic from '../../assets/fork/14.png';
// import fifteenPic from '../../assets/fork/15.png';
import sixteenPic from '../../assets/fork/16.png';
import seventeenPic from '../../assets/fork/17.png';
import eighteenPic from '../../assets/fork/18.png';
import nineteenPic from '../../assets/fork/19.png';
import twentyPic from '../../assets/fork/20.png';
import twentyonePic from '../../assets/fork/21.png';
import twentytwoPic from '../../assets/fork/22.png';
import twentythreePic from '../../assets/fork/23.png';
import loginzero from '../../assets/fork/login-0.png';
import loginone from '../../assets/fork/login-1.png';
import logintwo from '../../assets/fork/login-2.png';
//import loginthree from '../../assets/fork/login-3.png';
import loginfour from '../../assets/fork/login-4.png';

export function GithubDialog(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onOpenChange = () => setOpen(!isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className='mx-auto w-fit'>Guide</Button>
      </DialogTrigger>
      <DialogContent className={'lg:max-w-screen-lg overflow-y-auto max-h-[90vh]'}>
        <DialogHeader>
          <DialogTitle>Fork + Github Actions</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className='flex flex-col gap-8'>
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/llaverowallet/llavero'
              >
                1. Go to the Llavero's Repo: github.com/llaverowallet/llavero
              </a>
            </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={zeroPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/llaverowallet/llavero'
              >
                2. Click on Fork
              </a>
            </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={onePic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/llaverowallet/llavero/fork'
              >
                3. Click on Choose an owner
              </a>
            </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={twoPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/llaverowallet/llavero/fork'
              >
                4. Click on Create fork
              </a>
            </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={threePic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>5. On your brand new fork, click on Settings</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={fourPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>6. Click on Secrets and variables</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={fivePic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>7. Click on Actions</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={sixPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>8. Click on New repository secret</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={sevenPic} />
          </div>
          <hr />
          <div className='block'>
            <h3 className='mb-2 font-bold'>9. Create the following secrets on your forked repo:</h3>
            <br />

            <pre>
              <code className='inline-flex items-center p-4 pl-6 space-x-4 text-sm text-left text-white bg-gray-800 rounded-lg sm:text-base'>
                {`AWS_ACCESS_KEY_ID: The created KEY ID
AWS_SECRET_ACCESS_KEY: The created SECRET KEY
EMAIL: The email for account recovery and login.
REGION: us-east-1 or the region of your preference
NUMBER_OF_KEYS (optional default: 1): The number of KMS to be created
`}
</code>
            </pre>

            <br />
            <img className='mx-auto border-2 rounded border-primary' width='600' src={eightPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>10. Click on Actions</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={sixteenPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>11. Click on highlight</h3>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={seventeenPic}
            />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>12. Click on GithubAction Installer</h3>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={eighteenPic}
            />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>13. Click on Run workflow</h3>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={nineteenPic}
            />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>14. Click on Run workflow</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={twentyPic} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>15. Click on GithubAction Installer</h3>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={twentyonePic}
            />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>16. Click on Workflow-Installer.</h3>
            <div>
              <p className='mb-2 text-sm text-muted-foreground'>
                Here you can see how your installation on your personal cloud stack is progressing.
                It will take 15-20
              </p>
            </div>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={twentytwoPic}
            />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>
              <a
                className='text-primary'
                rel='noopener noreferrer'
                target='_blank'
                href='https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#'
              >
                24. On AWS Cloudformation
              </a>
            </h3>
            <div>
              <p className='mb-2 text-sm text-muted-foreground'>
                Meanwhile you can check the installation stack.{' '}
              </p>
            </div>
            <img
              className='mx-auto border-2 rounded border-primary'
              width='600'
              src={twentythreePic}
            />
          </div>
          <br />
          <br />
          <hr />
          <h1 className='text-lg '># After the installation finish</h1>
          <div>
            <h3 className='mb-2 font-bold'>
              1. When the installation finish, you will get an email with the subject: Llavero: Your
              temporary password
            </h3>
            <div>
              <p className='mb-2 text-sm text-muted-foreground'>
                The page is created on your personal AWS cloud Browse
              </p>
            </div>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={loginzero} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>2. Click on Log in</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={loginone} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>3. Sign in with your temporary password </h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={logintwo} />
          </div>
          <hr />
          <div>
            <h3 className='mb-2 font-bold'>4. Create your new strong password</h3>
            <img className='mx-auto border-2 rounded border-primary' width='600' src={loginfour} />
          </div>
        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}

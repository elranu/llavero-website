import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import aws from '../assets/cloud2.svg';
import credentials from '../assets/credentials.svg';
import installer from '../assets/installer.svg';
import fork from '../assets/fork.svg';
import { AwsAccountDialog } from './dialogs/AwsAccountDialog';
import { InstallerDialog } from './dialogs/InstallerDialog';
import { GithubDialog } from './dialogs/GithubDialog';
import { AwsCredentialsDialog } from './dialogs/AwsCredentialsDialog';
import { useState } from 'react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  button?: JSX.Element;
}

const features: FeatureProps[] = [
  {
    icon: <img src={aws} style={{ height: '80px' }} />,
    title: 'AWS Account',
    description: 'Create your personal AWS Account. Follow this steps.',
  },
  {
    icon: <img src={credentials} style={{ height: '80px' }} />,
    title: 'Create AWS Credentials',
    description: "Create AWS credentials required by Llavero's Installer. Follow this steps.",
  },
  {
    icon: <img src={installer} style={{ height: '80px' }} />,
    title: 'Installer',
    description: 'Download the installer for Linux, MacOS or Windows.',
  },
  {
    icon: <img src={fork} style={{ height: '80px' }} />,
    title: 'Fork + Github Actions',
    description: "Fork Llavero's repository, setup Github's secrets and run the Github Actions.",
  },
];

export const HowItWorks = () => {
  const [openAwsCredentialsDialog, setOpenAwsCredentialsDialog] = useState(false);

  return (
    <section id='howItWorks' className='container py-20 text-center'>
      <h2 className='text-3xl font-bold md:text-4xl '>
        How It{' '}
        <span className='text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
          Works{' '}
        </span>
        Step-by-Step Guide
      </h2>
      <p className='mx-auto mt-4 mb-8 text-xl md:w-3/4 text-muted-foreground'>
        Install <strong>Llavero</strong> on your personal AWS Account. Taking advantage of their
        great free tier. <br />
        <strong>Llavero</strong> can be installed with the app Installer, in their respective OS or
        with Github Actions on your forked repository.
      </p>
      <div className='grid lg:grid-rows-[auto,auto] gap-8 justify-center'>
        <Card className='max-w-[450px] lg:w-[450px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[0].icon}
              {features[0].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[0].description}
              <AwsAccountDialog />
            </div>
          </CardContent>
          <span className='absolute text-5xl font-bold text-transparent top-2 left-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
            1
          </span>
        </Card>

        <Card className='max-w-[450px] lg:w-[450px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[1].icon}
              {features[1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[1].description}
              <AwsCredentialsDialog
                open={openAwsCredentialsDialog}
                setOpenAwsCredentialsDialog={setOpenAwsCredentialsDialog}
              />
            </div>
          </CardContent>
          <span className='absolute text-5xl font-bold text-transparent top-2 left-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
            2
          </span>
        </Card>
      </div>
      <div className='flex items-center justify-center gap-2 my-4 text-muted-foreground'>
        <hr className='w-1/4 my-8 border-blue-300' />
        <span className='text-lg text-blue-500 '>Choose your installer flavor</span>
        <hr className='w-1/4 my-8 border-blue-300' />
      </div>

      <div className='grid lg:grid-cols-[auto,auto,auto] gap-y-4 gap-x-8 mb-8 justify-center'>
        <Card className='max-w-[450px] lg:w-[450px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[2].icon}
              {features[2].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[2].description}
              <InstallerDialog setOpenAwsCredentialsDialog={setOpenAwsCredentialsDialog} />
            </div>
          </CardContent>
        </Card>

        <div className='flex items-center justify-center text-lg text-blue-500 '>or</div>

        <Card className='max-w-[450px] lg:w-[450px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[3].icon}
              {features[3].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[3].description}
              <GithubDialog />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

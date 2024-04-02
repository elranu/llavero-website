import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import aws from '../assets/cloud2.svg';
import credentials from '../assets/credentials.svg';
import installer from '../assets/installer.svg';
import fork from '../assets/fork.svg';
import { Button } from './ui/button';
import { AwsAccountDialog } from './dialogs/AwsAccountDialog';
import { AwsCredentialsDialog } from './dialogs/AwsCredentialsDialog';
import { InstallerDialog } from './dialogs/InstallerDialog';
import { GithubDialog } from './dialogs/GithubDialog';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  button?: JSX.Element;
  dialog: JSX.Element;
}

const features: FeatureProps[] = [
  {
    icon: <img src={aws} style={{ height: '80px' }} />,
    title: 'AWS Account',
    description: 'Create your personal AWS Account. Follow this steps.',
    dialog: <AwsAccountDialog />,
  },
  {
    icon: <img src={credentials} style={{ height: '80px' }} />,
    title: 'Create AWS Credentials',
    description: "Create AWS credentials required by Llavero's Installer. Follow this steps.",
    dialog: <AwsCredentialsDialog />,
  },
  {
    icon: <img src={installer} style={{ height: '80px' }} />,
    title: 'Installer',
    description:
      'Download the installer for Linux, MacOS or Windows. Put your AWS credentials and install it.',
    dialog: <InstallerDialog />,
  },
  {
    icon: <img src={fork} style={{ height: '80px' }} />,
    title: 'Fork + Github Actions',
    description: "Fork Llavero's repository, setup Github's secrets and run the Github Actions.",
    button: <Button>Fork</Button>,
    dialog: <GithubDialog />,
  },
];

export const HowItWorks = () => {
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
      <div className='grid lg:grid-cols-[auto,auto] gap-8 justify-center'>
        <Card className='w-[500px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[0].icon}
              {features[0].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[0].description}
              {features[0].dialog}
            </div>
          </CardContent>
          <span className='absolute text-5xl font-bold text-transparent top-2 left-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
            1
          </span>
        </Card>

        <Card className='w-[500px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[1].icon}
              {features[1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[1].description}
              {features[1].dialog}
            </div>
          </CardContent>
          <span className='absolute text-5xl font-bold text-transparent top-2 left-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
            2
          </span>
        </Card>
      </div>
      <div className='flex items-center justify-center gap-2 text-muted-foreground'>
        <hr className='w-1/4 my-8 ' /> Select one <hr className='w-1/4 my-8 ' />
      </div>

      <div className='grid lg:grid-cols-[auto,auto] gap-8 mb-8 justify-center'>
        <Card className='w-[500px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[2].icon}
              {features[2].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[2].description}
              {features[2].dialog}
            </div>
          </CardContent>
          <span className='absolute text-5xl font-bold text-transparent top-2 left-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
            3
          </span>
        </Card>

        <Card className='w-[500px] bg-muted/50 relative'>
          <CardHeader>
            <CardTitle className='grid gap-4 place-items-center'>
              {features[3].icon}
              {features[3].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              {features[3].description}
              {features[3].dialog}
            </div>
          </CardContent>
          <span className='absolute text-5xl font-bold text-transparent top-2 left-3 bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
            3
          </span>
        </Card>
      </div>
    </section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import aws from '../assets/cloud2.svg';
import credentials from '../assets/credentials.svg';
import installer from '../assets/installer.svg';
import fork from '../assets/fork.svg';
import { Button } from './ui/button';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  button: JSX.Element;
}

const features: FeatureProps[] = [
  {
    icon: <img src={aws} style={{ height: '80px' }} />,
    title: 'AWS Account',
    description: 'Create your personal AWS Account. Follow this steps.',
    button: <Button>Watch</Button>,
  },
  {
    icon: <img src={credentials} style={{ height: '80px' }} />,
    title: 'Create AWS Credentials',
    description: "Create AWS credentials required by Llavero's Installer. Follow this steps.",
    button: <Button>Watch</Button>,
  },
  {
    icon: <img src={installer} style={{ height: '80px' }} />,
    title: 'Installer',
    description:
      'Download the installer for Linux, MacOS or Windows. Put your AWS credentials and install it.',
    button: <Button>Download</Button>,
  },
  {
    icon: <img src={fork} style={{ height: '80px' }} />,
    title: 'Fork + Github Actions',
    description: "Fork Llavero's repository, setup Github's secrets and run the Github Actions.",
    button: <Button>Fork</Button>,
  },
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container text-center py-20'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        How It{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Works{' '}
        </span>
        Step-by-Step Guide
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
        Install <strong>Llavero</strong> on your personal AWS Account. Taking advantage of their
        great free tier. <br />
        <strong>Llavero</strong> can be installed with the app Installer, in their respective OS or
        with Github Actions on your forked repository.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map(({ icon, title, description, button }: FeatureProps) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col gap-4'>
                {description}
                <div>{button}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

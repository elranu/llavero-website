import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import astronaut from '../assets/astronaut-pointing.svg';
import bio from '../assets/identity.svg';
import saas from '../assets/saas.svg';
import opensource from '../assets/open-source.svg';
import nextsteps from '../assets/next-steps.svg';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: 'User friendly as SaaS',
    description: 'Enterprise-grade security and privacy for the end user. No intermediates, no data sharing.',
    icon: <img src={saas} alt='saas' className='w-10' />,
  },
  {
    title: 'MFA ease of use and security (TOTP, Biometrics, email, whitelist...)',
    description: 'IaC security and automation for the end user, without intermediates.',
    icon: <img src={bio} alt='biometrics' className='w-10' />,
  },
  {
    title: 'Open-source',
    description:
      'Transparency, security, and privacy are the core values of Llavero Wallet. Craft with well-known components, by engineers and architects.',
    icon: <img src={opensource} alt='open source' className='w-10' />,
  },
  {
    title: 'Next step: censorship resistance',
    description:
      'We have a lot of objectives and we need Contributions to fulfill this objectives. Contact us for future meetings and collaborations.',
    icon: <img src={nextsteps} alt='next steps' className='w-10' />,
  },
];

export const Services = () => {
  return (
    <section className='container justify-center gap-10 px-6 py-10 md:px-12 lg:px-20'>
      <div className='grid xl:grid-cols-[2fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl font-bold md:text-4xl'>
            Objective:
            <span className='text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
              {' '}
              Identity Decentralization
            </span>
          </h2>

          <p className='mt-4 mb-8 text-xl text-muted-foreground '>
            <strong>Llavero</strong> Wallet is the first IndentityOps. The goal is to provide a secure and easy-to-use personal stack for individuals.
            So that users can manage their digital Identity and assets in a private and decentralized way. 
          </p>

          <div className='flex flex-col gap-8'>
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader>
                  <div className='flex gap-4'>
                    <div className='flex items-center justify-center p-1 rounded-lg bg-primary/20 h-fit'>
                      {icon}
                    </div>

                    <div className='flex-1'>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className='mt-2 text-md'>{description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={astronaut}
          className='hidden xl:flex h-[500px] w-auto object-contain'
          alt='IndentityOps'
        />
      </div>
    </section>
  );
};

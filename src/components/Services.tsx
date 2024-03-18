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
    title: 'MFA ease of use and security (TOTP, Biometrics, email, whitelist,...)',
    description: 'IaC security and automation for the end user, without intermediates.',
    icon: <img src={bio} alt='biometrics' className='w-10' />,
  },
  {
    title: 'User friendly as SaaS',
    description: 'AWS KMS is the hardware wallet that Companies uses such as OpenZeppelin.',
    icon: <img src={saas} alt='saas' className='w-10' />,
  },
  {
    title: 'Open-source',
    description:
      'Transparency, security, and privacy are the core values of Llavero Wallet. Craft with well-known components, by engineers and architects.',
    icon: <img src={opensource} alt='open source' className='w-10' />,
  },
  {
    title: 'Next step: censorship resistance.',
    description: 'Contributions to fulfill this objective. Feedback at: ',
    icon: <img src={nextsteps} alt='next steps' className='w-10' />,
  },
];

export const Services = () => {
  return (
    <section className='container py-10 gap-10 px-6 md:px-12 lg:px-20 justify-center'>
      <div className='grid xl:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Objective:
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {' '}
              Identity Decentralization
            </span>
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            <strong>Llavero</strong> Wallet is the first IndentityOps. Decentralizing identity for
            end-users.
          </p>

          <div className='flex flex-col gap-8'>
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader>
                  <div className='flex gap-4'>
                    <div className='bg-primary/20 p-1 rounded-lg items-center justify-center flex h-fit'>
                      {icon}
                    </div>

                    <div className='flex-1'>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className='text-md mt-2'>{description}</CardDescription>
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

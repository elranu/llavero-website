import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl:
      'https://media.licdn.com/dms/image/C5603AQEhPa8izOzRgQ/profile-displayphoto-shrink_200_200/0/1517709799197?e=1716422400&v=beta&t=XCbePt_NRj713M8pqLtPJ0mDnLaXd9dXJmDdIQyt9j8',
    name: 'Mariano Julio Vicario',
    position: 'Software Engineer - Tech Lead',
    description: "I'm a tech enthusiast with a passion for solving problems and a fast learner",
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/mvicario/' },
      {
        name: 'X',
        url: 'https://www.x.com/el_ranu',
      },
      {
        name: 'Github',
        url: 'https://github.com/elranu/',
      },
    ],
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/25652943?v=4',
    name: 'Ricardo Olarte',
    position: 'Software Engineer',
    description: "Passionate about applying the necessary technologies to improve people's lives",
    socialNetworks: [
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/raop155/' },
      { name: 'Github', url: 'https://github.com/raop155/' },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      case 'Facebook':
        return <Facebook size='20' />;

      case 'Instagram':
        return <Instagram size='20' />;

      case 'X':
        return <Twitter size='20' />;

      case 'Github':
        return <Github size='20' />;
    }
  };

  return (
    <section id='team' className='container py-16'>
      <h2 className='mb-10 text-3xl font-bold md:text-4xl'>
        <span className='text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text'>
          The Team
        </span>
      </h2>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10'>
        {teamList.map(({ imageUrl, name, position, socialNetworks, description }: TeamProps) => (
          <Card
            key={name}
            className='relative flex flex-col items-center justify-center mt-8 bg-muted/50'
          >
            <CardHeader className='flex items-center justify-center pb-2 mt-8'>
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className='absolute object-cover w-24 h-24 rounded-full -top-12 aspect-square'
              />
              <CardTitle className='text-center'>{name}</CardTitle>
              <CardDescription className='text-primary'>{position}</CardDescription>
            </CardHeader>

            <CardContent className='pb-2 text-center'>
              <p>{description}</p>
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                <div key={name}>
                  <a
                    href={url}
                    target='_blank'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    <span className='sr-only'>{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

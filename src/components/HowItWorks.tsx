import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "AWS Account",
    description:
      "Create your personal AWS Account. Follow this steps.",
  },
  {
    icon: <MapIcon />,
    title: "Create AWS Credentials",
    description:
      "Create AWS credentials requiered by Llavero's Installer. Follow this steps.",
  },
  {
    icon: <PlaneIcon />,
    title: "Installer",
    description:
      "Download the installer for Linux, MacOS or Windows. Put your AWS credentials and install it.",
  },
  {
    icon: <GiftIcon />,
    title: "Fork + Github Actions",
    description:
      "Fork Llavero's repository, setup Github's secrets and run the Github Actions.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Install Llavero on your personal AWS Account. Taking advantage of their great free tier. <br />
        Llavero can be installed with the app Installer, in their respective OS. Or with Github Actions on your forked repository. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dyi from "../assets/dyi.svg";
import ux from "../assets/easy-user-experience-.svg";
import vault from "../assets/vault.svg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Used by Industry Security Experts",
    description:
      "OpenZeppelin and unicorns companies use AWS KMS to secure end-user assets.",
    image: vault,
  },
  {
    title: "Intuitive user experience as any SaaS",
    description:
      "But is yours, you have, you hide it, you control it, you recover it.",
    image: ux,
  },
  {
    title: "Easy DYI Setup",
    description:
      "Create an personal AWS account, create AWS credentials for the setup and install it :) Forking or with a desktop app.",
    image: dyi,
  },
];

const featureList: string[] = [
  "MFA",
  "User friendly",
  "Self-custody",
  "Always recover",
  "No seed phrase vulnerabilities",
  "Open-Source",
  "Responsive design",
  "Full privacy",
  "Hardware encryption",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

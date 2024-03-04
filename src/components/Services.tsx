import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, ChartIcon } from "./Icons";
import astronaut from "../assets/astronaut-pointing.svg"
import bio from "../assets/bio.svg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "MFA ease of use and security (TOTP, Biometrics, email, whitelist,...)",
    description:
      "IaC security and automation for the end user, without intermediates.",
    icon: <img src={bio} alt="biometrics" className="h-11 w-12 fill-primary" />,
  },
  {
    title: "User friendly as SaaS",
    description:
      "AWS KMS is the hardware wallet that Companies uses such as OpenZeppelin.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Open-source",
    description:
      "Transparency, security, and privacy are the core values of Llavero Wallet. Craft with well-known components, by engineers and architects.",
    icon: <ChartIcon />,
  },
  {
    title: "Next step: censorship resistance.",
    description:
      "Contributions to fulfill this objective. Feedback at: ",
    icon: <MagnifierIcon />,
  }
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
          Objective: {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Identity Decentralization 
            </span>
            
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Llavero Wallet is the first IndentityOps. Decentralizing identity for end-users. 
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={astronaut}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="IndentityOps"
        />
      </div>
    </section>
  );
};

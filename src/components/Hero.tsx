import { Button } from "./ui/button";
//import { buttonVariants } from "./ui/button";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";
import astronaut from "../assets/astronout-play.svg";
import intro from "../assets/v3.mp4";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface DialogProps {
  open?: boolean;
  onOpenChange?(open: boolean): void;
}

export function DialogDemo(props: DialogProps): JSX.Element {
  const [isOpen, setOpen] =  useState<boolean>();
  
  useEffect(() => {
    setOpen(props.open || false);
  }, [props.open]);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    props.onOpenChange?.(open);
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger />
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Llavero</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <video controls className="w-full" autoPlay={isOpen}>
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <DialogFooter  />
      </DialogContent>
    </Dialog>
  )
}



export const Hero = () => {
  const [isOpen, setOpen] =  useState<boolean>();
  
  return (
  <>
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-24 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1>My {" "}</h1>
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Hardware Wallet
            </span>{" "}
          </h1>
          <h1>
          as {" "}
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              MY
            </span>{" "}
            Service
          </h2>
        </main>

        <h2 className="text-3xl md:text-3xl font-bold">
          Don't loose your keys anymore
        </h2>

        <Button className="w-full md:w-1/3" onClick={()=> setOpen(true)}>Play Intro Video</Button>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
          <img src={astronaut} alt="astronaut" onClick={()=> setOpen(true)} className="play-video" />
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
    <DialogDemo open={isOpen} onOpenChange={setOpen}/>
  </>
  );
};

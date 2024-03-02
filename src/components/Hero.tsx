import { Button } from "./ui/button";
//import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/dialog";
import { useEffect, useState } from "react";

export function AlertDialogDemo(open: boolean) {
  const [isOpen, setOpen] =  useState<boolean>(open);
  
  useEffect(() => {
    setOpen(open);
  }, [open]);
  
  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}


export const Hero = () => {
  const [isOpen, setOpen] =  useState<boolean>(true);
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-24 gap-10">
      <AlertDialogDemo open={isOpen} />
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

        <Button className="w-full md:w-1/3" onClick={() => setOpen(true)}>Play Intro Video</Button>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

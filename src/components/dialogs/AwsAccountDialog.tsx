import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from './../ui/dialog';
import { Button } from "../ui/button";

export function AwsAccountDialog(): JSX.Element {
    const [isOpen, setOpen] = useState<boolean>(false);
    const onOpenChange = () => setOpen(!isOpen);
  
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button className='mx-auto w-fit'>Start</Button>
        </DialogTrigger>
        <DialogContent className={'lg:max-w-screen-lg overflow-y-auto max-h-[90vh]'}>
          <DialogHeader>
            <DialogTitle>AWS Account</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum sunt animi enim
            asperiores voluptates saepe eum officiis sed alias! Ipsum expedita quaerat saepe
            repudiandae, deleniti dignissimos cumque optio! Consectetur!
          </div>
  
          <DialogFooter />
        </DialogContent>
      </Dialog>
    );
  }
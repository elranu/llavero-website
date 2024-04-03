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

import zeroPic from '../../assets/fork/0.png';
import onePic from '../../assets/fork/1.png';
import twoPic from '../../assets/fork/2.png';
import threePic from '../../assets/fork/3.png';
import fourPic from '../../assets/fork/4.png';
import fivePic from '../../assets/fork/5.png';
import sixPic from '../../assets/fork/6.png';
import sevenPic from '../../assets/fork/7.png';
import eightPic from '../../assets/fork/8.png';
// import ninePic from '../../assets/fork/9.png';
// import tenPic from '../../assets/fork/10.png';
// import elevenPic from '../../assets/fork/11.png';
// import twelvePic from '../../assets/fork/12.png';
// import thirteenPic from '../../assets/fork/13.png';
// import fourteenPic from '../../assets/fork/14.png';
// import fifteenPic from '../../assets/fork/15.png';
import sixteenPic from '../../assets/fork/16.png';
import seventeenPic from '../../assets/fork/17.png';
import eighteenPic from '../../assets/fork/18.png';
import nineteenPic from '../../assets/fork/19.png';
import twentyPic from '../../assets/fork/20.png';
import twentyonePic from '../../assets/fork/21.png';
import twentytwoPic from '../../assets/fork/22.png';
import twentythreePic from '../../assets/fork/23.png';
import loginzero from '../../assets/fork/login-0.png';
import loginone from '../../assets/fork/login-1.png';
import logintwo from '../../assets/fork/login-2.png';
//import loginthree from '../../assets/fork/login-3.png';
import loginfour from '../../assets/fork/login-4.png';

export function GithubDialog(): JSX.Element {
    const [isOpen, setOpen] = useState<boolean>(false);
    const onOpenChange = () => setOpen(!isOpen);

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button className='mx-auto w-fit'>Fork</Button>
            </DialogTrigger>
            <DialogContent className={'lg:max-w-screen-lg overflow-y-auto max-h-[90vh]'}>
                <DialogHeader>
                    <DialogTitle>Fork + Github Actions</DialogTitle>
                    <DialogDescription />
                </DialogHeader>
                <div>
                    <div>
                        <h3>
                            <a href="https://github.com/elranu/llavero" className="text-blue-600 text-xl">1. Go to the Llavero's Repo: github.com/elranu/llavero</a>
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={zeroPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            <a href="https://github.com/elranu/llavero">2. Click on Fork</a>
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={onePic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            <a href="https://github.com/elranu/llavero/fork">3. Click on Choose an owner</a>
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={twoPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            <a href="https://github.com/elranu/llavero/fork">4. Click on Create fork</a>
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={threePic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            5. On your brand new fork, click on Settings
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={fourPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            6. Click on Secrets and variables
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={fivePic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            7. Click on Actions
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={sixPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            8. Click on New repository secret
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={sevenPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            9. Create the following secrets on your forked repo:</h3>
                                <br />
                            <ul>
                                <li>1. AWS_ACCESS_KEY_ID: the created KEY Id</li>
                                <li>2. AWS_SECRET_ACCESS_KEY : the created Secret Key </li>
                                <li>3. EMAIL : the email for account recovery and login.</li>
                                <li>4. REGION : us-east-1</li>
                                <li>5. NUMBER_OF_KEYS (optional default: 1): The number of KMS to be created</li>
                            </ul>

                        <br />
                        <img width="600" src={eightPic} />
                       
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            10. Click on Actions
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={sixteenPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            11. Click on highlight
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={seventeenPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            12. Click on GithubAction Installer
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={eighteenPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            13. Click on Run workflow
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={nineteenPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            14. Click on Run workflow
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={twentyPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            15. Click on GithubAction Installer
                        </h3>
                        <p>
                        </p>
                        <img width="600" src={twentyonePic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            16. Click on Workflow-Installer.
                        </h3>
                        <div>
                            <p>
                                Here you can see how your installation on your personal cloud stack is progressing.
                                <br />
                                It will take 15-20
                            </p>
                        </div>
                        <p>
                        </p>
                        <img width="600" src={twentytwoPic} />
                    </div><hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>
                            <a href="https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#">24.  On AWS Cloudformation</a>
                        </h3>
                        <div>
                            <p>Meanwhile you can check the installation stack. </p>
                        </div>
                        <p>
                        </p>
                        <img width="600" src={twentythreePic} />
                    </div>
                    <br />
                    <br />


                    <h1 className=' text-2xl '>After the installation finish</h1>
                    <hr />
                    <br />
                    <div>
                        <h3>1. When the installation finish, you will get an email with the subject: Llavero: Your temporary password</h3>
                        <div>
                            <p>The page is created on your personal AWS cloud. Browse</p>
                        </div>
                        <p>
                        </p>
                        <img width="600" src={loginzero} />
                    </div>
                    <hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>2. Click on Log in</h3>
                        <p>
                        </p>
                        <img width="600" src={loginone} />
                    </div>
                    <hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>3. Sign in with your temporary password </h3>
                        <p>
                        </p>
                        <img width="600" src={logintwo} />
                    </div>
                    <hr className='w-3/4 my-4 ' />
                    <div>
                        <h3>4. Create your new strong password</h3>
                        <p>
                        </p>
                        <img width="600" src={loginfour} />
                    </div>

                </div>

                <DialogFooter />
            </DialogContent>
        </Dialog>
    );
}
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
                    <DialogTitle>Create your AWS Account</DialogTitle>
                    <DialogDescription />
                </DialogHeader>
                <div id="createAWs" className="{ }">
                    <a href="https://aws.amazon.com/" className="{ text-blue-600 text-xl }" rel="noopener noreferrer">Go to Amazon Web Services</a>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">1. Click on Sign In to the Console</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/a78f3727-d029-4da2-b137-1f0aca6aa184/3dfcb704-a0e6-40b4-9ac9-ae971d36e05b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9186&fp-y=0.0322&fp-z=2.9435&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=724&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNzgmaD04MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Click on Sign In to the Console" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">2. Click on Create a new AWS account</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/6eae72f2-9c5a-4e8c-8098-05d54e43a7c2/5ff278b9-a8c5-4560-b72c-02b355ebf9ff.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3282&fp-y=0.5918&fp-z=2.1111&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=380&mark-y=319&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NDAmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Click on Create a new AWS account" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">3. Type your personal e-mail and your account name. Then click on Verify email address</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/36c7aea7-cd6a-4012-9490-a7d4bac79d1b/94ac91f5-d31d-4ab6-b07f-5c15cd9be87f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6019&fp-y=0.3983&fp-z=2.1383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=385&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Type your personal e-mail and your account name. Then click on Verify email address" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">4. Copy and Paste the verification code you got on your e-mail and click verify.</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/6dfce1a0-e3cd-49bb-a2b2-6b3f5e98bef8/a05e5330-d711-4135-b0d6-e507701fcebc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6019&fp-y=0.4409&fp-z=2.1383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=385&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Copy and Paste the verification code you got on your e-mail and click verify." />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h2><a href="https://portal.aws.amazon.com/billing/signup#/start/password"># AWS Console - Signup</a></h2></div>

                    <div><h3 className="{ font-bold }">5. Type a strong password</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/21e0c978-36ae-4bd4-b851-d5de117b6a19/3054d318-917b-44f0-b2ea-2a03e5a60b0c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6016&fp-y=0.4598&fp-z=2.1383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=385&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Type a strong password" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h2><a href="https://portal.aws.amazon.com/billing/signup#/account"># AWS Console - Signup</a></h2></div>

                    <div><h3 className="{ font-bold }">6. Fill you contact information</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/ff13af2f-b1c6-4f2d-9b65-2cc572e75dfc/51ae1474-db3b-4405-ba1c-331cc78097b4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5972&fp-y=0.4503&fp-z=2.1383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=385&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Fill you contact information" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">7. Check I have read and agree to the terms of the AWS Customer Agreement .
                        Then continue to step 2.</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/93329517-7991-452e-994b-61c8d98d1e32/10a35b19-069d-4fb7-9903-78e9eae2d10e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5194&fp-y=0.8477&fp-z=3.2050&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=577&mark-y=331&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NiZoPTQ2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" width="600" alt="Check I have read and agree to the terms of the AWS Customer Agreement . 
Then continue to step 2." />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h2><a href="https://portal.aws.amazon.com/billing/signup#/paymentinformation"># AWS Console - Signup</a></h2></div>

                    <div><h3 className="{ font-bold }">8. Fill your credit or debit card info. And continue to the next step</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/69a04524-c4a0-46da-b3ec-77fbb425e09e/d9191c3d-6353-44af-96ef-62b44a460341.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5552&fp-y=0.4551&fp-z=2.6071&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=469&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjEmaD02NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Fill your credit or debit card info. And continue to the next step" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h2><a href="https://portal.aws.amazon.com/billing/signup#/identityverification"># AWS Console - Signup</a></h2></div>

                    <div><h3 className="{ font-bold }">9. Fill your mobile phone information and the security check challenge.  </h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/f687ecc1-76bf-4fc2-93cb-cb8c5894b93b/bbf5290c-f77a-4767-ae7f-e25d635355f2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5972&fp-y=0.4428&fp-z=2.1383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=385&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Fill your mobile phone information and the security check challenge.  " />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">10. Copy the verification code you got on your mobile phone.</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/f06ba65d-e036-40f8-959b-44763e88cbac/62ec0201-1a6a-4fdc-af8e-81dac1ff6c9c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5972&fp-y=0.3482&fp-z=2.1383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=385&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzAmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Copy the verification code you got on your mobile phone." />
                    </div>
                    <hr className='w-3/4 my-4 ' />

                    <div><h2><a href="https://portal.aws.amazon.com/billing/signup#/support"># AWS Console - Signup</a></h2></div>

                    <div><h3 className="{ font-bold }">11. Click on Select a support plan</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/e62acec6-820b-495f-b2fc-319c36c27c43/afc4756c-8bde-4829-912c-7ecfd650a30b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4962&fp-y=0.2914&fp-z=1.5179&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=273&mark-y=283&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NTQmaD00OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Click on Select a support plan" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">12. Click on Complete sign up</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/0671584d-dcc8-471e-901a-a5140f6e812f/c442b94e-fa00-4b0e-be70-1ec15a06e4d9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4959&fp-y=0.8647&fp-z=2.1358&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=384&mark-y=466&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MzEmaD01MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Click on Complete sign up" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h2><a href="https://portal.aws.amazon.com/billing/signup#/subscribe"># AWS Console - Signup</a></h2></div>

                    <div><h3 className="{ font-bold }">13. Click on Go to the AWS Management Console</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/659c1cde-a21d-41a4-a028-b91c656b0d9f/1a0e4d55-6444-4bae-8f79-0e603a1f6919.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4959&fp-y=0.5913&fp-z=1.9535&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=352&mark-y=319&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00OTcmaD01NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Click on Go to the AWS Management Console" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">14. Type email with you have registered and click Next and type your password</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/616e322d-06b8-41c4-b397-61159d8a43ac/b602202f-cabb-4586-9488-7cdadf4d495e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2851&fp-y=0.4810&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=227&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMzEmaD0yOSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Type email with you have registered and click Next" />
                    </div>

                    <hr className='w-3/4 my-4 ' />

                    <div><h3 className="{ font-bold }">16. Congratulations you created successfully your AWS account :)</h3>
                        <img src="https://images.tango.us/workflows/89a14a59-d115-433a-9247-62f135d21e7b/steps/5dd814b1-a668-44f9-965d-4f419f7fc441/42023e01-9733-4355-89c2-16039aa4761a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9713&fp-y=0.0265&fp-z=2.8951&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1022&mark-y=8&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNTcmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" width="600" alt="Congratulations you created successfully your AWS account :)" />
                    </div>

                </div>
                <DialogFooter />
            </DialogContent>
        </Dialog >
    );
}
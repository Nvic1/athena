import { Button } from "@nextui-org/button";
import FormSignin from "../components/forms/signin-form";

type type_searchParams = {
    searchParams: {
        callbackUrl: string,
    }
}

export default function SigninPage({
    searchParams: {callbackUrl}
}: type_searchParams){   

    return ( 
        <main className="py-4 flex flex-col w-full h-full">
            <header className="flex justify-between items-center">
                {/* <span className="space-x-4 items-center flex">
                    <svg className="w-6 h-6 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.828 10h6.239m-6.239 4h6.239M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
                    </svg>
                    <p className="text-xl font-bold text-slate-700 uppercase tracking-wide">Athena</p>
                </span> */}

                <Button className="bg-slate-900 px-6 py-2 rounded-lg text-sm text-white font-medium tracking-wide">I am a new student</Button>
            </header>

            <section className="flex flex-col mx-auto my-auto">
                <FormSignin callbackUrl={callbackUrl || '/'}/>
            </section>

        </main>
     );
}
 

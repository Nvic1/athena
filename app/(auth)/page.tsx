import { Button } from "@nextui-org/button";
import FormSignin from "../components/forms/signin-form";
import Link from "next/link";

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

                <Button className="hidden tab:block bg-slate-900 px-6 py-2 rounded-lg text-sm text-white font-medium tracking-wide">I am a new student</Button>
            </header>

            <section className="flex flex-col tab:mx-auto my-auto">
                <FormSignin callbackUrl={callbackUrl || '/'}/>
            </section>

            <section className="tab:hidden flex items-center px-6 py-2 bottom-0 left-0 right-0 w-full">
                <Link href={`/register`} className="w-full text-center px-4 py-2 rounded-xl bg-slate-700 font-bold tracking-wider text-white">I am a Student</Link>
            </section>
        </main>
     );
}
 

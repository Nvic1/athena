import BackButton from "@/app/components/buttons/back"
import FormRegister from "@/app/components/forms/register"


type PageProps = {
    searchParams: {
        callbackUrl: string,
    }
}

export default async function RegisterStudent({
    searchParams: {callbackUrl}
}: PageProps) {


    return (
        <main className="h-full w-full flex flex-col">

            <header className="flex justify-between items-center">
                <BackButton/>
                <p className="text-3xl font-bold text-orange-600 tracking-wideer">Athena</p>
            </header>

            <section className='mx-auto my-auto'>
                <article className="">
                    <header className="self-center">School Logo</header>
                    <FormRegister callbackUrl={callbackUrl}/>
                </article>
            </section>

        </main>
    )
}
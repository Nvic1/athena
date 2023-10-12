'use client';

import { SigninZod } from "@/lib/validations/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import z from "zod"

import { AuthLogin } from "@/lib/actions/_actions";
import { FormSubmitButton } from "../buttons/signin";


type TypeSignin = z.infer<typeof SigninZod> 


export default function FormSignin({callbackUrl}: {callbackUrl: string}) {

    const {register, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful, isSubmitted}, reset} = useForm<TypeSignin>({

        resolver: zodResolver(SigninZod),
        defaultValues: {
            username: '',
            password: '',
        }
    })

    const formSubmit:SubmitHandler<TypeSignin> = async (data: TypeSignin) => {

        //the code below was used to test the `AuthLogin` function, normally you would have to call `signIn()`  from the nextauth package with your credentials
        
        const response = await AuthLogin(data);

        if(response?.error){
            throw new Error(`${response.error}`)
        }


        reset(); // reset the form fields and the form states


    }



    return (

            <form onSubmit={handleSubmit(formSubmit)} className="tab:w-96 flex flex-col px-6 py-2 tab:px-10 tab:py-4 rounded-xl outline-none  bg-orange-200 space-y-5 shadow-md">
                <div className="flex flex-col space-y-1 5">
                    <label className="text-sm font-medium text-slate-600" htmlFor="username">Username</label>
                    <input {...register('username')} className="px-4 py-2 rounded-lg bg-amber-100 outline-none focus:bg-neutral-200 focus:border-2 focus:border-slate-700" type="text" name="username" id="" />
                    {errors?.username && (<p className='text-sm text-rose-500 font-medium'>{errors.username.message}</p>)}
                </div>

                <div className="flex flex-col space-y-1 5 mb-4">
                    <label className="text-sm font-medium text-slate-600" htmlFor="password">Password</label>
                    <input {...register('password')} className="px-4 py-2 rounded-lg bg-amber-100 outline-none focus:bg-neutral-200 focus:border-2 focus:border-slate-700" type="password" name="password" id="" />
                    {errors?.password && (<p className='text-sm text-rose-500 font-medium'>{errors.password.message}</p>)}
                </div>

                <FormSubmitButton pending={isSubmitting}/>
                
                <p className="text-sm font-normal text-slate-700 underline mt-10">Forgotten password?</p>
                {/* <pre>{JSON.stringify({isSubmitSuccessful, isSubmitted, isSubmitting}, null, 2)}</pre> */}

            </form>        
    )
}


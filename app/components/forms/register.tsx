'use client';

import { RegisterZod } from "@/lib/validatons/zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import z from "zod"
import { FormRegisterButton } from "../buttons/register";
import { Waiter, addNewUser } from "@/lib/actions/_server.ts/_actions";


export type TypeRegister = z.infer<typeof RegisterZod> 


export default function FormRegister({callbackUrl}: {callbackUrl: string}) {

    const {register, handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful, isSubmitted}, reset} = useForm<TypeRegister>({

        resolver: zodResolver(RegisterZod),

    })

    const formSubmit:SubmitHandler<TypeRegister> = async (data: TypeRegister) => {


        
        const response = await addNewUser(data);

        if(response?.error){
            throw new Error(JSON.stringify(response.error))
        }

        reset();    //reset the form


    }



    return (

            <form onSubmit={handleSubmit(formSubmit)} className="bg-blue-200 p-4 rounded-xl">

                <div className="grid grid-cols-3 gap-x-4 gap-y-4">   

                    <div className="flex flex-col space-y-1 5">
                        <label className="text-sm font-medium text-slate-600" htmlFor="username">Student ID*</label>
                        <input {...register('studentID')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="text" name="studentID" id="" />
                        {errors?.studentID && (<p className='text-sm text-rose-500 font-medium'>{errors.studentID.message}</p>)}
                    </div>

                    <div className="flex flex-col space-y-1 5 mb-4">
                        <label className="text-sm font-medium text-slate-600" htmlFor="password">First Name*</label>
                        <input {...register('firstName')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="text" name="firstName" id="" />
                        {errors?.firstName && (<p className='text-sm text-rose-500 font-medium'>{errors.firstName.message}</p>)}
                    </div>
                    <div className="flex flex-col space-y-1 5 mb-4">
                        <label className="text-sm font-medium text-slate-600" htmlFor="password">Middle Name</label>
                        <input {...register('middleName')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="text" name="middleName" id="" />
                        {errors?.middleName && (<p className='text-sm text-rose-500 font-medium'>{errors.middleName.message}</p>)}
                    </div>
                    <div className="flex flex-col space-y-1 5 mb-4">
                        <label className="text-sm font-medium text-slate-600" htmlFor="password">Last Name*</label>
                        <input {...register('lastName')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="text" name="lastName" id="" />
                        {errors?.lastName && (<p className='text-sm text-rose-500 font-medium'>{errors.lastName.message}</p>)}
                    </div>
                    <div className="flex flex-col space-y-1 5 mb-4">
                        <label className="text-sm font-medium text-slate-600" htmlFor="password">Current Class*</label>
                        <input {...register('currentClass')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="text" name="currentClass" id="" />
                    </div>
                    <div className="flex flex-col space-y-1 5 mb-4">
                        <label className="text-sm font-medium text-slate-600" htmlFor="password">Date of Birth*</label>
                        <input {...register('dob')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="date" name="dob" id="" />
                        {errors?.dob && (<p className='text-sm text-rose-500 font-medium'>{errors.dob.message}</p>)}
                    </div>
                    <div className="flex flex-col space-y-1 5 mb-4">
                        <label className="text-sm font-medium text-slate-600" htmlFor="password">Gender*</label>
                        <input {...register('gender')} className="px-4 py-2 rounded-xl bg-cyan-50 focus:bg-cyan-200 outline-none border-2 border-blue-300" type="text" name="gender" id="" />
                    </div>

                </div>

                <FormRegisterButton pending={isSubmitting}/>
                
                <p className="text-sm font-normal text-slate-700 underline mt-10">Forgotten password?</p>
                <pre>{JSON.stringify({isSubmitSuccessful, isSubmitted, isSubmitting}, null, 2)}</pre>

            </form>        
    )
}
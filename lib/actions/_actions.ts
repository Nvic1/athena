'use server'

import { SigninZod } from "../validations/zod"
import {z} from 'zod';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Waitres } from "@/app/components/waiter";

type ZodType = z.infer<typeof SigninZod>;


export async function AuthLogin(formData: ZodType ){

    try{

        await Waitres(4000) // delay form submission, purpose was to test loading feature
        
        const result = SigninZod.safeParse({...formData}); // verify the submitted data on the backend with zod
    
    
        if(!result.success)  return {error:result.error.format()}          // if validation fails return validation error to the frontend
        
        // AuthLogin must be called from NextAuth route
        // after everything the return type must match next-auth "user" object
        // after a successfull login, redirect the user to the '/dashboard' route using `redirect('/dashboard')`

        
    }
    catch(error){
        // return an error object
        // assuming the error object was {success:false, error: {error.response}}
        // this error will be sent to the frontend to notify the user something happened
    }



    
// write the logic that will run when the validation is a success, eg: compare credentials to ones in the database,
// generate some tokens, return some errors if failed


}


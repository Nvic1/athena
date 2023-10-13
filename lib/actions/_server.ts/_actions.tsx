'use server'

import { TypeRegister } from "@/app/components/forms/register";
import { RegisterZod } from "@/lib/validatons/zod";


export const Waiter = async (ms:number) => new Promise((resolve) => setTimeout(resolve, ms))


export const addNewUser = async (formData: TypeRegister) => {

    await Waiter(4000);
    
    try {
        
            const result = RegisterZod.safeParse({...formData})

            if(!result.success)  return {success:false, error:result.error.format()}          // if validation fails return validation error to the frontend   
            return {success: true, error: {...formData}}
            
            // Now we can add the formData to the right collection in our mongo database
            // then we call `revalidate('/register')` to invalidate the cache
            // we can then redirect the user to the login to sign in or directly signin the user by calling signIn('credentials', ...) from nextauth 

    } catch (error) {
        return {error: 'Something wrong occured'}
    }

}
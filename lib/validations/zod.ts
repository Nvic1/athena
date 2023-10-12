import {z} from 'zod';



export const SigninZod = z.object({

    username: z
                .string()
                .min(1, {message: 'username is required'})
                .min(8, {message: 'username length too short'}),

    password: z
                .string()
                .min(1, {message: 'password is required'})
                .min(8, {message: 'password length too short'})

        
                
})
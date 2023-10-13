import {z} from 'zod';



export const RegisterZod = z.object({

    studentID: z
                .string()
                .min(1, {message: 'student ID is required'})
                .min(6, {message: 'student ID must be 6 characters'}),

    firstName: z
                .string()
                .min(1, {message: 'First name is requried'})
                .min(12, {message: 'First name is too short'}),
    middleName: z
                .string()
                .min(3, {message: 'Middle name is too short '})
                .optional()
                .or(z.literal('')),

    lastName:   z

                .string()
                .min(1, {message: 'Last name is requried'})
                .min(12, {message: 'Last name is too short'}),

    
    dob:        z
                .coerce.date(),
                
                

    currentClass:   z
                    .string()
                    .min(1, {message: 'Student class is required'})
                    .min(6, {message: 'invalid Student class'}),

    gender: z
            .string()
            .min(1, {message: 'gender is required'})
            .min(4, {message: 'Invalid Gender Type'})
            

                
})
'use client'

import { Spinner } from "@nextui-org/react"

 
type FormState = {
  pending: boolean,
}


export function FormSubmitButton({pending}:FormState) {

 
  return (
    <button className={`px-6 py-2 rounded-lg ${pending ? 'bg-slate-500': 'bg-slate-800'} text-white`} type="submit" aria-disabled={pending} disabled={pending}>
      { pending && <Spinner/>} {pending ? 'Submitting': 'Submit'}
    </button>
  )
}
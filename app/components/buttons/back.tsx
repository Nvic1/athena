'use client';

import { Button } from "@nextui-org/react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";




export default function BackButton(){

    const router = useRouter();

    return (

        <Button className="flex flex-row items-center bg-neutral-100" onPress={() => router.push('/')} startContent={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        }>
            <p className="text-sm tab:text-base font-bold text-slate-600">Sign In</p>
        </Button>

    );
}


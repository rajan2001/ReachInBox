"use client"
import { GoogleIcon } from '@/components/auth/gooleIcon';
import Header from '@/components/auth/header';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {

    return <div className=' flex flex-col items-center justify-between h-screen'>
        <div className='text-white py-3'>
            <Header />
        </div>
        <div className='text-white border border-gray-700 w-[460px] h-[312px] rounded-lg pt-6 p-10 flex flex-col items-center gap-8 bg-gradient-to-r from-[#111214] to-[#111214] '>
            <p className=' font-semibold text-xl'>Create a new account</p>
            <Button className='bg-transparent hover:bg-transparent border-gray-700 border w-full'
                onClick={async () => {
                    await signIn("google", { callbackUrl: "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000" });
                }} > <span className='mr-2'><GoogleIcon /></span>Sign Up with Google</Button>
            <Button className='bg-gradient-to-r from-[#4B63DD] to-[#0524BF]'>Create an Account</Button>
            <div className='flex items-center gap-2'>
                <p className='text-[#909296] text-sm'>Already have an account?</p>
                <button className='text-sm'>Sign In</button>
            </div>
        </div>
        <div className='text-[#5C5F66] text-xs  py-5'>© 2023 Reachinbox. All rights reserved.</div>

    </div>
}


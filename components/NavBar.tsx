'use client'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import React from 'react'
import { FloatingNav } from './ui/floating-navbar';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    const isAdmin = true;
    return (
        <header className='bg-white shadow-md px-5 py-3 font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <img src={"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/270024778/original/421330dbaeb0069a57c3c9c7fb6d409077a60353/do-the-prefect-logl-design-and-background-removel.png"} alt='logo' width={50} height={50} />
                </Link>
                <div className='flex items-center gap-5 text-black'>
                    <Link href="/"><span className='max-sm:hidden font-sans text-4'>Home</span></Link>
                    <button><span className='max-sm:hidden font-sans text-4'>Cart</span></button>
                    <Link href="/"><span className='max-sm:hidden font-sans text-4'>Logout</span></Link>
                    <Link href={isAdmin ? "/auth/admin/login" : "/auth/user/login"}><span className='max-sm:hidden font-sans text-4'>Login</span></Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
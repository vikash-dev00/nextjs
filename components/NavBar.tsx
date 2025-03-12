'use client'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import React from 'react'
import { FloatingNav } from './ui/floating-navbar';
import Link from 'next/link';
import Image from 'next/image';
import { House, KeySquare, LogOut, Search, ShoppingCart } from 'lucide-react';

const NavBar = () => {
    const isAdmin = true;

    return (
        <header className='bg-blue-100 shadow-md px-5 py-3 font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <img src={"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/270024778/original/421330dbaeb0069a57c3c9c7fb6d409077a60353/do-the-prefect-logl-design-and-background-removel.png"} alt='logo' width={50} height={50} />
                </Link>
                <div className='flex items-center gap-5'>
                    <Search />
                    <input type='text' />
                </div>
                <div className='flex items-center gap-5 text-black'>

                    <Link href="/"><span className='max-sm:hidden font-sans text-4'><House className='size-6' /></span></Link>
                    <button><span className='max-sm:hidden font-sans text-2'><ShoppingCart className='size-6' /></span></button>
                    <Link href="/"><span className='max-sm:hidden font-sans text-4'><LogOut className='size-6' /></span></Link>
                    <Link href={isAdmin ? "/auth/admin/login" : "/auth/user/login"}><span className='max-sm:hidden font-sans text-4'><KeySquare className='size-6' /></span></Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar


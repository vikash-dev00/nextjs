'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react'

const Login = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form submitted");
    };
    return (
        <div className="bg-white dark:bg-black shadow-input mx-auto mt-4 p-4 md:p-8 rounded-none md:rounded-2xl w-full max-w-md h-auto">
            <h2 className="font-bold text-neutral-800 dark:text-neutral-200 text-xl">
                Welcome to Small E-Commerce Bussiness
            </h2>
            <p className="mt-2 max-w-sm text-neutral-600 dark:text-neutral-300 text-sm">
                Login to your Account. If you are new please <Link href="/auth/admin/register" className='text-blue-700 cursor-pointer'>Register</Link>
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>
                <button
                    className="group/btn block relative dark:bg-zinc-800 bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 dark:to-zinc-900 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] rounded-md w-full h-10 font-medium text-white"
                    type="submit"
                >
                    Login &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 w-full h-[1px]" />

                <div className="flex flex-col space-y-4">
                    <button
                        className="group/btn relative flex justify-start items-center space-x-2 bg-gray-50 dark:bg-zinc-900 shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] px-4 rounded-md w-full h-10 font-medium text-black"
                        type="submit"
                    >
                        <IconBrandGithub className="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            GitHub
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className="group/btn relative flex justify-start items-center space-x-2 bg-gray-50 dark:bg-zinc-900 shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] px-4 rounded-md w-full h-10 font-medium text-black"
                        type="submit"
                    >
                        <IconBrandGoogle className="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="block -bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover/btn:opacity-100 w-full h-px transition duration-500" />
            <span className="block -bottom-px absolute inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/btn:opacity-100 blur-sm mx-auto w-1/2 h-px transition duration-500" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default Login
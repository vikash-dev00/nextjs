"use client";
import React, { JSX, useState } from "react";
import {
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/270024778/original/421330dbaeb0069a57c3c9c7fb6d409077a60353/do-the-prefect-logl-design-and-background-removel.png" alt="Next Js Logo" width="50" height="50" />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="sm:hidden block">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="relative px-4 py-2 border border-neutral-200 dark:border-white/[0.2] rounded-full font-medium text-black dark:text-white text-sm">
          <span>Login</span>
          <span className="-bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto w-1/2 h-px" />
        </button>
      </div>
    </AnimatePresence>
  );
};

'use client'
import ImageScrollAnimation from "@/components/imageScrollAnimation";
import OurCustomer from "@/components/ourCustomersDesign";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import ContactUs from "./contact/page";
import Service from "./services/page";
import AboutUs from "./about/page";

import React from "react";
import NavMenu from "@/components/NavMenu";


export default function Home() {

  return (
    <>
      <NavMenu />
      <div>
        <AuroraBackground>
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/270024778/original/421330dbaeb0069a57c3c9c7fb6d409077a60353/do-the-prefect-logl-design-and-background-removel.png" alt="Next Js Logo" width="150" height="150" />
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col justify-center items-center gap-4 px-4"
          >
            <div className="font-bold dark:text-white text-3xl md:text-7xl text-center">
              Welcome to Next Js Small E-Commerce Project
            </div>
            <div className="py-4 font-extralight dark:text-neutral-200 text-base md:text-4xl">
              Website Looks Awesome and Colorful.
            </div>
            <button className="bg-black dark:bg-white px-4 py-2 rounded-full w-fit text-white dark:text-black">
              Get Started
            </button>
          </motion.div>
        </AuroraBackground></div>
      <div>
        <h1 className="flex justify-center items-center text-black text-4xl">Relevant Products...</h1>
        <ImageScrollAnimation />
      </div>
      <div>
        <h1 className="flex justify-center items-center text-black text-4xl">Our Customers</h1>
        <OurCustomer />
      </div>
      <div>
        <h1 className="flex justify-center items-center text-black text-4xl">Our Service</h1>
        <Service />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <h1 className="flex justify-center items-center mb-2 text-black text-4xl">Contact Us</h1>
        <ContactUs />
      </div>
    </>
  );
}



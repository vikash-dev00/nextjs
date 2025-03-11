'use client'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { Meteors } from '@/components/ui/meteors';
import React, { useState } from 'react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus("Submitting...");

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus("Your message has been sent! We'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" }); // Reset the form
        }, 2000);
    };

    return (
        <div className='mb-4'>
            <BackgroundBeamsWithCollision>
                <div className="flex lg:flex-row flex-col justify-center items-center bg-white py-8">
                    {/* Outer Container with Meteor Effect */}
                    <div className="relative flex lg:flex-row flex-col items-start w-full max-w-4xl">
                        {/* Left Side (Heading Section) */}
                        <div className="flex flex-col justify-center items-start px-6 lg:w-1/2">
                            <h1 className="mb-4 font-bold text-black text-xl">
                                Contact Us - We'd love to hear from you!
                            </h1>
                            <p className="mb-4 font-normal text-black text-base">
                                Please fill out the form below to reach out to us. We will get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Right Side (Form Section) */}
                        <div className="relative flex flex-col justify-end items-start bg-white shadow-xl px-6 py-8 border border-blue-800 rounded-2xl lg:w-1/2 h-full">
                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                                <div>
                                    <label htmlFor="name" className="block font-semibold text-black text-lg">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-white mt-2 p-4 border-2 border-gray-300 focus:border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-black transition duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-semibold text-black text-lg">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-white mt-2 p-4 border-2 border-gray-300 focus:border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-black transition duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-semibold text-black text-lg">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="bg-white mt-2 p-4 border-2 border-gray-300 focus:border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-black transition duration-300"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full p-4  rounded-lg text-white ${isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"}`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Send Message"}
                                    </button>
                                </div>
                            </form>

                            {/* Form Status */}
                            {formStatus && (
                                <div className="mt-6 text-green-500 text-lg text-center">
                                    <p>{formStatus}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>

    )
}

export default ContactUs
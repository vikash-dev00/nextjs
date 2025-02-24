import React from 'react'
const AboutUs = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white py-8 min-h-screen">
            <div className="bg-white shadow-lg px-6 md:px-12 py-6 rounded-lg w-full max-w-4xl">
                <h1 className="mb-6 font-bold text-gray-900 text-4xl text-center">
                    About Us
                </h1>

                <div className="flex sm:flex-row flex-col items-center sm:items-start sm:space-x-8 mb-8">
                    {/* Paragraph */}
                    <div className="text-gray-700 text-lg">
                        <p className="mb-4">
                            Welcome to our company! We are a team of passionate individuals
                            dedicated to making a difference in the world. Our mission is to
                            deliver top-notch services and products that make your life easier
                            and more enjoyable. We strive for excellence in everything we do,
                            and we believe in the power of collaboration, innovation, and hard
                            work.
                        </p>

                        <h2 className="mt-6 mb-3 font-semibold text-gray-800 text-2xl">
                            Our Mission
                        </h2>
                        <p className="mb-4 text-gray-700 text-lg">
                            Our mission is to provide high-quality solutions that help
                            businesses and individuals achieve their goals. We believe in
                            continuous improvement and staying ahead of the curve by adopting
                            new technologies and methodologies.
                        </p>

                        <h2 className="mt-6 mb-3 font-semibold text-gray-800 text-2xl">
                            Our Values
                        </h2>
                        <ul className="mb-4 text-gray-700 text-lg list-disc list-inside">
                            <li>Integrity: We believe in being honest and transparent in everything we do.</li>
                            <li>Innovation: We are constantly looking for new ways to improve and stay ahead.</li>
                            <li>Collaboration: We work together to achieve our common goals.</li>
                            <li>Customer-centric: We focus on delivering value to our customers above all else.</li>
                        </ul>
                    </div>
                </div>

                <h2 className="mt-6 mb-3 font-semibold text-gray-800 text-2xl">
                    Meet the Team
                </h2>
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQG2M951i1sqLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680064232684?e=1746057600&v=beta&t=AJ0rvf3K_mWumknMr4QusBtx_2f6d6A6f3ZqpTRkCJ0"
                            alt="Team Member"
                            className="mx-auto mb-4 rounded-full w-32 h-32"
                        />
                        <h3 className="font-semibold text-gray-800 text-xl text-center">
                            Rohit Tiwari
                        </h3>
                        <p className="text-gray-600 text-center">Managing Director</p>
                    </div>
                    {/* Example team member */}
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <img
                            src={'/ashish.png'}
                            alt="Team Member"
                            className="mx-auto mb-4 rounded-full w-32 h-32"
                        />
                        <h3 className="font-semibold text-gray-800 text-xl text-center">
                            Ashish
                        </h3>
                        <p className="text-gray-600 text-center">CEO & Founder</p>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <img
                            src={'/vishal.jpg'}
                            alt="Team Member"
                            className="mx-auto mb-4 rounded-full w-32 h-32"
                        />
                        <h3 className="font-semibold text-gray-800 text-xl text-center">
                            Vishal
                        </h3>
                        <p className="text-gray-600 text-center">CTO & Co-Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
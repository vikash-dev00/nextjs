import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 text-white">
            <div className="mx-auto px-4 container">
                <div className="flex justify-between items-center">
                    <div>
                        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:text-gray-400">About</a></li>
                            <li><a href="/" className="hover:text-gray-400">Services</a></li>
                            <li><a href="/" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li><a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook size={20} /></a></li>
                            <li><a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter size={20} /></a></li>
                            <li><a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram size={20} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
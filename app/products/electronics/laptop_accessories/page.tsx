import NavMenu from '@/components/NavMenu'
import React from 'react'

const LaptopAccessories = () => {
    const product = [
        {
            id: 1,
            name: 'Wireless Mouse',
            specs: '2.4GHz\nErgonomic Design\nUSB Receiver',
            price: '$25',
            image: 'https://via.placeholder.com/200x150?text=Wireless+Mouse'
        },
        {
            id: 2,
            name: 'Laptop Stand',
            specs: 'Adjustable Height\nAluminum Alloy',
            price: '$40',
            image: 'https://source.unsplash.com/200x150/?laptop,stand'
        },
        {
            id: 3,
            name: 'Keyboard Cover',
            specs: 'Silicone\nTransparent\nWaterproof',
            price: '$10',
            image: 'https://source.unsplash.com/200x150/?keyboard,cover'
        },
        {
            id: 4,
            name: 'USB-C Hub',
            specs: '6-in-1\nHDMI\nUSB 3.0\nSD Card Reader',
            price: '$35',
            image: 'https://source.unsplash.com/200x150/?usb,hub'
        },
        {
            id: 5,
            name: 'Laptop Cooling Pad',
            specs: '5 Fans\nAdjustable Height\nLED Lighting',
            price: '$29',
            image: 'https://source.unsplash.com/200x150/?laptop,coolingpad'
        },
        {
            id: 6,
            name: 'External Hard Drive',
            specs: '1TB\nUSB 3.0\nCompact Design',
            price: '$59',
            image: 'https://source.unsplash.com/200x150/?external,harddrive'
        },
        {
            id: 7,
            name: 'Wireless Keyboard',
            specs: 'Bluetooth\nRechargeable\nQuiet Typing',
            price: '$45',
            image: 'https://source.unsplash.com/200x150/?wireless,keyboard'
        },
        {
            id: 8,
            name: 'Laptop Sleeve',
            specs: '13-15"\nWater-Resistant\nPadded Interior',
            price: '$22',
            image: 'https://source.unsplash.com/200x150/?laptop,sleeve'
        },
        {
            id: 9,
            name: 'Bluetooth Headphones',
            specs: 'Noise Cancelling\nOver-Ear\n20h Battery',
            price: '$80',
            image: 'https://source.unsplash.com/200x150/?headphones'
        },
        {
            id: 10,
            name: 'Webcam HD 1080p',
            specs: 'Built-in Microphone\nUSB Plug & Play',
            price: '$35',
            image: 'https://source.unsplash.com/200x150/?webcam'
        },
        {
            id: 11,
            name: 'Laptop Backpack',
            specs: 'Anti-Theft\nUSB Charging Port\n15.6"',
            price: '$50',
            image: 'https://source.unsplash.com/200x150/?laptop,backpack'
        },
        {
            id: 12,
            name: 'Portable Monitor',
            specs: '15.6"\nFull HD\nUSB-C\nIPS Panel',
            price: '$150',
            image: 'https://source.unsplash.com/200x150/?portable,monitor'
        },
        {
            id: 13,
            name: 'HDMI Cable',
            specs: '6ft\n4K Ultra HD\nBraided Nylon',
            price: '$12',
            image: 'https://source.unsplash.com/200x150/?hdmi,cable'
        },
        {
            id: 14,
            name: 'Laptop Desk',
            specs: 'Adjustable\nFoldable\nBed Use',
            price: '$60',
            image: 'https://source.unsplash.com/200x150/?laptop,desk'
        },
        {
            id: 15,
            name: 'Docking Station',
            specs: 'Triple Display\nUSB-C\nEthernet\nPD Charging',
            price: '$120',
            image: 'https://source.unsplash.com/200x150/?laptop,dockingstation'
        },
    ];


    return (
        <>
            <NavMenu />
            <div className="flex h-screen">
                {/* Left Section: Filters */}
                <div className="bg-gray-100 p-4 w-1/5 overflow-y-auto">
                    <h2 className="mb-4 font-semibold text-lg">Filters</h2>

                    <div className="mb-6">
                        <h3 className="mb-2 font-medium">Brand</h3>
                        <label className="block"><input type="checkbox" /> Logitech</label>
                        <label className="block"><input type="checkbox" /> HP</label>
                        <label className="block"><input type="checkbox" /> Dell</label>
                    </div>

                    <div className="mb-6">
                        <h3 className="mb-2 font-medium">Price</h3>
                        <label className="block"><input type="checkbox" /> Under $25</label>
                        <label className="block"><input type="checkbox" /> $25 - $50</label>
                        <label className="block"><input type="checkbox" /> Above $50</label>
                    </div>

                    <div>
                        <h3 className="mb-2 font-medium">Rating</h3>
                        <label className="block"><input type="checkbox" /> 4★ & above</label>
                        <label className="block"><input type="checkbox" /> 3★ & above</label>
                    </div>
                </div>

                {/* Middle Section: Products */}
                <div className="bg-white p-2 w-3/5 h-[calc(100vh-64px)] overflow-y-auto">
                    <div className="p-6 w-full max-w-3xl">
                        {product.map((product) => (
                            <div key={product.id} className="flex items-start gap-6 m-2 border">
                                {/* Image Left */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="border rounded w-48 h-auto object-contain"
                                />

                                {/* Details Right */}
                                <div className="flex flex-col justify-between">
                                    <h2 className="mb-2 font-semibold text-2xl">{product.name}</h2>

                                    <div className="mb-1 text-yellow-500 text-sm">
                                        ⭐⭐⭐⭐☆ <span className="text-gray-500">(120 reviews)</span>
                                    </div>

                                    <p className="mb-3 text-gray-600">{product.specs}</p>

                                    <p className="mb-4 font-bold text-blue-600 text-xl">{product.price}</p>

                                    <button className="bg-blue-500 hover:bg-blue-600 m-1 px-6 py-2 rounded text-white">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Right Section: Ads */}
                <div className="bg-gray-50 p-4 border-l w-1/5 overflow-y-auto">
                    <h2 className="mb-4 font-semibold text-lg">Sponsored Ads</h2>
                    <div className="bg-white shadow mb-4 p-2 border rounded">
                        <p className="text-sm">Upgrade to premium accessories</p>
                        <button className="bg-blue-400 mt-2 px-3 py-1 rounded text-white text-sm">Shop Now</button>
                    </div>
                    <div className="bg-white shadow mb-4 p-2 border rounded">
                        <p className="text-sm">Save 30% on laptop bags</p>
                        <button className="bg-green-500 mt-2 px-3 py-1 rounded text-white text-sm">Explore</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LaptopAccessories
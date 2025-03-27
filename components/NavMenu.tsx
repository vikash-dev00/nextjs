import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

const NavMenu = () => {
    const electronicsComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Laptop & Accessories",
            href: "/products/electronics/laptop_accessories",
            description:
                "Laptops & Accessories offer a range of high-performance laptops and essential accessories to enhance your tech experience.",
        },
        {
            title: "AC & Cooler",
            href: "/docs/primitives/hover-card",
            description:
                "AC & Coolers provide effective solutions for staying comfortable in warm weather. Whether you're looking for an energy-efficient air conditioner or a portable cooler, our collection ensures you stay cool and refreshed, no matter the temperature outside. Perfect for home or office use.",
        },
        {
            title: "Fridge & Washing Machine",
            href: "/docs/primitives/progress",
            description:
                "Fridges & Washing Machines provide essential home appliances designed for convenience and efficiency. Keep your food fresh with our energy-efficient fridges and enjoy hassle-free laundry days with our reliable washing machines, both built to deliver high performance and long-lasting durability.",
        },
        {
            title: "Audio & Speaker",
            href: "/docs/primitives/scroll-area",
            description: "Audio & Speakers offer a wide selection of high-quality sound systems, from portable Bluetooth speakers to premium home audio setups.",
        },
    ]
    const beautyAndToysComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Mens and Gromming",
            href: "/docs/primitives/alert-dialog",
            description:
                "Men's Grooming offers a comprehensive range of products to help you look and feel your best. From shaving essentials and skincare to haircare and beard grooming, our collection provides everything you need for a smooth, refreshed, and polished appearance.",
        },
        {
            title: "Foods and Drinks",
            href: "/docs/primitives/hover-card",
            description:
                "Foods and Drinks offer a wide variety of delicious and refreshing options for every taste and occasion. From savory snacks and gourmet meals to beverages that quench your thirst, our collection ensures you enjoy high-quality, flavorful choices for every craving.",
        },
        {
            title: "Fridge & Washing Machine",
            href: "/docs/primitives/progress",
            description:
                "Fridges & Washing Machines provide essential home appliances designed for convenience and efficiency. Keep your food fresh with our energy-efficient fridges and enjoy hassle-free laundry days with our reliable washing machines, both built to deliver high performance and long-lasting durability.",
        },
        {
            title: "Baby Care",
            href: "/docs/primitives/scroll-area",
            description: "Baby Care offers a range of gentle and safe products for your little one. From diapers and skincare essentials to feeding bottles and baby clothes, our collection ensures your baby’s comfort and well-being with high-quality, parent-approved items for every stage of growth.",
        },
        {
            title: "Toys",
            href: "/docs/primitives/scroll-area",
            description: "Toys provide fun and engaging options for kids of all ages, sparking creativity and learning through play.",
        },
        {
            title: "Sports and Fitness",
            href: "/docs/primitives/scroll-area",
            description: "Sports and Fitness offers a wide range of gear and equipment to help you stay active and reach your fitness goals.",
        },
        {
            title: "Nutrition and Health Care",
            href: "/docs/primitives/scroll-area",
            description: "Nutrition and Health Care provides a variety of products to support your well-being, from vitamins and supplements to wellness essentials.",
        },
    ]
    const mobilesComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Smartphones",
            href: "/docs/primitives/alert-dialog",
            description:
                "Smartphones offer the latest in cutting-edge technology, combining sleek designs with powerful performance.",
        },
        {
            title: "Mobile Case",
            href: "/docs/primitives/hover-card",
            description:
                "Mobile Cases provide stylish and protective solutions for your smartphone. With a variety of designs, from sleek and minimalistic to bold and vibrant, our cases offer durability and a secure fit while keeping your phone safe from drops, scratches, and everyday wear.",
        },
        {
            title: "Keypad Phone",
            href: "/docs/primitives/progress",
            description:
                "Keypad Phones offer a simple and reliable communication experience, perfect for those who prefer a no-frills, easy-to-use device. With long battery life, durable design, and essential features like calling and texting, these phones are ideal for staying connected without the distractions of a smartphone.",
        },
        {
            title: "Adapter & Power Bank",
            href: "/docs/primitives/scroll-area",
            description: "Adapters & Power Banks provide essential solutions for staying powered up on the go. Whether you need to charge your devices quickly with an adapter or keep your phone, tablet, or laptop charged with a portable power bank, our collection ensures you're always ready, no matter where you are.",
        },
    ]
    const fashionComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Men`s Top Wear",
            href: "/docs/primitives/alert-dialog",
            description:
                "Men's Top Wear offers a stylish collection of premium clothing, combining modern trends with timeless designs.",
        },
        {
            title: "Men`s Bottom Wear",
            href: "/docs/primitives/hover-card",
            description:
                "Men's Bottom Wear features a versatile range of trousers, jeans, shorts, and joggers designed for both comfort and style.",
        },
        {
            title: "Men Footwaer",
            href: "/docs/primitives/progress",
            description:
                "Men's Footwear offers a wide selection of stylish and comfortable shoes, from casual sneakers to formal dress shoes. Designed for durability and modern fashion, our collection ensures you step out in both comfort and confidence.",
        },
        {
            title: "Women Footwear",
            href: "/docs/primitives/scroll-area",
            description: "Women's Footwear features a diverse collection of stylish and comfortable shoes, from chic heels to casual flats and trendy sneakers.",
        },
        {
            title: "Bags, Suitcase & Luggage",
            href: "/docs/primitives/scroll-area",
            description: "Bags, Suitcases & Luggage offer a wide range of stylish and durable options for every traveler. From sleek handbags and backpacks to spacious suitcases and travel sets, our collection ensures you're prepared for any journey in both style and convenience.",
        },
        {
            title: "Watches & Accessiories",
            href: "/docs/primitives/scroll-area",
            description: "Watches & Accessories feature a curated selection of elegant timepieces, stylish jewelry, and must-have accessories. From classic watches to trendy bracelets, belts, and hats, our collection adds the perfect finishing touch to any outfit, elevating your style with every detail.",
        },
    ]
    const homeFurnitureComponents: { title: string; href: string; description: string }[] = [
        {
            title: "Furniture",
            href: "/docs/primitives/alert-dialog",
            description:
                "Furniture offers a stylish and functional range of pieces to transform your living space.",
        },
        {
            title: "Living Room Furniture",
            href: "/docs/primitives/hover-card",
            description:
                "Living Room Furniture features a wide variety of stylish and comfortable pieces to enhance your home.",
        },
        {
            title: "Kitchen & Dining",
            href: "/docs/primitives/progress",
            description:
                "Kitchen & Dining offers a wide range of essential and stylish items to elevate your cooking and dining experience.",
        },
        {
            title: "Home Decorations",
            href: "/docs/primitives/scroll-area",
            description: "Home Decorations add a personal touch to your living space, creating a warm and inviting atmosphere.",
        },
        {
            title: "Bedroom Furniture",
            href: "/docs/primitives/scroll-area",
            description: "Bedroom Furniture offers a range of stylish and functional pieces to create a relaxing and comfortable retreat.",
        },
        {
            title: "Lightings and Electricals",
            href: "/docs/primitives/scroll-area",
            description: "Lighting & Electricals provide a variety of functional and decorative solutions to brighten your home.",
        },
        {
            title: "Cleaning & Bath",
            href: "/docs/primitives/scroll-area",
            description: "Cleaning & Bath offers a wide selection of products to keep your home sparkling clean and your bathroom essentials organized.",
        },
    ]

    return (
        <div className="flex justify-center items-center gap-8 bg-blue-50 shadow-xl m-2 text-lg">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <img src="https://www.pngarts.com/files/4/Electronic-PNG-Pic.png" alt="" className="m-2 w-32 h-20" />
                        <NavigationMenuTrigger>Electronics</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {electronicsComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <img src="https://wallpapers.com/images/hd/assorted-childrens-toys-collection-dj5t95qkhtt67h1n.png" alt="" className="m-2 w-32 h-20" />
                        <NavigationMenuTrigger>Beauty & Toys</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {beautyAndToysComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ykx2bQ3UspPdgoVFtanv4KtmDg6EAX_Krw&s" alt="" className="m-2 w-24 h-20" />
                        <NavigationMenuTrigger>Mobiles</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {mobilesComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <img src="https://img.lovepik.com/free-png/20210926/lovepik-fashion-beauty-shopping-model-png-image_401409072_wh1200.png" alt="" className="m-2 w-32 h-20" />
                        <NavigationMenuTrigger>Fashion</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {fashionComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <img src="https://i.pinimg.com/736x/8d/c3/1c/8dc31c7a74d05cb6540b3538c59830d0.jpg" alt="" className="m-2 w-32 h-20" />
                        <NavigationMenuTrigger>Home & Furniture</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {homeFurnitureComponents.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList></NavigationMenu>
        </div>
    )
}

export default NavMenu

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="font-medium text-sm leading-none">{title}</div>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
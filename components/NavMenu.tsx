import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

const NavMenu = () => {
    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]
    return (
        <div className="flex justify-center items-center gap-8 bg-rose-50 shadow-xl m-2 text-lg">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <img src="https://www.pngarts.com/files/4/Electronic-PNG-Pic.png" alt="" className="m-2 w-32 h-20" />
                        <NavigationMenuTrigger>Electronics</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {components.map((component) => (
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
                                {components.map((component) => (
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
                                {components.map((component) => (
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
                                {components.map((component) => (
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
                                {components.map((component) => (
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFJJ31R0hou0jYxkjGywiur0xTGE8TwxeQQ&s" alt="" className="m-2 w-32 h-20" />
                        <NavigationMenuTrigger>Appliances</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                                {components.map((component) => (
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
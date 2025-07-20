"use client";
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const menuItems = [
  { title: 'Home', href: '/', description: 'Go to homepage' },
  { title: 'Destinations', href: '/Destinations', description: 'Destination Details' },
  {
    title: 'Services',
    href: '#services',
    description: 'Explore our services',
    subItems: [
      { title: 'Consulting', href: '#consulting' },
      { title: 'Support', href: '#support' },
      { title: 'Custom Solutions', href: '#custom-solutions' },
    ],
  },
  { title: 'Contact Us', href: '/contact', description: 'Get in touch with us' },
  { title: 'Blogs', href: '#blogs', description: 'Read our latest blogs' },
  { title: 'About Us', href: '/About Us', description: 'Learn more about us' },
  { title: 'FAQ', href: '/Faq', description: 'Our trusted sellers' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-lime-400 to-lime-800 shadow-md">
      <div className="container mx-auto px-4 max-sm:px-2 max-md:px-3 py-3 flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">🌍 TravelGo</h1>

        {/* Hamburger for Mobile */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList className="flex flex-row space-x-3">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-lime-100 text-white hover:text-lime-800 px-4 py-2 rounded-md transition-colors">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            href={subItem.href}
                            className="block space-y-1 rounded-sm bg-lime-400 p-3 hover:bg-lime-100 text-white hover:text-lime-800"
                          >
                            <div className="text-sm font-medium leading-none">{subItem.title}</div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-lime-100 hover:text-lime-800 rounded-md"
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-6 pt-2 space-y-2 bg-lime-700 text-white rounded-b-md">
          {menuItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.href}
                className="block py-2 px-3 rounded-md hover:bg-lime-600 text-sm font-medium"
              >
                {item.title}
              </a>
              {item.subItems && (
                <div className="pl-4 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block py-1 px-2 text-xs hover:text-lime-300"
                    >
                      - {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;

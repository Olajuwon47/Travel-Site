  import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu"

const menuItems = [
  {
    title: 'Home',
    href: '/',
    description: 'Go to homepage',
  },
  {
    title: 'Destinations',
    href: '/Destinations',
    description: 'Destination Details',
   /* subItems: [
      { title: 'New Arrivals', jsjshref: '#new-arrivals' },
      { title: 'Best Sellers', href: '#best-sellers' },
      { title: 'Sale Items', href: '#sale' },
    ]*/
  },
  {
    title: 'Services',
    href: '#services',
    description: 'Explore our services',
    subItems: [
      { title: 'Consulting', href: '#consulting' },
      { title: 'Support', href: '#support' },
      { title: 'Custom Solutions', href: '#custom-solutions' },
    ]
  },
  {
    title: 'Contact Us',
    href: '/contact',
    description: 'Get in touch with us'
  },
  {
    title: 'Blogs',
    href: '#blogs',
    description: 'Read our latest blogs'
  },
  {
    title: 'About Us',
    href: '/About Us',
    description: 'Learn more about us'
  },

    {
    title: 'FAQ',
    href: '/Faq',
    description: 'Our trusted sellers'
  }
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-100 w-full bg-gradient-to-r from-lime-400 to-lime-800 shadow-md">
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex flex-row space-x-1">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-lime-100 text-gray-700 hover:text-lime-600 px-4 py-2 rounded-md transition-colors">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-sm bg-lime-400 p-3 leading-none no-underline outline-none transition-colors hover:bg-lime-100 hover:text-white focus:bg-lime-100
                             focus:text-white"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-lime-100 hover:text-lime-600 focus:bg-lime-100 focus:text-lime-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

export default Navbar;

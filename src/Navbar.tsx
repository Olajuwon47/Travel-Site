import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/ui/navigation-menu"

const menuItems = [
  {
    title: 'Home',
    href: '/Home',
    description: 'Go to homepage',
  },
  {
    title: 'Products',
    href: '#products',
    description: 'Browse our products',
    subItems: [
      { title: 'Electronics', href: '#electronics' },
      { title: 'Clothing', href: '#clothing' },
      { title: 'Books', href: '#books' },
    ]
  },
  {
    title: 'Destinations',
    href: '#categories',
    description: 'Product categories',
    subItems: [
      { title: 'New Arrivals', href: '#new-arrivals' },
      { title: 'Best Sellers', href: '#best-sellers' },
      { title: 'Sale Items', href: '#sale' },
    ]
  },
  {
    title: 'Sellers',
    href: '#sellers',
    description: 'Our trusted sellers'
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
    title: 'Contact Us',
    href: '#contact-us',
    description: 'Get in touch'
  }
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-blue-50 to-blue-50 shadow-md">
      <div className="container mx-auto px-4">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex flex-row space-x-1">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blue-100 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md transition-colors">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
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
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
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

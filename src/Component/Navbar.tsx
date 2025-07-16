import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";

const menuItems = [
  {
    title: "Home",
    href: "/Home",
    description: "Go to homepage",
  },
  {
    title: "Products",
    href: "#products",
    description: "Browse our products",
    subItems: [
      { title: "Electronics", href: "#electronics" },
      { title: "Clothing", href: "#clothing" },
      { title: "Books", href: "#books" },
    ],
  },
  {
    title: "Destinations",
    href: "#categories",
    description: "Product categories",
    subItems: [
      { title: "New Arrivals", href: "#new-arrivals" },
      { title: "Best Sellers", href: "#best-sellers" },
      { title: "Sale Items", href: "#sale" },
    ],
  },
  {
    title: "Sellers",
    href: "#sellers",
    description: "Our trusted sellers",
  },
  {
    title: "Blogs",
    href: "#blogs",
    description: "Read our latest blogs",
  },
  {
    title: "About Us",
    href: "/About Us",
    description: "Learn more about us",
  },
  {
    title: "Contact Us",
    href: "#contact-us",
    description: "Get in touch",
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-rose-500 bg-gradient-to-r from-lime-400 to-lime-200 shadow-md">
      <div className="container mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row space-x-2 items-center justify-start">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="relative">
                {item.subItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blue-100 text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md transition-colors">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 top-full mt-1 w-max bg-white shadow-lg rounded-md z-40">
                      <div className="grid gap-2 p-4 md:grid-cols-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            href={subItem.href}
                            className="block whitespace-nowrap rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {subItem.title}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors"
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
  );
}

export default Navbar;

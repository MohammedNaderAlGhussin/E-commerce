"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const links = [
  {
    title: "Overview",
    href: "/admin/overview",
  },
  {
    title: "Products",
    href: "/admin/products",
  },
  {
    title: "Orders",
    href: "/admin/orders",
  },
  {
    title: "Users",
    href: "/admin/users",
  },
];

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  return (
    <>
      <nav
        className={cn(
          "items-center space-x-4 lg:space-x-6 hidden md:flex",
          className
        )}
        {...props}
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname.includes(item.href) ? "" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <SecNavMenu />
    </>
  );
};

export default MainNav;

const SecNavMenu = () => {
  const pathname = usePathname();

  return (
    <div className="block md:hidden -ml-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-56 flex flex-col gap-1 ml-10 mt-2"
          align="center"
          forceMount
        >
          <nav>
            {links.map((item) => {
              return (
                <DropdownMenuItem
                  className="font-normal border-b pb-3"
                  key={item.href}
                >
                  <div className="flex flex-col space-y-1 gap-1">
                    <div className="text-sm font-medium leading-none">
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          pathname.includes(item.href)
                            ? ""
                            : "text-muted-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </DropdownMenuItem>
              );
            })}
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

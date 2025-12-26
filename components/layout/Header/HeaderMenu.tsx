import ThemeToggler from "@/components/Theme/ThemeToggler";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ThemeToggler />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/sign-in"}>
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetTitle className="py-2 pl-5 border-b">Menu</SheetTitle>
            <div className="flex flex-col items-start gap-4 pl-5 pt-2">
              <ThemeToggler />
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild>
                <Link href={"/sign-in"}>
                  <UserIcon /> Sign In
                </Link>
              </Button>
            </div>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default HeaderMenu;

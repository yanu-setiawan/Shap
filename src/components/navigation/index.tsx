"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-me" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="max-w-4xl py-2 px-4 h-14 sticky top-10 inset-x-0 w-full bg-background/30 backdrop-blur-lg rounded-2xl border border-foreground/15 z-50 mx-auto">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/icon.png"
            alt="✨"
            width={32}
            height={32}
            className="w-10 h-10"
          />
        </Link>

        {/* Nav Menu */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors hover:text-foreground",
                      isActive
                        ? "text-white font-medium  decoration-primary"
                        : "text-foreground/60",
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({
                size: "sm",
                className: "hidden md:flex rounded-2xl px-4",
                variant: "ghost",
              })}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

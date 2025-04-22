"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  Flower,
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "Products" },
    { href: "/dealer-locator", label: "Dealer Locator" },
    { href: "/about", label: "About" },
    { href: "/contact-us", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/softyhygiene.np",
      label: "Facebook",
      icon: <Facebook size={20} />,
    },
    {
      href: "https://m.me/softyhygiene.np",
      label: "Messenger",
      icon: <MessageCircle size={20} />,
    },
    {
      href: "https://www.instagram.com/softy_hygiene/",
      label: "Instagram",
      icon: <Instagram size={20} />,
    },
    {
      href: "https://wa.me/9779851073552",
      label: "WhatsApp",
      icon: <Phone size={20} />,
    },
    {
      href: "https://goo.gl/maps/XYZ123",
      label: "Location",
      icon: <MapPin size={20} />,
    },
  ];

  return (
    <nav className="fixed mb-[40px]  w-full bg-gradient-to-r from-primary via-primary to-pink-500 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        {/* Simple decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 left-10 text-white/10">
            <Flower className="w-[60px] h-[60px]" />
          </div>
          <div className="absolute top-1/2 right-20 text-white/10">
            <Flower className="w-[40px] h-[40px]" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />

          {/* Secondary Logo */}
          <div>
            <Image
              src="/iso.png"
              alt="Logo Text"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <p key={index} className="btn">
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-white underline underline-offset-4"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </p>
              );
            })}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="block md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-purple-800 text-white w-[300px] p-0"
              >
                <nav className="flex flex-col items-center space-y-4 py-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:text-white/80 transition-colors duration-300 text-lg py-2"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex space-x-4 mt-6">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        className="text-white hover:text-white/80"
                      >
                        {link.icon}
                        <span className="sr-only">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Social Media Links (Desktop) */}
          <div className="hidden md:block">
            <div className="flex h-16 items-center justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="rounded-full p-1 text-white bg-accent/70 hover:bg-accent/90 transition-colors"
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

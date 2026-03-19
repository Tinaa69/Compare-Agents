"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Building2, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Vendor Services",
    href: "/vendors",
    description: "Compare estate agents for property sales. Optimise fees and execution.",
  },
  {
    title: "Landlord Services",
    href: "/landlords",
    description: "Compare letting agents for rental properties. Maximise yield and tenant quality.",
  },
]

const resources = [
  {
    title: "Agent Directory",
    href: "/agents",
    description: "Browse verified PSRA-licensed agents with performance metrics.",
  },
  {
    title: "Find by Area",
    href: "/areas",
    description: "Compare estate agents in your Dublin neighbourhood.",
  },
  {
    title: "How It Works",
    href: "/process",
    description: "Our data-led comparison methodology explained.",
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Common questions about our service and compliance.",
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="border-b border-border/60 bg-secondary/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p className="font-medium text-foreground">Free comparison for Dublin property owners</p>
          <p className="hidden sm:block">PSRA-verified agents. No obligation to proceed.</p>
        </div>
      </div>

      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xl font-semibold tracking-tight text-foreground">
              CompareAgents<span className="text-accent">.ie</span>
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Compare local agents with confidence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {services.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {resources.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/about" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  href="/contact" 
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button asChild className="shadow-sm">
            <Link href="/contact">
              Compare Agents
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 pt-6">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Services</span>
                {services.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Resources</span>
                {resources.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Company</span>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </div>
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Compare Agents
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

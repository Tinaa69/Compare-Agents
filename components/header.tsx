"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Building2, ChevronRight } from "lucide-react"
const navigationItems = [
  { title: "Compare Agents", href: "/#hero-form" },
  { title: "How it Works", href: "/process" },
  { title: "Ireland Areas", href: "/areas" },
  { title: "Agents", href: "/agents" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="border-b border-border/60 bg-secondary/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p className="font-medium text-foreground">Free comparison for Ireland property owners</p>
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
        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button asChild className="shadow-sm">
            <Link href="/#hero-form">
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
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Menu</span>
                {navigationItems.map((item) => (
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
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/#hero-form" onClick={() => setMobileOpen(false)}>
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

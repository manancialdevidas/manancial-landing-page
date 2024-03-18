"use client";

import React from "react";

const NavItems = [
  {
    name: "Página inicial",
    href: "#",
  },
  {
    name: "Projetos",
    href: "#projetos",
  },
  {
    name: "Nossa equipe",
    href: "#equipe",
  },
  {
    name: "Contato",
    href: "#contato",
  },
];

function MobileMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-slate-100`}>
      <div className="space-y-1 px-2 pb-3 pt-2">
        {NavItems.map((item, index) => (
          <a key={index} href={item.href} className={"block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-slate-200/80"}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {NavItems.map((item, index) => (
          <a key={index} href={item.href} className={"rounded-md px-3 py-2 text-sm font-normal hover:bg-slate-400/10"}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 min-w-full bg-white transition-colors h-16 shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-400/10 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Abrir menu</span>

                {/* TODO: trocar por biblioteca de ícones  */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <a href="/" className="flex flex-shrink-0 items-center gap-2">
                <img className="h-8 w-auto" src="/manancial-logo.svg" alt="Logo Manancial de Vidas"></img>
                <span className="font-bold">Manancial de Vidas</span>
              </a>
              <DesktopMenu />
            </div>
          </div>
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </nav>
      <span aria-hidden={true} className={`${isMenuOpen ? "block" : "hidden"} fixed inset-0 z-40  min-h-full bg-black/40 sm:hidden`} onClick={() => setIsMenuOpen(false)}></span>
    </>
  );
}

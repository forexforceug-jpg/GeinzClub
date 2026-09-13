import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenJoin: () => void;
  onOpenLogin: () => void;
  isLoggedIn?: boolean;
  onOpenDashboard?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenJoin, 
  onOpenLogin,
  isLoggedIn = false,
  onOpenDashboard 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Investments', href: '#investments' },
    { name: 'Members', href: '#members' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D0A]/90 backdrop-blur-md border-b border-[#10E760]/15 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#10E760] to-[#0A8738] flex items-center justify-center p-0.5 shadow-lg shadow-[#10E760]/20 group-hover:shadow-[#10E760]/40 transition-shadow">
              <div className="w-full h-full bg-[#070D0A] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xl text-[#10E760] tracking-tighter">GC</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  GEINZ<span className="text-[#10E760]">CLUB</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10E760] animate-pulse"></span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-400/80 font-medium -mt-1">
                A Club of Money Makers
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-[#10E760] rounded-lg transition-colors hover:bg-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {isLoggedIn && onOpenDashboard ? (
              <button
                onClick={onOpenDashboard}
                id="nav-dashboard-button"
                className="relative group overflow-hidden rounded-xl bg-[#10E760] px-4 py-2 text-xs font-bold text-[#070D0A] transition-all duration-200 hover:bg-[#1cf36f] hover:shadow-lg hover:shadow-[#10E760]/30 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                <span>Member Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <>
                <button
                  onClick={onOpenLogin}
                  id="nav-login-button"
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={onOpenJoin}
                  id="nav-join-button"
                  className="relative group overflow-hidden rounded-xl bg-[#10E760] px-5 py-2.5 text-sm font-semibold text-[#070D0A] transition-all duration-200 hover:bg-[#1cf36f] hover:shadow-lg hover:shadow-[#10E760]/30 active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Join GeinzClub</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            {isLoggedIn && onOpenDashboard ? (
              <button
                onClick={onOpenDashboard}
                className="rounded-lg bg-[#10E760] px-3 py-1.5 text-xs font-bold text-[#070D0A]"
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={onOpenJoin}
                className="rounded-lg bg-[#10E760] px-3 py-1.5 text-xs font-semibold text-[#070D0A]"
              >
                Join
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D0A]/95 backdrop-blur-xl border-b border-[#10E760]/20 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-[#10E760] hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            {isLoggedIn && onOpenDashboard ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDashboard();
                }}
                className="w-full py-3 text-center text-sm font-bold text-[#070D0A] bg-[#10E760] hover:bg-[#1cf36f] rounded-xl shadow-lg shadow-[#10E760]/25 flex items-center justify-center gap-2"
              >
                <span>Enter Member Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full py-2.5 text-center text-sm font-medium text-slate-200 hover:text-white border border-white/10 rounded-xl"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoin();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-[#070D0A] bg-[#10E760] hover:bg-[#1cf36f] rounded-xl shadow-lg shadow-[#10E760]/25 flex items-center justify-center gap-2"
                >
                  <span>Join GeinzClub</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

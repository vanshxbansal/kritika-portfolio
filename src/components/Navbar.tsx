import Image from "next/image";
import Link from "next/link";
import { siteProfile } from "@/data/siteProfile";

const navLinks = [
  { href: "/#spotlight", label: "Spotlight", icon: "star" },
  { href: "/#sidequests", label: "Certifications", icon: "leaf" },
  {
    href: siteProfile.resumeHref,
    label: "Resume",
    icon: "download",
    external: true,
  },
];

function NavIcon({ type }: { type: string }) {
  if (type === "star") {
    return (
      <svg viewBox="0 0 256 256" className="h-6 w-6 fill-[#666]">
        <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Z" />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 256 256" className="h-6 w-6 fill-[#666]">
        <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 256 256" className="h-6 w-6 fill-[#666]">
      <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Z" />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-[120px]">
        <Link
          href="/#spotlight"
          data-cursor-label="Click"
          className="flex items-center gap-1.5 text-[#666] transition hover:text-[#333]"
        >
          <NavIcon type="star" />
          <span className="font-display text-[15px] font-medium tracking-[-0.2px]">
            Spotlight
          </span>
        </Link>

        <Link href="/" data-cursor-label="Click" className="relative h-[42px] w-[42px] shrink-0">
          <Image
            src="https://framerusercontent.com/assets/4RsewE7kMjBI2Ia2UWt8PvFZ0yY.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-9">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              {...(link.label === "Resume"
                ? {
                    "data-cursor-label": "Yay!",
                    "data-cursor-badge": "light",
                  }
                : { "data-cursor-label": "Click" })}
              className="flex items-center gap-1.5 text-[#666] transition hover:text-[#333]"
            >
              <NavIcon type={link.icon} />
              <span className="font-display text-[15px] font-medium tracking-[-0.2px]">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

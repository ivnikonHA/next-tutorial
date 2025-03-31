"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Navlink = {
  label: string;
  href: string;
};

type Props = {
  navlinks: Navlink[];
};

const Navigation = ({ navlinks }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navlinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };

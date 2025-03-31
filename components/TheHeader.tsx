import Link from "next/link";

import { Navigation } from "./Navigation";

const Navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];
const TheHeader = () => {
  return (
    <header>
      <Navigation navlinks={Navlinks} />
    </header>
  );
};

export { TheHeader };

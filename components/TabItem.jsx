"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TabItem = ({ tab }) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={tab.path}
        className={`${
          pathname === tab.path
            ? "bg-gradient-to-r from-emerald-200 to-emerald-500 bg-clip-text text-transparent transition-colors duration-500"
            : "hover:text-white transition-colors duration-500"
        }`}
      >
        {tab.title}
      </Link>
    </>
  );
};

export default TabItem;

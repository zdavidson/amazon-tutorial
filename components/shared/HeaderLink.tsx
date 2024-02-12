import Link from "next/link";
import React from "react";

const HeaderLink = ({
  children,
  href,
  style,
}: {
  children: React.ReactNode;
  href: string;
  style?: React.CSSProperties;
}) => {
  return (
    <Link
      href={href}
      style={{
        color: "white",
        textDecoration: "none",
        margin: "0.5rem",
        ...style,
      }}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;

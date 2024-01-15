import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

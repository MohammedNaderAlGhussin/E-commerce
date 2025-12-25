import type { Metadata } from "next";
// import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Store",
  description: "A modern ecommerce platform build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}

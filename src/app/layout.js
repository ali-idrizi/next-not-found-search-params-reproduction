'use client'

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <header style={{ display: "flex", gap: "10px" }}>
          <button onClick={()=> { router.push('/') }}>/</button>
          <button onClick={()=> { router.push('/about') }}>/about</button>
          <button onClick={()=> { router.push('/about?q=404') }}>/about?q=404</button>
        </header>

        {children}
      </body>
    </html>
  );
}

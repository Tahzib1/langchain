import Navbar from "@/components/Navbar";
import "./globals.css";
import { Public_Sans } from "next/font/google";


const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Chat with your Database</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Chat with your database using simple conversation"
        />
        <meta property="og:title" content="Chat with your database" />
        <meta
          property="og:description"
          content="Chat with your database using simple conversation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0" />
      </head>
      <body className={publicSans.className}>
        <div>
          <Navbar />
          <main className="h-[calc(100svh-64px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

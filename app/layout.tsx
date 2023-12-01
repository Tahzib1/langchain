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
        <title>LangChain + NextJS</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Chat app using our own data!"
        />
        <meta property="og:title" content="LangChain + Next.js" />
        <meta
          property="og:description"
          content="Chat app using our own data!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0" />
      </head>
      <body className={publicSans.className}>
        <div>
          <Navbar />
          <main className="h-[calc(100vh-64px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

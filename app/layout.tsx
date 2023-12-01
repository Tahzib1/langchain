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
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col">
          <Navbar />
          <main className="h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

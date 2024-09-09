import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col justify-center gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-lg" >Welcome To Product App</h1>
        <Link className="text-xl text-center p-4  bg-blue-500 text-white rounded hover:bg-blue-700" href="/product">
          Product List
        </Link>
      </main>
    </div>
  );
}

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Shakib", lastName: "Hossen" };
  return (
    <main className="flex h-screen w-screen font-inter">
      <Sidebar user={loggedIn as User} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn as User} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

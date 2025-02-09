import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { AuthProvider } from "@/app/context/Auth";
import "../globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "EduSphere",
  description: "EduSphere is a E-learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <AuthProvider>
            <div className="flex border-r shadow-xl max-w-xs   min-h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar />
            </div>
            {children}
          </AuthProvider>
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={2000}
            pauseWhenPageIsHidden
            visibleToasts={1}
          />
        </div>
      </body>
    </html>
  );
}

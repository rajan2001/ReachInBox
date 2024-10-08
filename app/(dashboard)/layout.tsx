import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import SideBar from "@/components/layout-component/sidebar";
import { Providers } from "@/lib/provider";
import "../globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (

        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SideBar />
                        <main className="lg:pl-20">
                            {children}
                        </main>
                    </ThemeProvider>
                </Providers>
            </body>
        </html>

    );
}

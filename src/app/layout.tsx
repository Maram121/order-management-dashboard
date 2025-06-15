import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Order Management Dashboard",
  description: "Tuniform Order Management System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 flex flex-col">
            <div className="flex h-16 items-center border-b px-4">
              <SidebarTrigger className="cursor-pointer"/>
              <h1 className="ml-4 text-lg font-semibold">Order Management Dashboard</h1>
            </div>
            <div className="flex-1 p-6">{children}</div>
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

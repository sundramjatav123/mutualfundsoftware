import { ThemeProvider } from "next-themes";
import Footer from "../components/ui/Footer";
import Menu from "../components/ui/Menu";
import Navbar from "../components/ui/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import ThemeToggle from "../components/ui/ThemeToggle";
import { getSiteData } from "@/lib/functions";

export default async function WebsiteLayout({ children }) {
  const siteData = await getSiteData();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col bg-[var(--rv-bg)] text-[var(--rv-text)] min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main className="flex-1">
          {children}
        </main>
        <Footer siteData={siteData} />
        <Menu />
      </div>
    </ThemeProvider>
  );
}
import { ThemeProvider } from "next-themes";
import Footer from "../components/ui/Footer";
import Menu from "../components/ui/Menu";
import Navbar from "../components/ui/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import ThemeToggle from "../components/ui/ThemeToggle";

export default function WebsiteLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col bg-[var(--rv-bg)] text-[var(--rv-text)]">
        <ThemeToggle />
        <Navbar />
        <ScrollToTop />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Menu />
      </div>
    </ThemeProvider>
  );
}
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { MobileMenu } from "./MobileMenu";
import { Toast } from "@/components/ui/Toast";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileMenu />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileBottomNav />
      <Toast />
    </>
  );
}

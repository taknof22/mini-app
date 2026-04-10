import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ShopProvider } from '@/context/shop-context';

export const metadata = {
  title: 'VERDE CBD',
  description: 'Premium CBD products for balance and calm.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
          <Navbar />
          <main className="page-shell">{children}</main>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}

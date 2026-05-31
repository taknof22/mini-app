import './globals.css';
import { ShopProvider } from '@/context/shop-context';

export const metadata = {
  title: 'NESTIX',
  description: 'Premium demo shopping mini app.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}

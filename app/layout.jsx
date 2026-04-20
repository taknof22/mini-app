import './globals.css';
import { ShopProvider } from '@/context/shop-context';

export const metadata = {
  title: 'Herbi Mini App',
  description: 'Telegram-style mini e-commerce onboarding flow.'
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

import Navigation from './components/Navigation';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className='bg-white min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}
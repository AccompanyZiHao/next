import './style.css';
import Sidebar from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

import { locales } from '@/config';

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: {
    lng,
  },
}) {

  console.log('=>(layout.tsx:17) lng', lng);

  return (
    <html lang={ lng }>
    <body>
    <div className="container">

      <div className="main">
        <Sidebar lng={ lng }/>
        <section className="col note-viewer">{ children }</section>
      </div>

      <Footer lng={ lng }/>
    </div>
    </body>
    </html>
  );
}


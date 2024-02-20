import type { Metadata } from 'next'
import { Playfair_Display, Open_Sans } from 'next/font/google'
import { Footer } from '@layout/footer'
import './globals.css'

export const sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Espresso',
  description: 'Bienvenido a Espresso, donde cada taza cuenta una historia de pasión y perfección. Sumérgete en el aroma irresistible de nuestros cafés de origen único y descubre un espacio acogedor donde el café se convierte en una experiencia inolvidable. Desde eventos especiales hasta educación cafetera, en Espresso, estamos dedicados a brindarte momentos únicos de deleite y conexión. Descubre la esencia del café auténtico en Espresso: más que una bebida, una experiencia.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${playfair.variable} ${sans.variable}`} suppressHydrationWarning>
        {children}
        <div id='portal'></div>
        <Footer />
      </body>
    </html>
  );
}

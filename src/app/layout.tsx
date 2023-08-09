import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';

const minionPro = localFont({
  src: [
    {
      path: '../../public/fonts/MinionPro-Regular.otf',
      weight: '400'
    }
  ],
  variable: '--font-minion-pro'
})

export const metadata: Metadata = {
  title: 'Papel Pólen',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P5MBKH4W');
                      `,
          }}
        />
      </head>
      <body className={`bg-[#fff7e0]`} style={{ fontFamily: minionPro.style.fontFamily }}>
        {children}
      </body>
    </html>
  )
}

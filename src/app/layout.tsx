import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Providers } from './Providers';
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
    <Providers>
      <html lang="pt-br">
          <Script
            id='meta'
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '238816705230083');
              fbq('track', 'PageView');
            `,
            }}
          />
        <body className={`bg-[#fff7e0]`} style={{ fontFamily: minionPro.style.fontFamily }}>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=238816705230083&ev=PageView&noscript=1" />
          {children}
        </body>
      </html>
    </Providers>
  )
}

import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Ahmed Abdulla',
  description: '',
};

const fontHeading = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = DM_Sans({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Abdulla",
    "url": "https://ahmedabdulla.dev/",
    "sameAs": [
      "https://www.linkedin.com/in/ahmed-abdulla-1aa908253"
    ],
    "jobTitle": "Information Science Undergraduate",
    "affiliation": "Cornell University"
  };

  return (
    <html lang='en' className='hide-scrollbar'>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}

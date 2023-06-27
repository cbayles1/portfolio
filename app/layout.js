import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caleb Bayles',
  description: 'My personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        
        <span id="contact" className='flex top-0 justify-end sticky m-0 z-10 pt-3 pb-0 bg-oat w-full'>
          <ContactImg name="Email" path="mailto:clbayles@hotmail.com" image="/envelope.svg"></ContactImg>
          <ContactImg name="LinkedIn" path="https:/www.linkedin.com/in/caleb-bayles/" image="/linkedin.svg"></ContactImg>
          <ContactImg name="Github" path="https:/www.github.com/cbayles1" image="/github.svg"></ContactImg>
          <ContactImg name="Resume" path="/resume.pdf" image="/resume.svg"></ContactImg>
        </span>

        {children}
        
      </body>
    </html>
  )
}

function ContactImg({name, path, image}) {
  return (
    <Link href={path} alt={name} target="_blank" className='group'>
      <button className="w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] relative mx-2 my-0">
        <Image src={image} alt={name} fill></Image>
      </button>
      <span id="tag" className='invisible text-xs m-1 p-1 grid place-items-center rounded bg-alpine text-oat group-hover:visible'>{name}</span>
    </Link>
  );
}
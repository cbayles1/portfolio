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
    <html lang="en" className='bg-oat'>

      <body className={inter.className}>

        <div id='nav' className='flex sticky top-0 justify-between bg-oat/100 2xl:bg-oat/0 z-10'>
        
          <span id='titlewrapper' className='group w-fit'>
            <button className='mx-4 my-2 bg-nero p-3 text-oat text-6xl font-medium w-fit border-4 border-nero hover:bg-oat hover:text-nero'>
              <Link href='/'>
                <h1>Caleb Bayles</h1>
              </Link>
            </button>
          </span>

          <div id="contact" className='flex justify-end my-0 mx-1 pt-3 pb-0'>
            <ContactImg name="Email" path="mailto:clbayles@hotmail.com" image="/envelope.svg"></ContactImg>
            <ContactImg name="LinkedIn" path="https:/www.linkedin.com/in/caleb-bayles/" image="/linkedin.svg"></ContactImg>
            <ContactImg name="Github" path="https:/www.github.com/cbayles1" image="/github.svg"></ContactImg>
            <ContactImg name="Resume" path="/resume.pdf" image="/resume.svg"></ContactImg>
          </div>

        </div>

        {children}
        
        <div id='footer' className="mx-3 my-1.5 py-1.5 text-center font-light text-nero mb-4">
          <p id="contact" className='mb-1'>
            <ContactLink name="clbayles@hotmail.com" href="mailto:clbayles@hotmail.com"></ContactLink>
            &emsp;|&emsp;
            <ContactLink name="linkedin.com/in/caleb-bayles" href="https:/www.linkedin.com/in/caleb-bayles/"></ContactLink>
            &emsp;|&emsp;
            <ContactLink name="github.com/cbayles1" href="https:/www.github.com/cbayles1"></ContactLink>
            &emsp;|&emsp;
            <ContactLink name="My Resume" href="/resume.pdf"></ContactLink>
          </p>
          <p id="notice">I made this website myself using React.js, Next.js, and Tailwind CSS.</p>
        </div>

      </body>
    </html>
  )
}

function ContactImg({name, path, image}) {
  return (
    <Link href={path} alt={name} target="_blank" className='group'>
      <button className="w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] relative mx-2 my-0">
        <Image src={image} alt={name} fill className='z-0'></Image>
      </button>
      <span id="tag" className='invisible text-xs m-1 p-1 grid place-items-center rounded bg-alpine text-oat group-hover:visible'>{name}</span>
    </Link>
  );
}

function ContactLink({name, href}) {
  return (
    <a href={href} target="_blank" className='hover:bg-alpine hover:text-oat rounded p-1'>{name}</a>
  );
}
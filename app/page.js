import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5 font-medium">
    
    <span id="contact" className='flex top-2 justify-end sticky m-0'>
      <ContactImg name="Email" path="mailto:clbayles@hotmail.com" image="/envelope.svg"></ContactImg>
      <ContactImg name="LinkedIn" path="https:/www.linkedin.com/in/caleb-bayles/" image="/linkedin.svg"></ContactImg>
      <ContactImg name="Github" path="https:/www.github.com/cbayles1" image="/github.svg"></ContactImg>
      <ContactImg name="Resume" path="/resume.pdf" image="/resume.svg"></ContactImg>
    </span>

    <div id='splash' className="my-1.5 flex justify-center">
      
      <div id='splashtext'>
        <div className='bg-nero p-2 m-5 text-oat text-6xl'>
          <h1>Caleb Bayles</h1>
        </div>
        <p id="bio" className="max-w-sm">BIO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="w-[150px] h-[200px] lg:w-[150px] lg:h-[200px] relative">
        <Image src="/portrait.jpg" alt="photo of me" fill id='portrait'></Image>
      </div>

    </div>

    <br></br>

    <div id='categories' className="my-1.5 mx-10 bg-alpine grid text-center p-3 grid-cols-1 lg:grid-cols-3 text-oat">    
      
        <div id='skills' className='h-auto m-2 p-1'>
          <Link href="/skills">
            <h2 className='text-3xl bg-nero text-oat p-2 m-1 hover:bg-oat hover:text-nero'>Skills</h2>
            <ul id='skilllist' className='grid grid-cols-2 md:grid-cols-3 place-items-center'>
              <li className='py-2 px-1'>Python</li>
              <li className='py-2 px-1'>HTML/CSS</li>
              <li className='py-2 px-1'>JavaScript</li>
              <li className='py-2 px-1'>Java</li>
              <li className='py-2 px-1'>C++</li>
              <li className='py-2 px-1'>React.js</li>
              <li className='py-2 px-1'>Next.js</li>
              <li className='py-2 px-1'>Git</li>
              <li className='py-2 px-1'>SQL</li>
            </ul>
          </Link>
      </div>

      <div id='projects' className='h-auto m-2 p-1'> 
          <Link href="/projects">
            <h2 className='text-3xl bg-nero text-oat p-2 m-1 hover:bg-oat hover:text-nero'>Projects</h2>
          </Link>
          <div id='projectlist' className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
            <Project name='dummy' path='/projects/expendable054' image="/expendable.png"></Project>
            <Project name='dummy' path='/projects/weather' image="/weather.png"></Project>
            <Project name='dummy' path='/projects/backingTrack' image="/backingTrack.png"></Project>
            <Project name='dummy' path='/projects' image="/more.png"></Project>
          </div>
      </div>

      <div id='education' className='h-auto m-2 p-1'>
        <Link href="/education">
          <h2 className='text-3xl bg-nero text-oat p-2 m-1 hover:bg-oat hover:text-nero'>Education</h2>
          <ul id='educationlist' className='grid grid-cols-1'>
            <li className='py-2 px-1'>Southern Illinois University Edwardsville</li>
            <li className='py-2 px-1'>Bachelor of Science in Computer Science (expected graduation: May 2024)</li>
            <li className='py-2 px-1'> GPA: 3.7</li>
            <li className='py-2 px-1'>Dean’s List (2 Years)</li>
          </ul>
        </Link>
      </div>

    </div>

    <br></br>

    <div id='footer' className="my-1.5 py-1.5 text-center font-light text-nero">
      <p id="contact">
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

    </main>
  )
}

function Project({name, path, image}) {
  return (
    <Link href={path} alt={name} className='group'>
      <button className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] relative m-2">
        <span> 
        <Image src={image} alt={name} fill></Image>
        </span>
      </button>
      <span id="tag" className='invisible text-xs mx-1 p-1 grid place-items-center rounded bg-nero text-oat group-hover:visible'>{name}</span>
    </Link>
  );
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

function ContactLink({name, href}) {
  return (
    <a href={href} target="_blank" className='hover:bg-alpine hover:text-oat rounded p-1'>{name}</a>
  );
}
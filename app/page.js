import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5">
    
    <div id='splash' className="my-1.5 flex justify-center">
      
      <div id='splashtext'>
        <h1 className='text-6xl m-5'>Caleb Bayles</h1>
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
            <h2 className='text-3xl bg-nero text-oat p-2 m-1'>Skills</h2>
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
          <h2 className='text-3xl bg-nero text-oat p-2 m-1'>Projects</h2>
          <div id='projectlist' className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
            <Project name='dummy' path='/projects/dummy' image="/dummy.png"></Project>
            <Project name='dummy' path='/projects/dummy' image="/dummy.png"></Project>
            <Project name='dummy' path='/projects/dummy' image="/dummy.png"></Project>
            <Project name='dummy' path='/projects/dummy' image="/dummy.png"></Project>
          </div>
        </Link>
      </div>

      <div id='education' className='h-auto m-2 p-1'>
        <Link href="/education">
          <h2 className='text-3xl bg-nero text-oat p-2 m-1'>Education</h2>
          <ul id='educationlist' className='grid grid-cols-1'>
            <li className='py-2 px-1'>Southern Illinois University Edwardsville</li>
            <li className='py-2 px-1'>Bachelor of Science in Computer Science</li>
            <li className='py-2 px-1'> GPA: 3.7</li>
            <li className='py-2 px-1'>Dean’s List (2 Years)</li>
          </ul>
        </Link>
      </div>

    </div>

    <br></br>

    <div id='footer' className="my-1.5 bg-terra text-center">
      <p id="contact">clbayles@hotmail.com</p>
      <p id="notice">I made this website myself using React.js, Next.js, and Tailwind CSS.</p>
    </div>

    </main>
  )
}

function Project({name, path, image}) {
  return (
    <div className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] relative m-4">
      <Link href={path} alt={name}>
        <Image src={image} alt={name} fill></Image>
      </Link>
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
  <main className="bg-oat w-full h-full p-5 font-medium">

    <p id="bio" className="max-w-sm">BIO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <button className="w-[300px] h-[400px] relative m-2 overflow-hidden rounded-xl border-2">
      <span>
      <Image src="/portrait.jpg" alt="photo of me" fill className='absolute object-cover'></Image>
      </span>
    </button>

    <br></br>

    <div id='categories' className="my-1.5 mx-10 bg-alpine grid text-center p-3 grid-cols-1 lg:grid-cols-3 text-oat rounded-lg">    
      
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
        <Link href={{
          pathname: "/education"
        }}
        as={'/education'}>
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

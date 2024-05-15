import Image from 'next/image';
import Link from 'next/link';
import allProjects from './projectData.json';
import ImgLink from './(components)/ImgLink';

export default function Home() {

  const selectedProjects = ["greon", "tcell", "expendable054"];

  return (
  <div className="bg-oat w-full h-full p-5 font-medium justify-items-center">

    <div className='flex justify-center flex-wrap lg:ml-32 justify-items-center'>
      <Link href={"/education"}>
        <div id="bio" className="max-w-sm m-6 font-light space-y-2">
          <p>As an initially self-taught software developer, I am well experienced at problem-solving, troubleshooting, and debugging, and have learned to be self-motivated.</p>
          <p>After learning how to make simple websites and primitive chatbots in Node.js, I switched over to making videogames in Python for a few years, which was fun, but very challenging.</p>
          <p>In college, I furthered my skills and deepened my understanding of various subfields, incorporating new knowledge into side projects.</p>
        </div>
      </Link>
      <Image src="/portrait.jpg" alt="photo of me" width='240' height='320' className='m-4 min-w-fit border-4 border-nero'></Image>
    </div>

    <br></br>

    <div id='categories' className="my-1.5 mx-10 bg-alpine grid text-center p-3 grid-cols-1 lg:grid-cols-3 text-oat rounded-lg">
      
      <div id='skills' className='h-auto m-2 p-1'>
          <Link href="/skills">
            <h2 className='text-3xl bg-nero text-oat p-2 m-1 hover:bg-oat hover:text-nero'>Skills</h2>
            <ul id='skilllist' className='grid grid-cols-2 md:grid-cols-3 place-items-center space-y-12 space-x-4'>
              <li className='pt-12 pl-4'>Python</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Git</li>
              <li>C++</li>
              <li>Java</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li></li>
            </ul>
            <p className='self-center mb-6'>(Click for More)</p>
          </Link>
      </div>

      <div id='projects' className='h-auto m-2 p-1'>
          <Link href="/projects">
            <h2 className='text-3xl bg-nero text-oat p-2 m-1 hover:bg-oat hover:text-nero'>Projects</h2>
          </Link>
          <div id='projectlist' className='grid grid-cols-1 md:grid-cols-2 place-items-center'>

            {allProjects.map((projectData) => {
              if (selectedProjects.includes(projectData.fname)) {
                return (<Project key={projectData.fname} name={projectData.title} path={'/projects/' + projectData.fname} image={projectData.img}></Project>);
              }
            })}

            <Project name='More Projects' path='/projects' image="/more.png"></Project>
          </div>
      </div>

      <div id='education' className='h-auto m-2 p-1'>
        <Link href="/education">
          <h2 className='text-3xl bg-nero text-oat p-2 m-1 hover:bg-oat hover:text-nero'>Education and Experience</h2>
          <ul id='educationlist' className='grid grid-cols-1 space-y-4 space-x-2'>
            <li className='pl-2 pt-4'>Southern Illinois University Edwardsville</li>
            <li>Bachelor of Science in Computer Science <br></br>(Graduated May 2024)</li>
            <li>Cum Laude (GPA: 3.7)</li>
            <li>Dean's List (3 Years)</li>
            <li>Park Maintenance - Decatur Park District <br></br>(May 2021 - August 2023)</li>
          </ul>
        </Link>
      </div>

    </div>

  </div>
  )
}

function Project({name, path, image}) {
  return <ImgLink href={path} src={image} tagStr={name} tagColor='nero' w={100} h={100} mx={2} my={2} target='_self'></ImgLink>;
}

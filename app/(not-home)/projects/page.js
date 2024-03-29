import allProjects from '../../projectData.json';
import ImgLink from '../../(components)/ImgLink';

export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5 font-medium flex flex-col space-y-10">

      <h1 className='text-5xl bg-alpine p-4 text-oat w-fit self-center'>Projects</h1>
      <ProjectList></ProjectList>

    </main>
  )
}

function ProjectList() {
  return (
  <div id='splash' className="m-10 gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
    {allProjects.map((projectData) => {
        return <ImgLink key={projectData.fname} src={projectData.img} href={'/projects/' + projectData.fname} w={150} h={150} tagStr={projectData.title} tagColor='nero'></ImgLink>
    })}
  </div>
  );
}
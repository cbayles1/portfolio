export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5 flex flex-col">
  
    <h1 className='text-5xl bg-alpine p-4 text-oat w-fit self-center font-medium mb-3'>Skills</h1>

    <div id='skills' className="m-4 grid grid-cols-1 min-[100px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center font-light">

      <Skill name="Python" proficiency="Highly"></Skill>
      <Skill name="HTML/CSS" proficiency="Highly"></Skill>
      <Skill name="Git" proficiency="Highly"></Skill>
      <Skill name="CSV Manipulation" proficiency="Highly"></Skill>
      <Skill name="SSH" proficiency="Highly"></Skill>
      <Skill name="FTP" proficiency="Highly"></Skill>
      <Skill name="Java" proficiency="Somewhat"></Skill>
      <Skill name="C++" proficiency="Somewhat"></Skill>
      <Skill name="C#" proficiency="Somewhat"></Skill>
      <Skill name="Scheme" proficiency="Slightly"></Skill>
      <Skill name="JavaScript" proficiency="Highly"></Skill>
      <Skill name="React.js" proficiency="Somewhat"></Skill>
      <Skill name="Vite.js" proficiency="Somewhat"></Skill>
      <Skill name="Next.js" proficiency="Somewhat"></Skill>
      <Skill name="Tailwind CSS" proficiency="Somewhat"></Skill>
      <Skill name="Responsive Design" proficiency="Somewhat"></Skill>
      <Skill name="Node.js" proficiency="Somewhat"></Skill>
      <Skill name="Object-Oriented Programming" proficiency="Somewhat"></Skill>
      <Skill name="Sorting Algorithms" proficiency="Somewhat"></Skill>
      <Skill name="Search Algorithms" proficiency="Somewhat"></Skill>
      <Skill name="Asynchronous Programming" proficiency="Somewhat"></Skill>
      <Skill name="Agile" proficiency="Slightly"></Skill>
      <Skill name="Scrum" proficiency="Slightly"></Skill>
      <Skill name="API Usage" proficiency="Slightly"></Skill>
      <Skill name="SQL" proficiency="Slightly"></Skill>
      <Skill name="Dynamic programming" proficiency="Slightly"></Skill>
      <Skill name="Systems programming" proficiency="Slightly"></Skill>
      <Skill name="Multi-threaded programming" proficiency="Slightly"></Skill>
      <Skill name="Prolog" proficiency="Slightly"></Skill>
      <Skill name="Scheme" proficiency="Slightly"></Skill>
    </div>

    </main>
  )
}

function Skill({name, proficiency, firstElement=false}) {
  let mt = 0;
  if (firstElement) {
    mt = 4;
  }
  return (
    <div className={`mt-${mt} m-3`}>
      <h1 className="text-md font-semibold">{name}</h1>
      <label className="text-sm">{proficiency} proficient</label>
    </div>
  );
}
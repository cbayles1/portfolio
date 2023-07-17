export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5 flex flex-col">
  
    <h1 className='text-5xl bg-alpine p-4 text-oat w-fit self-center font-medium mb-3'>Skills</h1>

    <div id='skills' className="m-4 grid grid-cols-4 justify-center space-y-4 font-light">

      <Skill name="Python" proficiency="Highly" firstElement></Skill>
      <Skill name="HTML/CSS" proficiency="Highly"></Skill>
      <Skill name="Git" proficiency="Highly"></Skill>
      <Skill name="CSV Manipulation" proficiency="Highly"></Skill>
      <Skill name="SSH" proficiency="Highly"></Skill>
      <Skill name="FTP" proficiency="Highly"></Skill>
      <Skill name="Java" proficiency="Highly"></Skill>
      <Skill name="C++" proficiency="Highly"></Skill>
      <Skill name="C" proficiency="Highly"></Skill>
      <Skill name="JavaScript" proficiency="Highly"></Skill>
      <Skill name="React.js" proficiency="Somewhat"></Skill>
      <Skill name="Next.js" proficiency="Somewhat"></Skill>
      <Skill name="Tailwind CSS" proficiency="Somewhat"></Skill>
      <Skill name="Responsive Design" proficiency="Somewhat"></Skill>
      <Skill name="Node.js" proficiency="Somewhat"></Skill>
      <Skill name="Object-Oriented Programming" proficiency="Somewhat"></Skill>
      <Skill name="Sorting Algorithms" proficiency="Somewhat"></Skill>
      <Skill name="Search Algorithms" proficiency="Somewhat"></Skill>
      <Skill name="Asynchronous Programming" proficiency="Somewhat"></Skill>
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
    <div className={`mt-${mt}`}>
      <h3 className="text-md font-semibold">{name}</h3>
      <label className="text-sm">{proficiency} proficient</label>
    </div>
  );
}
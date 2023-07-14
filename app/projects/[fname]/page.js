import Image from 'next/image';
import Link from 'next/link';
import allProjects from '../../projectData.json';
import BubbleLink from '../../(components)/BubbleLink';

export default async function Page({params: {fname}}) {

    let projectData = await getProjectData(fname);

    return (
    <div className='flex flex-wrap space-y-8 space-x-0 lg:space-x-32 m-16'>

        <div className='flex flex-wrap space-y-10 max-w-xl'>
            <h1 className='text-5xl bg-alpine p-4 text-oat'>{projectData?.title}</h1>
            <p>{projectData?.desc}</p>
            <div className='space-x-6'>
                <OtherLink projectData={projectData}></OtherLink>
                <BubbleLink name="Project Repo" href={projectData?.github} initBgColor='nero' initTextColor='oat' padding={2}></BubbleLink>
            </div>
        </div>

        <Image src={projectData?.img} width={465} height={301} className='border-4 border-nero'></Image>

    </div>
    );
}

async function getProjectData(projectName) {
    let projectData = null;
    for (const entry of allProjects) {
        if (entry.fname === projectName) {
            projectData = entry;
            break;
        }
    }
    return projectData;
}

export async function generateStaticParams() { // It would appear this is unneccesary for now, 
    let answers = [];                          // but it doesn't hurt anything so I'll leave it alone.
    for (const entry of allProjects) {
        answers.push({fname: entry.fname});
    }
    return answers;
}

function OtherLink({projectData}) {
    if (projectData.link != null) {
        return <BubbleLink name={projectData.linkLabel} href={projectData?.link} initBgColor='nero' initTextColor='oat' padding={2}></BubbleLink>;
    } else {
        return;
    }
}
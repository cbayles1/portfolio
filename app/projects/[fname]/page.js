import Image from 'next/image';
import Link from 'next/link';
import allProjects from '../../projectData.json';
import BubbleLink from '../../(components)/BubbleLink';

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
        return <BubbleLink name={projectData.linkLabel} href={projectData?.link}></BubbleLink>;
    } else {
        return;
    }
}

export default async function Page({params: {fname}}) {

    let projectData = await getProjectData(fname);

    return (                                // ? means the data is only displayed if it exists
    <div className='grid grid-cols-1 m-5'>
        <h2>Title: {projectData?.title}</h2>
        <p>Desc: {projectData?.desc}</p>
        <p>{projectData?.img}</p>
        <BubbleLink name="GitHub Page" href={projectData?.github}></BubbleLink>
        <OtherLink projectData={projectData}></OtherLink>
    </div>
    );
}

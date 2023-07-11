import Image from 'next/image';
import Link from 'next/link';
import allProjects from '../../projectData.json';

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

export default async function Page({params: {fname}}) {

    let projectData = await getProjectData(fname);

    return (
    <div className='grid grid-cols-6 m-1'>
        <ul className='m-4'>
            <li>Title: {projectData?.title}</li> {/* ? means the data is only displayed if it exists */}
            <li>Desc: {projectData?.desc}</li>
            <li>Img: {projectData?.img}</li>
            <li>GitHub: {projectData?.github}</li>
            <li>Link: {projectData?.link}</li>
        </ul>
    </div>
    );
}

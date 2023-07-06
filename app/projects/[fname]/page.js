import Image from 'next/image';
import Link from 'next/link';
import allProjects from '../../projectData.json';

/*function getAllProjectFilenames() {
    let fnames = [];
    for (const entry of allProjects) {
        fnames.push(entry.fname);
    }

    return fnames;
}*/

function getProjectData(projectName) {
    let projectData = null;
    for (const entry of allProjects) {
        if (entry.fname === projectName) {
            projectData = entry;
        }
    }
    return projectData;
}

export async function getStaticPaths() {
    const paths = allProjects.map(project => {
        return {
            params: {
                fname: project.fname
            }
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    
    const {params} = context;

    //let data = getProjectData(params.fname);
    const data = {
        title: "Expendable 054",
        fname: "expendable054",
        desc: "hi there this the description",
        img: "here image path",
        github: "here github url",
        link: "here other link if available"
    }

    return {
        props: {
            projectData: data
        }
    }
}

export default function Home(context) {

    const projectData = context.params;

    return (
    <div className='grid grid-cols-6 m-1'>    
        <ul className='m-4'>
            <li>Title: {projectData.title}</li>
            <li>Desc: {projectData.desc}</li>
            <li>Img: {projectData.img}</li>
            <li>GitHub: {projectData.github}</li>
            <li>Link: {projectData.link}</li>
        </ul>
    </div>
    );
}

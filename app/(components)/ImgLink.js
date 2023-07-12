import Image from 'next/image';
import Link from 'next/link';

function ImgTag({tagStr, tagColor}) {
    if (tagStr) {
        return (
            <span id="tag" className={`invisible text-xs m-1 p-1 grid place-items-center rounded bg-${tagColor} text-oat group-hover:visible`}>{tagStr}</span>
        );
    } else {
        return;
    }
}

export default function ImgLink({src, href, w, h, mx=2, my=2, target="_self", tagStr=null, tagColor='alpine'}) {
    return (
        <Link href={href} target={target} className='group'>
            <button className={`w-[${w}px] h-[${h}px] relative mx-${mx} my-${my}`}>
                <Image src={src} fill></Image>
            </button>
            <ImgTag tagStr={tagStr} tagColor={tagColor}></ImgTag>
        </Link>
    );
}


/*

<Link href={path} alt={name} className='group'>
    <button className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] relative m-2">
        <span>
        <Image src={image} alt={name} fill></Image>
        </span>
    </button>
    <span id="tag" className='invisible text-xs mx-1 p-1 grid place-items-center rounded bg-nero text-oat group-hover:visible'>{name}</span>
</Link>

*/


/*

<Link href={path} alt={name} target="_blank" className='group'>
    <button className="w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] relative mx-2 my-0">
        <Image src={image} alt={name} fill className='z-0'></Image>
    </button>
    <span id="tag" className='invisible text-xs m-1 p-1 grid place-items-center rounded bg-alpine text-oat group-hover:visible'>{name}</span>
</Link>

*/
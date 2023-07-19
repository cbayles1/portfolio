import Image from 'next/image';
import Link from 'next/link';

function ImgTag({tagStr, tagColor}) {
    if (tagStr) {
        return (
            <span id="tag" className={`invisible text-xs mt-2 p-1 grid place-items-center rounded bg-${tagColor} text-oat group-hover:visible`}>{tagStr}</span>
        );
    } else {
        return;
    }
}

export default function ImgLink({src, href, w, h, mx=2, my=2, target="_self", tagStr=null, tagColor='alpine'}) {
    return (
        <Link href={href} target={target} className={`group w-fit mx-${mx} my-${my}`}>
            <Image src={src} width={w} height={h}></Image>
            <ImgTag tagStr={tagStr} tagColor={tagColor}></ImgTag>
        </Link>
    );
}
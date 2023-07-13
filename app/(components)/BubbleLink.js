import Link from 'next/link';

export default function BubbleLink({name, href, padding=1, initBgColor='oat', initTextColor='nero'}) {
    return (
        <Link href={href} target="_blank" className={`text-${initTextColor} bg-${initBgColor} hover:bg-alpine hover:text-oat rounded p-${padding} w-fit`}>{name}</Link>
      );
}

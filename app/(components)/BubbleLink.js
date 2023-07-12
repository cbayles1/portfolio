import Link from 'next/link';

export default function BubbleLink({name, href, padding=1}) {
    return (
        <Link href={href} target="_blank" className={`hover:bg-alpine hover:text-oat rounded p-${padding} w-fit`}>{name}</Link>
      );
}

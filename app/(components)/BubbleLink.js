import Link from 'next/link';

export default function BubbleLink({name, href, margin=0, padding=1, initBgColor='oat', initTextColor='nero', target="_blank"}) {
  return (
      <Link href={href} target={target} className={`text-${initTextColor} bg-${initBgColor} hover:bg-alpine hover:text-oat rounded m-${margin} p-${padding} w-fit`}>{name}</Link>
    );
}

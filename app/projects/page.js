import Image from 'next/image';
import Link from 'next/link';
import ImgLink from '../(components)/ImgLink';

export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5 font-medium flex flex-col space-y-10">

        <h1 className='text-5xl bg-alpine p-4 text-oat w-fit self-center'>Projects</h1>           

        <div id='splash' className="m-40 grid md:grid-cols-3 lg:grid-cols-4 justify-center">
          <ImgLink src="/expendable.png" href="/expendable054" w={100} h={100} tagStr="Expendable 054" tagColor='nero'></ImgLink>
          <ImgLink src="/weather.png" href="/weather" w={100} h={100} tagStr="Weather App" tagColor='nero'></ImgLink>
          <ImgLink src="/backingTrack.png" href="/backingTrack" w={100} h={100} tagStr="Backing Track" tagColor='nero'></ImgLink>
          <ImgLink src="/expendable.png" href="/expendable054" w={100} h={100} tagStr="Expendable 054" tagColor='nero'></ImgLink>
          <ImgLink src="/weather.png" href="/weather" w={100} h={100} tagStr="Weather App" tagColor='nero'></ImgLink>
          <ImgLink src="/backingTrack.png" href="/backingTrack" w={100} h={100} tagStr="Backing Track" tagColor='nero'></ImgLink>
          <ImgLink src="/expendable.png" href="/expendable054" w={100} h={100} tagStr="Expendable 054" tagColor='nero'></ImgLink>
          <ImgLink src="/weather.png" href="/weather" w={100} h={100} tagStr="Weather App" tagColor='nero'></ImgLink>
          <ImgLink src="/backingTrack.png" href="/backingTrack" w={100} h={100} tagStr="Backing Track" tagColor='nero'></ImgLink>
        </div>

    </main>
  )
}
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-oat w-full h-full p-5">
      
    <div id='splash' class="my-1.5 bg-terra p-2 flex">
      <div id='left'>
        <h1 class='text-6xl m-5'>Caleb Bayles</h1>
        <p id="bio" class="w-auto">BIO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <span class="m-4">
        <Image src="/portrait.jpg" alt="photo of me" width="648" height="1" id='right'></Image>
      </span>

    </div>

    <div id='categories' class="my-1.5 bg-terra">
      CATEGORIES
    </div>

    <div id='footer' class="my-1.5 bg-terra">
      FOOTER
    </div>

    </main>
  )
}

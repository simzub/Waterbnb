import Image from 'next/image';
import MenuComponent from './Menu';

function LogoIcon() {
  return (
    <Image src="/logo-black.png" alt="waterbnb-logo" width={80} height={80} />
  );
}

function SearchIconCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white">
      {/* Normal screen */}
      <div className="hidden md:flex flex-row justify-between px-10 border-b-[1px] items-center ">
        <div className="cursor-pointer flex">
          <LogoIcon />
        </div>
        <div className="w-fit flex border rounded-full h-12 items-center shadow-sm  hover:shadow-md transition-shadow cursor-pointer ">
          <div className=" flex items-center">
            <div className="px-4 border-r-[1px] font-medium text-base truncate">
              Anywhere
            </div>
            <div className="flex px-4 border-r-[1px] font-medium truncate">
              Any week
            </div>
            <div className="flex items-center">
              <div className="px-4 text-gray-400 truncate">Add guests</div>
              <SearchIconCircle />
            </div>
          </div>
        </div>
        <div className=" items-center flex ">
          <div className="text-sm text-center font-medium cursor-pointer rounded-full hover:bg-gray-50 p-3">
            Waterbnb you home
          </div>
          <div className="cursor-pointer rounded-full hover:bg-gray-50 p-3">
            <GlobeIcon />
          </div>
          <MenuComponent />
        </div>
      </div>
      {/* Small screen */}
      <div className="md:hidden w-full flex flex-row px-6 pt-3 items-center ">
        <div className="flex border justify-between w-full rounded-full h-14 items-center  shadow-md  cursor-pointer ">
          <div className="flex items-center">
            <div className="pl-5 pr-4">
              <SearchIcon />
            </div>
            <div>
              <p className="text-sm font-medium">Anywhere</p>
              <p className="text-xs opacity-60">Any week • Add guests</p>
            </div>
          </div>
          <div className="border rounded-full mx-3 w-9 h-9 flex justify-center items-center">
            <FilterIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

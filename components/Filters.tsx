import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const imagesArray: string[] = [
  'Cabins',
  'Amazing_pools',
  'Beachfront',
  'Private_rooms',
  'Mansions',
  'Amazing_views',
  'OMG!',
  'Luxe',
  'Boats',
  'Iconic_cities',
  'Treehouses',
  'Off-the-grid',
  'Riads',
  'Tiny_homes',
  'Creative_spaces',
  'Trending',
  'Vineyards',
  'Domes',
  'Historical_homes',
  "Chef's_kitchen",
  'A-frames',
  'Countryside',
  'Lakefront',
  'National_parks',
  'Yurts',
  'Design',
  'Ski-in~out',
  'Castles',
  'Tropical',
  'New',
  'Ryokans',
  'Play',
  'Camping',
  'Top_of_the_world',
  'Hanoks',
  'Skiing',
  'Lake',
  'Farms',
  'Islands',
  'Towers',
  'Caves',
  'Cycladic_homes',
  'Bed_&_breakfasts',
  'Earth_homes',
  'Surfing',
  'Dammusi',
  'Trulli',
  'Desert',
  'Grand_pianos',
  'Casas_particulares',
  'Barns',
  'Houseboats',
  "Shepherd's_huts",
  'Windmills',
  'Campers',
  'Arctic',
  'Golfing',
  'Minsus',
  'Adapted',
  'Containers',
  'Beach',
];

function FilterIcons(props: any) {
  return <Image width={24} height={24} {...props} />; // eslint-disable-line
}
function FilterIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </svg>
  );
}

function RightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
function LeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000000"
      className="w-3 h-3 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export default function Filters() {
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('Cabins');
  const [scrolledY, setScrolledY] = useState(false);

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const newScrollPos = Math.min(
        scrollPos + container.clientWidth * 0.6,
        scrollWidth
      );
      setScrollPos(newScrollPos);
      container.scrollTo({
        left: newScrollPos,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const newScrollPos = Math.max(scrollPos - container.clientWidth * 0.6, 0);
      setScrollPos(newScrollPos);
      container.scrollTo({
        left: newScrollPos,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      if (scrollPos !== 0) {
        setShowLeftIcon(true);
      } else setShowLeftIcon(false);
      if (scrollPos + container.clientWidth === container.scrollWidth) {
        setShowRightIcon(false);
      } else setShowRightIcon(true);
    }
  }, [scrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolledY(isScrolled);
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
      console.log(scrolledY);
    };
  }, [scrolledY]);

  return (
    <div
      className={`sticky sm:pt-4 top-[68px] z-10 bg-white md:px-10 shadow-md ${
        scrolledY ? 'sm:shadow-md' : 'sm:shadow-none'
      }`}
    >
      {showLeftIcon && (
        <div className="h-full items-center hidden md:flex absolute z-10 ">
          <div
            onClick={handleScrollLeft}
            className="h-full flex items-center bg-white"
          >
            <div className="border p-2 rounded-full cursor-pointer hover:shadow-md">
              <LeftIcon />
            </div>
          </div>
          <div className="h-full w-10 block box-border bg-gradient-to-r from-white to-transparent"></div>
        </div>
      )}
      <div className="flex  justify-between">
        <div
          ref={containerRef}
          className="flex gap-8 px-6 md:px-0 no-scrollbar flex-nowrap overflow-auto md:overflow-hidden"
        >
          {imagesArray.map((image) => (
            <div
              key={image}
              className={`flex border-b-2 gap-8  ${
                selectedFilter === image
                  ? 'border-current'
                  : 'border-transparent hover:border-inherit'
              }`}
            >
              <label className="mt-3 mb-[10px] py-1 cursor-pointer">
                <span
                  onClick={() => setSelectedFilter(image)}
                  className={`flex gap-2 flex-col items-center ${
                    selectedFilter === image ? 'opacity-100' : 'opacity-60'
                  }  hover:opacity-100 transition-opacity `}
                >
                  <FilterIcons src={`/images/${image}.jpg`} alt={image} />
                  <p className="text-xs whitespace-nowrap">
                    {image.replace(/_/g, ' ').replace(/~/g, '/')}
                  </p>
                </span>
              </label>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center pl-6 ">
          <div className="flex h-12 border px-4 items-center rounded-xl cursor-pointer">
            <span className="flex py-2 justify-center gap-2 items-center">
              <FilterIcon />
              <p className="text-xs"> Filters</p>
            </span>
          </div>
        </div>
      </div>
      {showRightIcon && (
        <div className="absolute hidden md:flex right-36 h-full top-1/2 transform -translate-y-1/2 z-10">
          <div className="h-full w-10 block box-border bg-gradient-to-l from-white to-transparent"></div>
          <div
            onClick={handleScrollRight}
            className="h-full bg-white flex items-center"
          >
            <div className="border p-2 rounded-full cursor-pointer hover:shadow-md ">
              <RightIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

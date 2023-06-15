import { useEffect, useRef, useState } from 'react';

const destinationsFilterArray: string[] = [
  'Destinations for arts & culture',
  'Destinations for outdoor adventure',
  'Mountain cabins',
  'Beach destinations',
  'Popular destinations',
  'Unique Stays',
  'Categories',
  'Things to do',
  'Airbnb-friendly apartments',
];

interface Destination {
  city: string;
  state: string;
}

const destinationsArray: Destination[] = [
  {
    city: 'Phoenix',
    state: 'Arizona',
  },
  {
    city: 'Hot Springs',
    state: 'Arkansas',
  },
  {
    city: 'Los Angeles',
    state: 'California',
  },
  {
    city: 'San Diego',
    state: 'California',
  },
  {
    city: 'San Francisco',
    state: 'California',
  },
  {
    city: 'Barcelona',
    state: 'Catalonia',
  },
  {
    city: 'Prague',
    state: 'Czechia',
  },
  {
    city: 'Washington',
    state: 'District of Columbia',
  },
  {
    city: 'Keswick',
    state: 'England',
  },
  {
    city: 'London',
    state: 'England',
  },
  {
    city: 'Scarborough',
    state: 'England',
  },
];

function RightIcon() {
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
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export default function Destinations() {
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(
    'Destinations for arts & culture'
  );

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

  return (
    <div className="min-[1750px]:flex min-[1750px]:justify-center">
      {/* className="max-w-5xl mx-auto px-4" */}
      <div>
        <div className="relative">
          {showLeftIcon && (
            <div className="absolute hidden md:flex -left-4 h-full top-1/2 transform -translate-y-1/2 z-10">
              <div
                onClick={handleScrollLeft}
                className="h-full flex items-center bg-white"
              >
                <div className="cursor-pointer">
                  <LeftIcon />
                </div>
              </div>
              <div className="h-full w-10 block box-border bg-gradient-to-r from-white to-transparent"></div>
            </div>
          )}
          <div className="flex justify-between border-b">
            <div
              ref={containerRef}
              className="flex gap-8 px-6 md:px-0 no-scrollbar flex-nowrap overflow-auto md:overflow-hidden"
            >
              {destinationsFilterArray.map((destination) => (
                <div
                  key={destination}
                  className={`flex border-b-2 gap-8  ${
                    selectedFilter === destination
                      ? 'border-current'
                      : 'border-none'
                  }`}
                >
                  <label className="my-[6px] p-2 cursor-pointer hover:bg-gray-50 rounded-lg">
                    <span
                      onClick={() => setSelectedFilter(destination)}
                      className={`flex gap-2 flex-col items-center ${
                        selectedFilter === destination
                          ? 'opacity-100'
                          : 'opacity-60'
                      }   transition-opacity `}
                    >
                      <div className="whitespace-nowrap text-sm">
                        {destination}
                      </div>
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {showRightIcon && (
            <div className="absolute hidden md:flex -right-4 h-full top-1/2 transform -translate-y-1/2 z-10">
              <div className="h-full w-10 block box-border bg-gradient-to-l from-white to-transparent"></div>
              <div
                onClick={handleScrollRight}
                className="h-full bg-white flex items-center"
              >
                <div className="cursor-pointer">
                  <RightIcon />
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="mt-6 md:mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4">
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
            <div>
              <div>Hello</div>
              <div>Bye</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

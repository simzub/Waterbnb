import Image from 'next/image';
import { useEffect, useState } from 'react';

function ApartamentImage(props: any) {
  return <Image fill {...props} />; // eslint-disable-line
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="w-3 h-3 block"
    >
      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#333333"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
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

function formatDate(dateStart: string, dateEnd: string) {
  const startDate = new Date(dateStart);
  const endDate = new Date(dateEnd);

  return `${startDate.toLocaleString('default', {
    month: 'short',
  })} ${startDate.getDate()}-${endDate.getDate()}`;
}

export default function Card(props: any) {
  const [formattedDate, setFormattedDate] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRightIconClick = () => {
    if (currentImageIndex === props.url.length - 1) {
      return;
    }
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.url.length);
  };

  const handleLeftIconClick = () => {
    if (currentImageIndex === 0) {
      return;
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.url.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setFormattedDate(formatDate(props.dateStart, props.dateEnd));
  }, [props.dateStart, props.dateEnd]);

  return (
    <li className="relative cursor-pointer">
      <div className="group relative aspect-h-9 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 ">
        <ApartamentImage
          src={props.url[currentImageIndex]}
          alt=""
          className="pointer-events-none select-none object-cover"
        />

        <div>
          <div className=" opacity-70 absolute p-4 right-0">
            <HeartIcon />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="absolute bottom-4 h-1 flex justify-center">
            {props.url.map((_: any, index: any) => (
              <div
                key={index}
                className={`border p-0.5 rounded-full transition-opacity cursor-pointer bg-white mx-1 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-50'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-2">
          {currentImageIndex !== 0 && (
            <div
              className="border rounded-full cursor-pointer bg-white w-8 h-8 flex items-center justify-center absolute left-2 group-hover:opacity-90 opacity-0 transition-opacity"
              onClick={handleLeftIconClick}
            >
              <LeftIcon />
            </div>
          )}
          {currentImageIndex !== props.url.length - 1 && (
            <div
              className="border rounded-full cursor-pointer bg-white w-8 h-8 flex items-center justify-center absolute right-2 group-hover:opacity-90 opacity-0 transition-opacity"
              onClick={handleRightIconClick}
            >
              <RightIcon />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col select-none pt-2">
        <div className="flex justify-between items-center">
          <div className="text-md font-medium truncate">
            {props.location}, {props.country}
          </div>
          <div className="flex justify-center items-center">
            <StarIcon />
            <span>&nbsp;</span>
            <div className="text-sm font-medium">{props.rating}</div>
          </div>
        </div>
        <p className="text-sm opacity-60">
          {props.kmAway.toLocaleString('en-US', { useGrouping: true })}{' '}
          kilometers away
        </p>

        <p className="text-sm opacity-60">{formattedDate}</p>
        <div className="text-sm mt-1.5">
          <b>€ {props.price}</b> night
        </div>
      </div>
    </li>
  );
}

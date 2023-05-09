import Image from 'next/image';

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
  return (
    <div className="relative flex flex-col cursor-pointer">
      <div className="h-0 pb-[95%] relative mb-3 bg-blue-500 flex justify-between ">
        <ApartamentImage src={props.url} className="rounded-lg  object-cover" />
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          <div className="border p-2 rounded-full cursor-pointer bg-red-500 transform -translate-y-1/2">
            <LeftIcon />
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          <div className="border p-2 rounded-full cursor-pointer bg-red-500 transform -translate-y-1/2">
            <RightIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium truncate">
            {props.location}, {props.country}
          </div>
          <div className="flex justify-center items-center">
            <StarIcon />
            <div className="text-sm font-medium">{props.rating}</div>
          </div>
        </div>
        <p className="text-sm opacity-60">
          {props.kmAway.toLocaleString('en-US', { useGrouping: true })}{' '}
          kilometers away
        </p>

        <p className="text-sm opacity-60">
          {formatDate(props.dateStart, props.dateEnd)}
        </p>
        <div className="text-sm mt-1.5">
          <b>€ {props.price}</b> night
        </div>
      </div>
    </div>
  );
}

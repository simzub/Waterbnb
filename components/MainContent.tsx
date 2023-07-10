import { data } from '../data/data';
import NewCard from './Card';
export default function MainContent() {
  return (
    <ul
      role="list"
      className="mt-6 md:mt-4 mb-8 px-6 md:px-10 xl:px-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {data.map((item) => (
        <NewCard
          key={item.id}
          url={item.photos}
          country={item.country}
          location={item.location}
          rating={item.rating}
          kmAway={item.kmAway}
          price={item.price}
          dateStart={item.dateStart}
          dateEnd={item.dateEnd}
        />
      ))}
    </ul>
  );
}

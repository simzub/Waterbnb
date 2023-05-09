import { data } from '../pages/data';
import Card from './Card';
export default function MainContent() {
  return (
    <div className="mt-6 md:mt-4 mb-8 px-6 md:px-10 xl:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-flow-row gap-x-6 gap-y-10">
      {data.map((item) => (
        <Card
          key={item.id}
          url={item.photos[0]}
          country={item.country}
          location={item.location}
          rating={item.rating}
          kmAway={item.kmAway}
          price={item.price}
          dateStart={item.dateStart}
          dateEnd={item.dateEnd}
        />
      ))}
    </div>
  );
}

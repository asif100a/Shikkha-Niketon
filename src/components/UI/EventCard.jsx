import pohelaBoishakh from '/images/pohela-boishakh.jpg';
import distribution from '/images/distribution.jpg';
import independence from '/images/independence.webp';
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom';

const EventCard = () => {
    // const images = [pohelaBoishakh, distribution, independence];
    const events = [
        {title: 'পহেলা বৈশাখ ১৪৩০', image: pohelaBoishakh, date: 'April 17, 2023'},
        {title: 'Distribute goods among the flood victims', image: distribution, date: 'July 1, 2022'},
        {title: 'স্বাধীনতা দিবস', image: independence, date: 'June 8, 2022'},
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1248px] gap-12 mx-auto'>
            {
                events?.map((event, index) => (
                    <div key={index} className="w-full  overflow-hidden bg-white shadow-lg">
                        <img className="object-cover w-full h-56" src={event?.image} alt="Events" />

                        <div className="py-5 px-3">
                            <p className='flex gap-2 items-center'>
                                <span><MdOutlineDateRange className='text-xl' /></span>
                                <span>{event?.date}</span>
                            </p>

                            <Link to="#" className="block text-xl font-bold text-gray-800 mt-2 hover:text-blue-500" tabIndex="0" role="link">{event?.title}</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default EventCard;
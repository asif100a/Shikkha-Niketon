import EventCard from "../../UI/EventCard";
import eventBackgroundImage from "/images/event-section-background.png";

const Events = () => {
    return (
        <section style={{ backgroundImage: `url(${eventBackgroundImage})` }} className="mt-16 py-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold uppercase">Recent and Upcoming Events</h1>
                <p className="mt-3">I feel the presence of the Almighty, who formed us in his own image, and the breath</p>

                <hr className="h-1 w-32 bg-yellow-500 mx-auto mt-6" />
            </div>


            <div className="mt-12">
                <EventCard />
            </div>
        </section>
    );
};

export default Events;
import Banner from '../../components/sections/Banner/Banner';
import Events from '../../components/sections/Events/Events';
import PrincipalMessage from '../../components/sections/PrincipalMessage/PrincipalMessage';

const Home = () => {
    return (
        <main>
            <Banner />
            <PrincipalMessage />
            <Events />
        </main>
    );
};

export default Home;
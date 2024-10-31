import { Link } from 'react-router-dom';
import Headline from '../../UI/Headline';
import NavLinks from '../../UI/NavLinks';
import schoolLogo from "/images/school-logo.png";

const Navbar = () => {
    return (
        <header className='bg-[#152372] border-b border-[#2035aa]'>
            {/* Headline */}
            <Headline />
            {/* School Logo & Name */}
            <div className='flex items-center px-1 lg:px-3 text-white'>
                <Link to="https://test.io/">
                    <img src={schoolLogo} alt="Shikkha Niketon" className="w-24 h-auto" />
                </Link>

                <h1 className='flex-1 text-4xl font-bold text-center'>শিক্ষা নিকেতন</h1>
            </div>
            {/* Navigation Links */}
            <NavLinks />
        </header>
    );
};

export default Navbar;
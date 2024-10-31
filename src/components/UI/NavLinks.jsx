import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <nav className='border-t'>
            <ul className='w-fit mx-auto text-[14px] flex justify-between'>
                <li>
                    <NavLink to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2'>HOME</button>
                    </NavLink>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2 flex gap-1 items-center'>
                            <span>ABOUT US</span>
                            <span><IoIosArrowDown /></span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2 flex gap-1 items-center'>
                            <span>ACADEMIC</span>
                            <span><IoIosArrowDown /></span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2 flex gap-1 items-center'>
                            <span>DEPARTMENTS</span>
                            <span><IoIosArrowDown /></span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2'>
                            NOTICE
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2 flex gap-1 items-center'>
                            <span>PAYMENT</span>
                            <span><IoIosArrowDown /></span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2 flex gap-1 items-center'>
                            <span>RESULTS</span>
                            <span><IoIosArrowDown /></span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={'https://test.io/'}>
                        <button className='bg-inherit text-white hover:bg-white hover:text-blue-500 p-2'>
                            CONTACT
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
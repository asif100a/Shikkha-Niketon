import { FaPhone } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <section className="w-full max-w-4xl text-white relative bg-[#152372] shadow-md rounded-3xl py-6 flex justify-around items-center">
            <div className="flex flex-col items-center gap-2">
                <div>
                    <IoLocationOutline className="text-2xl text-yellow-500" />
                </div>
                <div className="text-center">
                    <h4 className="text-lg font-medium">Address</h4>
                    <Link to="https://test.io/">New Airport Road, Dhaka-1229</Link>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div>
                    <FaPhone className="text-xl text-yellow-500" />
                </div>
                <div className="text-center">
                    <h4 className="text-lg font-medium">Phone Number</h4>
                    <Link to="https://test.io/">+8801900152033</Link>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div>
                    <IoLocationOutline className="text-2xl text-yellow-500" />
                </div>
                <div className="text-center">
                    <h4 className="text-lg font-medium">Email Address</h4>
                    <Link to="https://test.io/">study-hub@gmail.com</Link>
                </div>
            </div>
        </section >
    );
};

export default Contact;
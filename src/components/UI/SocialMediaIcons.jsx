import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
    return (
        <ul className="flex gap-6">
            <li>
                <Link to="#Facebook" className="">
                    <button className=" w-fit h-fit p-3 rounded-full bg-white bg-opacity-25"><TiSocialFacebook className="text-white text-xl" /></button>
                </Link>
            </li>
            <li>
                <Link to="#Twitter">
                    <button className="w-fit h-fit p-3 rounded-full bg-white bg-opacity-25"><FaTwitter className="text-white text-xl" /></button>
                </Link>
            </li>
            <li>
                <Link to="#Youtube">
                    <button className="w-fit h-fit p-3 rounded-full bg-white bg-opacity-25"><FaYoutube className="text-white text-xl" /></button>
                </Link>
            </li>
            <li>
                <Link to="#LinkedIn">
                    <button className="w-fit h-fit p-3 rounded-full bg-white bg-opacity-25"><FaLinkedinIn className="text-white text-xl" /></button>
                </Link>
            </li>
        </ul>
    );
};

export default SocialMediaIcons;
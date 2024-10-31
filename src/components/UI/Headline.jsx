import { FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Headline = () => {
    return (
        <div className="bg-[#2035aa] text-white w-full py-1 px-3 lg:py-1 lg:px-12">
            <div className="flex justify-between items-center w-full flex-wrap gap-[20px]">
                {/* Headline */}
                <p className="text-[0.8rem] sm:text-[0.9rem]">
                    Headline
                </p>
                {/* General Notice */}
                <div className="text-[0.8rem] sm:text-[0.9rem] flex gap-6">
                    <p>General Notice: </p>
                    <ul className='list-disc flex gap-6'>
                        <li>গাছ বিক্রয়ের প্রকাশ্য নিলাম বিজ্ঞপ্তি</li>
                        <li>ইসলামের ইতিহাস ও</li>
                    </ul>
                </div>
                {/* Social Media Icons */}
                <ul className="flex justify-center items-center gap-3">
                    <li>
                        <button><TiSocialFacebook className="text-white text-base" /></button>
                    </li>
                    <li>
                        <button><FaYoutube className="text-white text-base" /></button>
                    </li>
                    <li>
                        <button><FaTwitter className="text-white text-base" /></button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Headline;
import Contact from "../../sections/Contact/Contact";
import schoolImage from "/images/school.jpg";
import schoolLogo from "/images/school-logo.png";
import SocialMediaIcons from "../../UI/SocialMediaIcons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${schoolImage})` }} className="mt-36">
            <div className="w-full h-full bg-black bg-opacity-75 relative">
                <div className="absolute -top-[76px] w-full flex justify-center">
                    <Contact />
                </div>

                <div className="flex justify-center items-center gap-12 text-white pt-36">
                    <div className="flex flex-col items-start gap-3">
                        <div className="w-fit flex flex-col items-center gap-3">
                            <img src={schoolLogo} alt="" className="w-24 h-auto" />
                            <h3 className="text-3xl">শিক্ষা নিকেতন</h3>
                        </div>

                        <div className="w-full max-w-sm">
                            <p>
                                <span className="font-bold">মূলমন্ত্র: </span> <span>“জ্ঞানই শক্তি”</span>
                            </p>
                            <p>
                                <span className="font-bold">লক্ষ্য ও উদ্দেশ্য: </span> <span>আমাদের লক্ষ্য হল শিক্ষার্থীদের মানসিক, শারীরিক, সামাজিক ও নৈতিক বিকাশ ঘটানো, যাতে তারা মানবিক মূল্যবোধে সমৃদ্ধ ও জ্ঞানসম্পন্ন হয়ে সমাজে অবদান রাখতে পারে। শিক্ষার্থীদের এমনভাবে গড়ে তোলা যাতে তারা ভবিষ্যতে দায়িত্বশীল নাগরিক হিসেবে নিজেদের প্রতিষ্ঠিত করতে পারে, এবং উদ্ভাবনী চিন্তা, নৈতিক মূল্যবোধ, ও সমাজসেবা করার জন্য প্রস্তুত থাকে।</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h5 className="text-base font-medium uppercase">Our Sitemap</h5>
                        <hr className="w-16 h-[2px] bg-yellow-500" />

                        <div className="flex gap-6">
                            <ul>
                                <li><Link to="https://test.io/">Notice Board</Link></li>
                                <li><Link to="https://test.io/">Attendance</Link></li>
                                <li><Link to="https://test.io/">Admission</Link></li>
                                <li><Link to="https://test.io/">Exam</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="https://test.io/">Result</Link></li>
                                <li><Link to="https://test.io/">Payment</Link></li>
                                <li><Link to="https://test.io/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="z-10 flex justify-center pt-6 pb-3">
                    <SocialMediaIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
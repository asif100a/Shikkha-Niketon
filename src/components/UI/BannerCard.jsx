import teacher from '/svg/teacher.svg'
import facultyStaffs from '/svg/faculty-staffs.svg'
import results from '/svg/results.svg'
import alumni from '/svg/alumni.svg'
import clubs from '/svg/clubs.svg'
import information from '/svg/information.svg'
import { Link } from 'react-router-dom'

const BannerCard = () => {
    const cards = [
        { cardName: 'Principal Corner', cardIcon: teacher },
        { cardName: 'Faculty & Staffs', cardIcon: facultyStaffs },
        { cardName: 'Results', cardIcon: results },
        { cardName: 'Alumni', cardIcon: alumni },
        { cardName: 'Clubs', cardIcon: clubs },
        { cardName: 'Admission Information', cardIcon: information },
    ];

    return (
        <div className='flex gap-[58px]'>
            {
                cards?.map((card, index) => (
                    <Link to="https://test.io/" key={index}>
                        <div
                            className="w-full sm:w-[80%] lg:w-40 shadow-md h-56 transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group flex items-center justify-center flex-col gap-[10px] bg-[#152372] hover:scale-110">

                            {/*  scalable background and image  */}
                            <div>
                                <img src={card?.cardIcon} alt={card?.cardName}
                                    className="w-[80px]" />
                            </div>

                            {/*  the title  */}
                            <h3 className="text-lg font-bold text-white text-center z-20">{card.cardName}</h3>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default BannerCard;
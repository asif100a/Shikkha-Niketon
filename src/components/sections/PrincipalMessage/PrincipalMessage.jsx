import principal from '/images/principal.jpg';

const PrincipalMessage = () => {
    return (
        <section className='flex gap-6 w-[1248px] mx-auto mt-60'>
            <div className='w-[400px]'>
                <img src={principal} alt="Principal" className='w-full' />
            </div>

            <div className='flex-1 space-y-6'>
                <h1 className="text-3xl font-bold uppercase">Principal Message</h1>
                <textarea type="text" name="" id="" className="border-2 border-black w-full px-3 py-1 h-24 outline-none rounded-xl" />
                <div>
                    <p>Education is considered to be the core instrument of human development. Our objective at Notre Dame is the harmonious development of the intellectual, physical, social, moral and spiritual faculties of the students. At the heart of the institution is a core of shared values, which reflects our ethos and everything we do. These values foster high standards of behavior and achievement, support a framework of respect, promote self-confidence and provide a warm, harmonious environment in which our students learn and grow.</p>

                    <p>Our approach is student-centered and we believe that the approach to motivating and getting the best out of the student is based on the positive reinforcement of good work and good behavior. Our endeavor will be to ensure that students grow in their full potential and be competent to take responsibility in all walks of life. We teach our students that nothing worthwhile can be achieved without a sense of discipline and we expect our students to conform to high disciplinary standards and cherish the values of tolerance, compassion, respect, obedience and independent thinking.</p>
                </div>
            </div>
        </section>
    );
};

export default PrincipalMessage;
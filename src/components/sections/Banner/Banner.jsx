import BannerCard from '../../UI/BannerCard'
import Slider from '../../UI/Slider'

const Banner = () => {
  return (
    <section className='relative'>
      <Slider />
      <div className='w-full absolute -bottom-40 z-10 flex justify-center items-center'>
        <BannerCard />
      </div>
    </section>
  )
}

export default Banner

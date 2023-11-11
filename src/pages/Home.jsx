import image from "../assets/images/start-img.png"
import Button from "../components/Button"

function Home() {
  return (
    <section className='bg-black h-full'>
        <div className='max-container padding-container flexCenter flex-col mb-[40px]'>
            <div>
                <img src={image} alt="weather emojis" />
            </div>
            <div className="mt-[40px] mb-[24px]">
                <h1 className="text-white text-[80px]">SHOW ME THE WEATHER</h1>
            </div>
            <Button text="START" link="/dashboard"/>
        </div>
    </section>
  )
}

export default Home
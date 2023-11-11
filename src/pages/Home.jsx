import image from "../assets/images/start-img.png"
import Button from "../components/Button"

function Home() {
  return (
    <section className='bg-black h-screen'>
        <div className='max-container padding-container flexCenter flex-col mb-[40px]'>
            <div>
                <img src={image} alt="weather emojis" />
            </div>
            <div className="mt-[40px] mb-[24px] text-center">
                <h1 className="text-white text-[80px] leading-[80%]">
                    SHOW ME<br />
                    THE<br /> 
                    WEATHER
                </h1>
            </div>
            <Button text="START" link="/dashboard"/>
        </div>
    </section>
  )
}

export default Home
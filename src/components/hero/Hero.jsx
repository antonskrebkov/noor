import React from "react"
import Container from "../Container"
import List from "../list/List"
import HeroImage from "./HeroImage"

const Hero = () => {
  return (
    <section className="bg-hero-beige">
      <Container>
        <div className="flex flex-col tablet:flex-row justify-center items-center gap-2.5">
          <div className="w-full mobile:w-3/5 tablet:w-[46%] my-[15px] mobile:my-[30px]">
            <div className="flex items-center justify-center mb-2 mobile:mb-[20px]">
              <img className="max-w-[70px]" src="/stars.webp" alt="rating" />
              <span className="font-gotham text-sm mobile:text-[16px] leading-7 ml-2.5 tracking-tighter">
                103,743+ Happy Noor Customers!
              </span>
            </div>
            <h1 className="font-roboto-bold tablet:font-roboto-black text-[23px] tablet:text-[40px] leading-[1.3] text-center text-black">
              <span className="text-hero-green">
                The Korean Needle-Free Botox Alternative:
              </span>{" "}
              Lift Deep Wrinkles and Revives a Youthful, Natural Look… In a Few
              Days*
            </h1>
            <HeroImage styles="block mobile:hidden mobile:w-[100vw] self-center tablet:self-end" />
            <List />
            <div>
              <div className="flex flex-col justify-center text-center mb-[20px] mobile:mb-0">
                <a
                  className="px-5 mobile:px-6 py-3 mobile:py-3.5 mx-auto my-0 text-[20px] text-white leading-7 bg-hero-green rounded-[10px] font-roboto-bold cursor-pointer"
                  href="https://noorhairoffers.com/skin-cream/offers"
                >
                  50% OFF FOR EXISTING CUSTOMERS!
                </a>
                <p className="my-2 font-gotham text-xs leading-7 capitalize tracking-tighter">
                  100% Satisfaction. 180-Day Money Back Guarantee
                </p>
                <img
                  className="w-[208px] my-0 mx-auto"
                  src="/payments.png"
                  alt="pay methods"
                ></img>
              </div>
            </div>
          </div>
          <HeroImage styles="hidden mobile:block w-[70%] tablet:w-[54%] self-center tablet:self-end" />
        </div>
      </Container>
    </section>
  )
}

export default Hero

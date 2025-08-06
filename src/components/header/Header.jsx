import React from "react"
import Timer from "../timer/Timer"
import Container from "../Container"

const Header = () => {
  return (
    <header>
      <div className="bg-header-green">
        <Container>
          <div className="flex justify-center items-center gap-6 p-1.5">
            <div>
              <h2 className="text-header-text text-center text-[11px] mobile:text-sm leading-none font-normal uppercase">
                EXISTING CUSTOMER DEAL ENDING IN 6 HOURS
              </h2>
            </div>
            <Timer />
          </div>
        </Container>
      </div>
      <div className="bg-white pt-2 pb-2.5 mobile:py-4">
        <img
          src="noor.webp"
          className="mx-auto w-[116px] mobile:w-[167px] h-auto"
          alt="logo"
        />
      </div>
    </header>
  )
}

export default Header

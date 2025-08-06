import React from "react"

const CustomColon = React.memo(() => {
  return (
    <span className="relative inline-block w-[5px] h-[11px] mt-0.5">
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[2.5px] h-[2.5px] bg-timer-bg rounded-full"></span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2.5px] h-[2.5px] bg-timer-bg rounded-full"></span>
    </span>
  )
})

export default CustomColon

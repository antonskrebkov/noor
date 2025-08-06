import React from "react"

const TimerCart = React.memo(({ value, unit }) => {
  return (
    <div className="w-[27px] mobile:w-[23.8px] text-center bg-timer-bg rounded-[3px] px-1 py-0.5 text-header-green">
      <p className="text-sm font-bold leading-[1.3]">{value}</p>
      <p className="text-[8px] leading-[1.3]">{unit}</p>
    </div>
  )
})

export default TimerCart

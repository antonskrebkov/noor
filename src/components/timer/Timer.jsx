import React from "react"
import TimerCart from "./TimerCart"
import CustomColon from "./CustomColon"
import { useTimer } from "../../hooks/useTimer"

const Timer = () => {
  const { hours, minutes, seconds } = useTimer(6 * 3600)

  return (
    <div className="flex text-header-text items-center gap-2.5">
      <TimerCart value={hours} unit="Hrs" />
      <CustomColon />
      <TimerCart value={minutes} unit="Min" />
      <CustomColon />
      <TimerCart value={seconds} unit="Sec" />
    </div>
  )
}

export default Timer

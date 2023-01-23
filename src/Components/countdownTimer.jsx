import React, { useEffect, useState } from "react"

export function CountdownTimer({ startTime, endTime }) {
  const nowDate = new Date().toLocaleDateString()
  const nowTime = new Date().toLocaleTimeString()
  const [presentTime, setPresentTime] = useState(`${nowDate} || ${nowTime}`)

  useEffect(function () {
    setPresentTime(startTime === 0 ? "Time is End!" : presentTime)
  }, [])

  return (
    <div className='theme flexs w-full min-h-screen h-auto flex-col'>
      <h1 className='text-5xl my-3'>Hey CountdownTimer:</h1>
      <h1 className='text-8xl my-3'>{presentTime}</h1>
    </div>
  )
}

export default CountdownTimer

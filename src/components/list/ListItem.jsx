import React from "react"

const ListItem = ({ text }) => {
  return (
    <li className="text-[16px] mobile:text-[20px] leading-[1.3] mobile:leading-[1.4] font-gotham tracking-tighter">
      {text}
    </li>
  )
}

export default ListItem

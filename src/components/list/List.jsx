import React from "react"
import ListItem from "./ListItem"

const List = () => {
  const items = [
    "✔️ Visible Results in as little as 2-4 Days*",
    "✔️ Relaxes muscles without any risk*",
    "✔️ Powered by Syn-Ake™ Peptide: Clinically shown to reduce wrinkle depth by 52% in 28 days¹",
    "✔️ Works For All Skin Types At Any Age*",
    "✔️ Hydrating + Skin-Firming Without Fillers or Freezing",
  ]

  return (
    <ul className="flex flex-col gap-0.5 mx-auto my-[20px] mobile:text-center">
      {items.map((item) => (
        <ListItem key={item} text={item} />
      ))}
    </ul>
  )
}

export default List

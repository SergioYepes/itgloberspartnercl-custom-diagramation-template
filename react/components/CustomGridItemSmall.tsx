import React, { ReactNode } from "react"
import styles from "./styles.css"


type Props = {
  elementOne: ReactNode,
  elementTwo: ReactNode
}

const CustomGridItemSmall = ({ elementOne, elementTwo }: Props) => {
  return (
    <div className={styles["grid__itemSmall"]}>
      <div className={styles["grid__itemSmall--one"]}>
        {elementOne}
      </div>
      <div className={styles["grid__itemSmall--two"]}>
        {elementTwo}
      </div>
    </div>
  )
}

export default CustomGridItemSmall
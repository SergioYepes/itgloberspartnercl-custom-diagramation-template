import React, { ReactNode } from "react"
import CustomGridItemBig from "./CustomGridItemBig"
import CustomGridItemSmall from "./CustomGridItemSmall"
import customGridSchema from "../schema/custom-grid-schema"
import styles from "./styles.css"

type Props = {
  gridType: number
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({ gridType = 1, children }: Props) => {
  const gridTypeClass: string = `grid__${gridType}`

  return (
    <div>
      <h1 className={styles["custom__grid--title"]}>Recordemos que necesitamos hacer para solicitar una garantía</h1>
      <div className={styles[gridTypeClass]}>
        <CustomGridItemBig element={children[0]} />
        <CustomGridItemSmall elementOne={children[1]} elementTwo={children[2]} />
        <CustomGridItemSmall elementOne={children[3]} elementTwo={children[4]} />
      </div>
    </div>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid
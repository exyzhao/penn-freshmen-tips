import { useState } from "react"
import styled from "styled-components"

import Tip from "../components/Tip"

// scaleFactor adjusts how large the component is when clicked
const scaleFactor = 2.5

// x, y in px
const tips = [
  {
    number: 1,
    text: "Go to office hours at least once per semester",
    bgcolor: "#F8DBB1",
    x: 40,
    y: 100
  },
  {
    number: 2,
    text: "Don't do math at Penn",
    bgcolor: "#F8B1D3",
    x: 100,
    y: 300
  },
  {
    number: 3,
    text: "eat your veggie",
    bgcolor: "#C4F8B1",
    x: 300,
    y: 200
  },
  {
    number: 4,
    text: "eat your veg",
    bgcolor: "#FFAF3A",
    x: 40,
    y: 550
  },
  {
    number: 5,
    text: "eat your ve",
    bgcolor: "#76A2C6",
    x: 500,
    y: 110
  },
  {
    number: 6,
    text: "eat your v",
    bgcolor: "#D4B1F8",
    x: 550,
    y: 350
  },
]

const Tips = styled.div`
  position: absolute;
  scale: ${props => props.zoomed ? scaleFactor : 1};
  left: ${props => props.x};
  top: ${props => props.y};
`

const Academics = () => {

  const [zoomed, setZoomed] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <h1>Academics</h1>
      <Tips zoomed={zoomed} x={x} y={y}>

        {tips.map(tip => (
          <Tip number={tip.number} text={tip.text} bgcolor={tip.bgcolor} x={tip.x} y={tip.y} key={tip.number}
            handleClick={() => {
              setZoomed(!zoomed)
              // -scaleFactor * x places component @ left = 0
              setX(zoomed ? 0 : ["calc(", -scaleFactor * tip.x, "px + 38vw)"].join(""))
              setY(zoomed ? 0 : ["calc(", -scaleFactor * tip.y, "px + 25vh)"].join(""))
            }}
          />
        ))}

      </Tips>
    </>
  )
}

export default Academics